namespace backend.DTO
{
    public class ExpensesDTO
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public float Sum { get; set; }
        public DateTime Date { get; set; }
    }
}
