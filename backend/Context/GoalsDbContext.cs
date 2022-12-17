using backend.Entities;
using Microsoft.EntityFrameworkCore;

namespace backend.Context
{
    public class GoalsDbContext : DbContext
    {
        public GoalsDbContext(DbContextOptions<GoalsDbContext> opt) : base(opt)
        {

        }
        public DbSet<Goals> Goals { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
