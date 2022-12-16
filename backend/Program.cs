using backend.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;

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
            builder.Services.AddSingleton<TemporaryDatabase>();
            builder.Services.AddScoped<AccountsManager>();

            builder.Services.AddLogging(configure =>
            {
                configure.AddConsole();
                configure.AddFilter(level => level >= LogLevel.Information);
            });

            WebApplication? app = builder.Build();
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