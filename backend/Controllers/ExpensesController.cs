using backend.DTO;
using backend.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [EnableCors("AllowAll")]
    [Route("[controller]")]
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
        [Authorize]
        [Route("create")]
        public async Task<IActionResult> Insert([FromBody] ExpensesDTO expens)
        {
            string token = Request.Headers["Authorization"].ToString()[7..];
            var user = _userRepository.GetUserEmailByToken(token);

            await _paymentRepository.InsertExpense(expens, user.Id);
            return Ok();
        }

        [HttpGet]
        [Authorize]
        [Route("all")]
        public async Task<IActionResult> GetAll()
        {
            string token = Request.Headers["Authorization"].ToString()[7..];
            var user = _userRepository.GetUserEmailByToken(token);

            var result = await _paymentRepository.GetAllExpenses(user.Id);
            return Ok(result);
        }
    }
}
