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
    public class AchievmentsController : ControllerBase
    {
        private readonly IAchievmentsRepository _achievmentsRepository;
        private readonly IUserRepository _userRepository;

        public AchievmentsController(
            IAchievmentsRepository achievmentsRepository,
            IUserRepository userRepository)
        {
            _achievmentsRepository = achievmentsRepository;
            _userRepository = userRepository;
        }
        [HttpGet]
        [Authorize]
        [Route("all")]
        public async Task<IActionResult> GetAll()
        {
            string token = Request.Headers["Authorization"].ToString()[7..];
            var user = _userRepository.GetUserEmailByToken(token);

            var result = await _achievmentsRepository.GetAllAchievments(user.Id);
            return Ok(result);
        }

        [HttpPost]
        [Authorize]
        [Route("create")]
        public async Task<IActionResult> Insert([FromBody] AchievmentsDTO achievment)
        {
            string token = Request.Headers["Authorization"].ToString()[7..];
            var user = _userRepository.GetUserEmailByToken(token);

            await _achievmentsRepository.InsertAchievment(achievment, user.Id);
            return Ok();
        }
    }
}
