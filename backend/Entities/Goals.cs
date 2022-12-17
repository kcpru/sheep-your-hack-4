namespace backend.Entities
{
    public class Goals
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Name { get; set; }
        public float Cost { get; set; }
        public float CurrentAmount { get; set; }
        public DateTime Deadline { get; set; }

        public float SavingPerWeek { get; set; }
    }
}
