using backend.DTO;
using backend.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExpensesController : ControllerBase
    {
        private readonly IPaymentRepository _paymentRepository;
        private readonly IUserRepository _userRepository;

        public ExpensesController(
            IPaymentRepository paymentRepository,
            IUserRepository userRepository)
        {
            _paymentRepository = paymentRepository;
            _userRepository = userRepository;
        }
        [HttpPost]
        [Route("create")]
        public async Task<IActionResult> Insert([FromBody] ExpensesDTO expens)
        {
            await _paymentRepository.InsertExpense(expens);
            return Ok();
        }

        [HttpGet]
        [Route("all")]
        public async Task<IActionResult> GetAll()
        {
            string token = Request.Headers["Authorization"].ToString();
            var user = _userRepository.GetUserEmailByToken(token);

            var result = await _paymentRepository.GetAllExpenses(user.Id);
            return Ok(new { id = result });
        }
    }
}
