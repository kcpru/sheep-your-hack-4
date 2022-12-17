﻿using backend.Context;
using backend.DTO;
using backend.Entities;
using backend.Models;
using Microsoft.AspNetCore.Identity;
using System.Diagnostics.CodeAnalysis;
using System.Net.Mail;
using System.Text.RegularExpressions;

namespace backend.Authentication
{
    public class AccountsManager
    {
        private readonly UserContext dbContext;
        private readonly IPasswordHasher<User> passwordHasher;
        private readonly JWTManager jwtManager;

        private const int MinPasswordLength = 8;
        private const int MaxPasswordLength = 32;
        private const int MinNicknameLength = 4;
        private const int MaxNicknameLength = 32;
        private readonly Regex HasNumber = new Regex(@"[0-9]+");
        private readonly Regex HasUpperChar = new Regex(@"[A-Z]+");
        private readonly Regex HasLowerChar = new Regex(@"[a-z]+");
        private readonly Regex HasSymbols = new Regex(@"[!@#$%^&*()_+=\[{\]};:<>|./?,-]");

        private DateTime RefreshTokenExpiryDate => DateTime.Now.AddDays(1);

        public AccountsManager(UserContext dbContext, JWTManager jwtManager)
        {
            this.dbContext = dbContext;
            passwordHasher = new PasswordHasher<User>();
            this.jwtManager = jwtManager;
        }


        public RegisterResult Register([NotNull] UserRegisterDTO dto, out int newUserId)
        {
            newUserId = default;

            RegisterResult validationResult = ValidateRegisterRequest(dto);

            if (validationResult != RegisterResult.Success)
                return validationResult;

            User user = new User();
            string password = passwordHasher.HashPassword(user, dto.Password);

            user = User.Map(dto, password);

            try
            {
                dbContext.Users.Add(user);
                dbContext.SaveChanges();
            }
            catch
            {
                return RegisterResult.UnknownError;
            }

            newUserId = user.Id;
            return RegisterResult.Success;
        }

        public LoginResult Login([NotNull] UserLoginDTO dto, out TokenResult? token, out User? u)
        {
            token = null;
            u = null;

            User? user = GetUser(dto.Email);

            if (user == null)
                return LoginResult.AccountNotFound;

            PasswordVerificationResult result = passwordHasher.VerifyHashedPassword(user, user.Password, dto.Password);

            if (result != PasswordVerificationResult.Failed)
            {
                token = jwtManager.CreateTokenResult(user);
                u = user;

                user.RefreshToken = token.RefreshToken;
                user.RefreshTokenExpiryDate = RefreshTokenExpiryDate;
                dbContext.SaveChanges();
            }

            return result switch
            {
                PasswordVerificationResult.Success => LoginResult.Success,
                PasswordVerificationResult.SuccessRehashNeeded => LoginResult.SuccessShouldUpdatePassword,
                _ => LoginResult.WrongPassword,
            };
        }

        public void UpdateRefreshToken(User user, string newRefreshToken)
        {
            user.RefreshToken = newRefreshToken;
            user.RefreshTokenExpiryDate = RefreshTokenExpiryDate;
            dbContext.SaveChanges();
        }

        public User? GetUser(string email) => dbContext.Users.FirstOrDefault(u => u.Email == email);

        public bool DoesEmailExists(string email) => dbContext.Users.Any(u => u.Email == email);

        public bool DoesNicknameExists(string nickname) => dbContext.Users.Any(u => u.Nickname == nickname);

        private RegisterResult ValidateRegisterRequest(UserRegisterDTO dto)
        {
            if (!MailAddress.TryCreate(dto.Email, out _))
                return RegisterResult.WrongEmail;

            if (dto.Password != dto.PasswordConfirm)
                return RegisterResult.PasswordsNotSame;

            if (!HasNumber.IsMatch(dto.Password) || !HasUpperChar.IsMatch(dto.Password) || !HasLowerChar.IsMatch(dto.Password) || !HasSymbols.IsMatch(dto.Password)
                || dto.Password.Length < MinPasswordLength || dto.Password.Length > MaxPasswordLength)
                return RegisterResult.WrongPassword;

            if (dto.Nickname.Length < MinNicknameLength || dto.Nickname.Length > MaxNicknameLength)
                return RegisterResult.WrongNickname;

            if (DoesEmailExists(dto.Email))
                return RegisterResult.AccountWithEmailAlreadyExists;

            if (DoesNicknameExists(dto.Nickname))
                return RegisterResult.AccountWithNicknameAlreadyExists;

            return RegisterResult.Success;
        }
    }
}
