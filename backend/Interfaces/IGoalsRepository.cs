using backend.DTO;

namespace backend.Interfaces
{
    public interface IGoalsRepository
    {
        public Task<IEnumerable<GoalsDTO>> GetAllGoals(int UserId);
        public Task<IEnumerable<GoalsDTO>> GetGoalById(int goalId);
        public Task<bool> CreateGoal(GoalsDTO goal);
    }
}
