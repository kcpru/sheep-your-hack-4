namespace backend.Entities
{
    public class Expenses
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public float Sum { get; set; }
        public DateTime Date { get; set; }
    }
}
