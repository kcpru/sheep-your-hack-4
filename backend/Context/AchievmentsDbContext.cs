using backend.Entities;
using Microsoft.EntityFrameworkCore;

namespace backend.Context
{
    public class AchievmentsDbContext : DbContext
    {
        public AchievmentsDbContext(DbContextOptions<AchievmentsDbContext> opt) : base(opt)
        {

        }
        public DbSet<Achievments> Achievments { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
