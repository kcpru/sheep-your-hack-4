namespace backend.Entities
{
    public class Achievments
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsEarned { get; set; }
    }
}
