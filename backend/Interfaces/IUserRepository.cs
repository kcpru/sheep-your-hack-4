using backend.Models;

namespace backend.Interfaces
{
    public interface IUserRepository
    {
        public UserInfoResult GetUserEmailByToken(string token);
    }
}
