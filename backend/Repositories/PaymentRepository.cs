using backend.Context;
using backend.DTO;
using backend.Entities;
using backend.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace backend.Repositories
{
    public class PaymentRepository : IPaymentRepository
    {
        private readonly PaymentsDbContext _context;
        public PaymentRepository(
            PaymentsDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<ExpensesDTO>> GetAllExpenses(int UserId)
        {
            var data = await _context.Expenses.Where(x => x.UserId == UserId).ToListAsync();
            return MapExpensesToDto(data);
        }

        public async Task<IEnumerable<IncomesDTO>> GetAllIncomes(int UserId)
        {
            var data = await _context.Incomes.Where(x => x.UserId == UserId).ToListAsync();
            return MapIncomesToDto(data);
        }

        public async Task<bool> InsertExpense(ExpensesDTO expens, int userId)
        {
            var entity = MapExpensesDtoToEntity(expens, userId);
            _context.Expenses.Add(entity);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> InsertIncome(IncomesDTO incomes, int userId)
        {
            var entity = MapIncomesDtoToEntity(incomes, userId);
            _context.Incomes.Add(entity);
            await _context.SaveChangesAsync();
            return true;
        }

        private static IEnumerable<ExpensesDTO> MapExpensesToDto(IEnumerable<Expenses> expenses)
        {
            var result = new List<ExpensesDTO>();
            foreach (var expens in expenses)
            {
                result.Add(new ExpensesDTO()
                {
                    Id = expens.Id,
                    Sum = expens.Sum,
                    Date = expens.Date
                });
            }
            return result;
        }

        private static IEnumerable<IncomesDTO> MapIncomesToDto(IEnumerable<Incomes> incomes)
        {
            var result = new List<IncomesDTO>();
            foreach (var income in incomes)
            {
                result.Add(new IncomesDTO()
                {
                    Id = income.Id,
                    Sum = income.Sum,
                    Date = income.Date
                });
            }
            return result;
        }
        private static Expenses MapExpensesDtoToEntity(ExpensesDTO expens, int userId)
        {
            return new Expenses()
            {
                Id = expens.Id,
                UserId = userId,
                Sum = expens.Sum,
                Date = expens.Date
            };
        }

        private static Incomes MapIncomesDtoToEntity(IncomesDTO income, int userId)
        {
            return new Incomes()
            {
                Id = income.Id,
                UserId = userId,
                Sum = income.Sum,
                Date = income.Date
            };
        }
    }
}
