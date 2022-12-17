namespace backend.Models
{
    public class UserInfoResult
    {
        public int Id { get; set; }
        public string Nickname { get; set; }
        public string Email { get; set; }
        public Role Role { get; set; }
    }
}
