using Microsoft.EntityFrameworkCore;

namespace backend.Context
{
    public static class MigratorHelper
    {
        public static IApplicationBuilder MigrationDatabase(this IApplicationBuilder application)
        {
            using (var scope = application.ApplicationServices.CreateScope())
            {
                using (var context = scope.ServiceProvider.GetRequiredService<UserContext>())
                {
                    context.Database.Migrate();
                }
            }

            using (var scope = application.ApplicationServices.CreateScope())
            {
                using (var context = scope.ServiceProvider.GetRequiredService<GoalsDbContext>())
                {
                    context.Database.Migrate();
                }
            }

            using (var scope = application.ApplicationServices.CreateScope())
            {
                using (var context = scope.ServiceProvider.GetRequiredService<PaymentsDbContext>())
                {
                    context.Database.Migrate();
                }
            }
            return application;
        }
    }
}
