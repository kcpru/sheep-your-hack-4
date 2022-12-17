using backend.Models;

namespace backend.DTO
{
    public class UserRegisterDTO
    {
        public string Nickname { get; set; }
        public int ParentId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }
        public string Password { get; set; }
        public string PasswordConfirm { get; set; }
    }
}
