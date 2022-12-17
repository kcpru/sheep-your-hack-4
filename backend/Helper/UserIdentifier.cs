using backend.Authentication;

namespace backend.Helper
{
    public class UserIdentifier
    {
        private readonly JWTManager _jwtManager;

        public UserIdentifier(
            JWTManager jwtManager
            )
        {
            _jwtManager = jwtManager;
        }
        //public int GetUserEmailByToken()
        //{

        //}
    }
}
