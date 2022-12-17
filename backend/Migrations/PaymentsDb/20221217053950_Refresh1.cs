using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations.PaymentsDb
{
    /// <inheritdoc />
    public partial class Refresh1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PaymentDate",
                table: "Incomes",
                newName: "Date");

            migrationBuilder.RenameColumn(
                name: "PaymentDate",
                table: "Expenses",
                newName: "Date");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Date",
                table: "Incomes",
                newName: "PaymentDate");

            migrationBuilder.RenameColumn(
                name: "Date",
                table: "Expenses",
                newName: "PaymentDate");
        }
    }
}
