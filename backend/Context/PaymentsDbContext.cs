using backend.Entities;
using Microsoft.EntityFrameworkCore;

namespace backend.Context
{
    public class PaymentsDbContext : DbContext
    {
        public PaymentsDbContext(DbContextOptions<PaymentsDbContext> opt) : base(opt)
        {

        }
        public DbSet<Incomes> Incomes { get; set; }
        public DbSet<Expenses> Expenses { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
