namespace backend.Entities
{
    public class Incomes
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public float Sum { get; set; }
        public DateTime PaymentDate { get; set; }
    }
}
