using backend.Authentication;
using backend.Context;
using backend.Interfaces;
using backend.Repositories;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.Configuration;
using Microsoft.AspNetCore.Mvc;

namespace backend
{
    public class Program
    {
        public static void Main(string[] args)
        {
            WebApplicationBuilder? builder = WebApplication.CreateBuilder(args);
            ConfigureJWT(builder);
            builder.Services.AddControllers();
            builder.Services.AddSingleton<JWTManager>();
            builder.Services.AddScoped<AccountsManager>();

            builder.Services.AddScoped<IGoalsRepository, GoalsRepository>();
            builder.Services.AddScoped<IPaymentRepository, PaymentRepository>();
            builder.Services.AddScoped<IUserRepository, UserRepository>();
            builder.Services.AddScoped<IAchievmentsRepository, AchievmentsRepository>();

            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowAll",
                    builder => builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
            });

            builder.Services.AddLogging(configure =>
            {
                configure.AddConsole();
                configure.AddFilter(level => level >= LogLevel.Information);
            });

            //TODO fetch from configuration manager
            var cnn = "Server=127.0.0.1;Port=5432;User Id=postgres;Password=postgres;Database=postgres";
            builder.Services.AddDbContext<UserContext>(opt =>
            {
                opt.UseNpgsql(cnn.ToString());
            });

            builder.Services.AddDbContext<PaymentsDbContext>(opt =>
            {
                opt.UseNpgsql(cnn.ToString());
            });

            builder.Services.AddDbContext<GoalsDbContext>(opt =>
            {
                opt.UseNpgsql(cnn.ToString());
            });

            builder.Services.AddDbContext<AchievmentsDbContext>(opt =>
            {
                opt.UseNpgsql(cnn.ToString());
            });

            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);


            WebApplication? app = builder.Build();
            using (var scope = app.Services.CreateScope())
            {
                var db = scope.ServiceProvider.GetRequiredService<GoalsDbContext>();
                db.Database.Migrate();
            }

            using (var scope = app.Services.CreateScope())
            {
                var db = scope.ServiceProvider.GetRequiredService<PaymentsDbContext>();
                db.Database.Migrate();
            }

            using (var scope = app.Services.CreateScope())
            {
                var db = scope.ServiceProvider.GetRequiredService<UserContext>();
                db.Database.Migrate();
            }

            using (var scope = app.Services.CreateScope())
            {
                var db = scope.ServiceProvider.GetRequiredService<AchievmentsDbContext>();
                db.Database.Migrate();
            }

            app.UseCors();
            app.UseAuthentication();
            app.UseAuthorization();
            app.MapControllers();
            app.Run();
        }

        private static void ConfigureJWT(WebApplicationBuilder builder)
        {
            builder.Services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(options =>
            {
                options.SaveToken = true;
                options.TokenValidationParameters = JWTManager.CreateTokenValidationParameters(builder.Configuration);
            });
        }
    }
}