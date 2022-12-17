using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations.AchievmentsDb
{
    /// <inheritdoc />
    public partial class AddedPropertie : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsEarned",
                table: "Achievments",
                type: "boolean",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsEarned",
                table: "Achievments");
        }
    }
}
