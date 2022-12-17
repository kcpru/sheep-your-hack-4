using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Entities
{
    public class Goals
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Name { get; set; }
        public string ImageUrl { get; set; }
        public float Cost { get; set; }
        public float CurrentAmount { get; set; }
        public DateTime Deadline { get; set; }

        public float SavingPerWeek { get; set; }
    }
}
