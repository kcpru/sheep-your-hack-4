using backend.DTO;
using backend.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [EnableCors("AllowAll")]
    [ApiController]
    [Route("[controller]")]
    public class GoalsController : Controller
    {
        private readonly IGoalsRepository _goalRepository;
        private readonly IUserRepository _userRepository;
        public GoalsController(
            IGoalsRepository goalRepository,
            IUserRepository userRepository)
        {
            _goalRepository = goalRepository;
            _userRepository = userRepository;
        }
        [HttpGet]
        [Authorize]
        [Route("all")]
        public async Task<IActionResult> GetAll()
        {
            string token = Request.Headers["Authorization"].ToString()[7..];
            var user = _userRepository.GetUserEmailByToken(token);

            var result = await _goalRepository.GetAllGoals(user.Id);

            return Ok(result);
        }

        [HttpGet]
        [Authorize]
        [Route("goals/{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            string token = Request.Headers["Authorization"].ToString()[7..];
            var user = _userRepository.GetUserEmailByToken(token);

            var result = await _goalRepository.GetGoalById(id, user.Id);

            return Ok(result);
        }

        [HttpPost]
        [Authorize]
        [Route("create")]
        public async Task<IActionResult> Create([FromBody] GoalsDTO goal)
        {
            string token = Request.Headers["Authorization"].ToString()[7..];
            var user = _userRepository.GetUserEmailByToken(token);

            var result = await _goalRepository.CreateGoal(goal, user.Id);
            return Ok(new { id=result});
        }

        [HttpPut]
        [Authorize]
        [Route("modify")]
        public async Task<IActionResult> ModifyById([FromBody] GoalsDTO goal)
        {
            string token = Request.Headers["Authorization"].ToString()[7..];
            var user = _userRepository.GetUserEmailByToken(token);

            var result = await _goalRepository.ModifyGoal(goal, user.Id);
            if (!result)
            {
                return NotFound();
            }
            return Ok();
        }

        [HttpDelete]
        [Authorize]
        [Route("delete/{id}")]
        public async Task<IActionResult> DeleteById([FromRoute] int id)
        {
            string token = Request.Headers["Authorization"].ToString()[7..];
            var user = _userRepository.GetUserEmailByToken(token);

            var result = await _goalRepository.DeleteGoal(id, user.Id);
            if (!result)
            {
                return NotFound();
            }
            return Ok();
        }

    }
}
