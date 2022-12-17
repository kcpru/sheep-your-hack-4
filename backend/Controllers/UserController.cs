﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Security.Claims;
using backend.Models;
using backend.Authentication;
using backend.Entities;
using backend.DTO;
using Microsoft.AspNetCore.Cors;

namespace backend.Controllers
{
    [EnableCors("AllowAll")]
    [ApiController]
    [Route("[controller]")]
    public class UserController : Controller
    {
        private readonly AccountsManager accountsManager;
        private readonly JWTManager jwtManager;
        private readonly ILogger<UserController> logger;

        public UserController(AccountsManager accountsManager, JWTManager jwtManager, ILogger<UserController> logger)
        {
            this.accountsManager = accountsManager;
            this.jwtManager = jwtManager;
            this.logger = logger;
        }

        [HttpGet]
        [Route("test")]
        public ActionResult<string> Test()
        {
            return "Test message";
        }

        [HttpPost]
        [Route("register")]
        public ActionResult Register([FromBody] UserRegisterDTO user)
        {
            logger.LogInformation("Attempt to register user");

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            RegisterResult result = accountsManager.Register(user, out int newUserId);

            if (result == RegisterResult.Success)
            {
                logger.LogInformation("Created new user with id: {a}", newUserId);
                return CreateRegisterResultObject(result, newUserId);
            }
            else
            {
                logger.LogInformation("Unable to create new user: {a}", result.ToString());
                return CreateRegisterResultObject(result);
            }
        }

        [HttpPost]
        [Route("login")]
        public ActionResult Login([FromBody] UserLoginDTO dto)
        {
            logger.LogInformation("Attempt to login: {a}", dto.Email);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            LoginResult result = accountsManager.Login(dto, out TokenResult? token, out User? user);

            if (result != LoginResult.Success && result != LoginResult.SuccessShouldUpdatePassword)
            {
                logger.LogInformation("Failed to login: {a} | {b}", dto.Email, result);
                return CreateLoginResultObject(result);
            }

            return CreateLoginResultObject(result, token, user);
        }

        [HttpPost]
        [Route("getuser")]
        public ActionResult<UserInfoResult> GetUser()
        {
            string token = Request.Headers["Authorization"].ToString();
            ClaimsPrincipal? principal = jwtManager.GetPrincipalFromToken(token, false);

            if (principal == null || principal.Identity == null || principal.Identity.Name == null)
                return BadRequest();

            User user = accountsManager.GetUser(principal.Identity!.Name!)!;

            UserInfoResult userInfo = new UserInfoResult()
            {
                Id = user.Id,
                Nickname = user.Nickname,
                Email = user.Email
            };

            return Ok(userInfo);
        }

        [HttpPost]
        [Route("refresh")]
        public ActionResult<TokenResult> RefreshToken([FromBody] TokenRefreshRequestDTO dto)
        {
            if (!ModelState.IsValid || dto.Token == null || dto.RefreshToken == null)
                return BadRequest(ModelState);

            ClaimsPrincipal? principal = jwtManager.GetPrincipalFromToken(dto.Token, true);

            if (principal == null || principal.Identity == null || principal.Identity.Name == null)
                return BadRequest();

            string nickname = principal.Identity.Name;
            User? user = accountsManager.GetUser(nickname);

            if (user == null || user.RefreshToken != dto.RefreshToken || user.RefreshTokenExpiryDate <= DateTime.Now)
                return Unauthorized();

            TokenResult newTokens = jwtManager.CreateTokenResult(user);
            accountsManager.UpdateRefreshToken(user, newTokens.RefreshToken);

            return Ok(newTokens);
        }

        private ActionResult CreateRegisterResultObject(RegisterResult result, int? id = null)
        {
            Dictionary<string, string> value = new Dictionary<string, string>()
            {
                { "message", result.ToString() }
            };

            if (id != null && result == RegisterResult.Success)
                value.Add("Id", id.ToString()!);

            JsonResult response = Json(value);
            response.StatusCode = result == RegisterResult.Success ? ((int)HttpStatusCode.OK) : ((int)HttpStatusCode.BadRequest);

            return response;
        }

        private ActionResult CreateLoginResultObject(LoginResult result, TokenResult? tokens = null, User? user = null)
        {
            Dictionary<string, string> value = new Dictionary<string, string>()
            {
                { "message", result.ToString() }
            };

            if (tokens != null && user != null && (result == LoginResult.Success || result == LoginResult.SuccessShouldUpdatePassword))
            {
                value.Add("token", tokens.Token);
                value.Add("refreshToken", tokens.RefreshToken);
                value.Add("id", user.Id.ToString());
                value.Add("nickname", user.Nickname);
                value.Add("email", user.Email);
            }

            JsonResult response = Json(value);
            response.StatusCode = result == LoginResult.Success || result == LoginResult.SuccessShouldUpdatePassword ? ((int)HttpStatusCode.OK) : ((int)HttpStatusCode.BadRequest);

            return response;
        }
    }
}
