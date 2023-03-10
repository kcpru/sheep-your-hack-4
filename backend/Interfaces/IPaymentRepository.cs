using backend.DTO;

namespace backend.Interfaces
{
    public interface IPaymentRepository
    {
        public Task<IEnumerable<IncomesDTO>> GetAllIncomes(int userId);
        public Task<bool> InsertIncome(IncomesDTO income, int userId);
        public Task<IEnumerable<ExpensesDTO>> GetAllExpenses(int userId);
        public Task<bool> InsertExpense(ExpensesDTO expens, int userId);

    }
}
