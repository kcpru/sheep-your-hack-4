﻿using backend.DTO;
using backend.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IncomesController : ControllerBase
    {
        private readonly IPaymentRepository _paymentRepository;
        private readonly IUserRepository _userRepository;

        public IncomesController(
            IPaymentRepository paymentRepository,
            IUserRepository userRepository)
        {
            _paymentRepository = paymentRepository;
            _userRepository = userRepository;
        }
        [HttpPost]
        [Route("create")]
        public async Task<IActionResult> Insert([FromBody] IncomesDTO income)
        {
            await _paymentRepository.InsertIncome(income);
            return Ok();
        }

        [HttpGet]
        [Route("all")]
        public async Task<IActionResult> GetAll()
        {
            string token = Request.Headers["Authorization"].ToString();
            var user = _userRepository.GetUserEmailByToken(token);

            var result = await _paymentRepository.GetAllIncomes(user.Id);
            return Ok(new { id = result });
        }
    }
}
