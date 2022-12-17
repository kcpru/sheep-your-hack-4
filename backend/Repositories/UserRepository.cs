using backend.Authentication;
using backend.Interfaces;
using backend.Models;
using System.Security.Claims;

namespace backend.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly JWTManager _jwtManager;
        private readonly AccountsManager _accountsManager;

        public UserRepository(
            JWTManager jwtManager,
            AccountsManager accountsManager)
        {
            _jwtManager = jwtManager;
            _accountsManager = accountsManager;
        }
        public UserInfoResult GetUserEmailByToken(string token)
        {
            ClaimsPrincipal? principal = _jwtManager.GetPrincipalFromToken(token, false);

            if (principal == null || principal.Identity == null || principal.Identity.Name == null)
                return null;

            var user = _accountsManager.GetUser(principal.Identity!.Name!)!;

            return new UserInfoResult()
            {
                Id = user.Id,
                Nickname = user.Nickname,
                Email = user.Email
            };
        }
    }
}
