using backend.DTO;

namespace backend.Interfaces
{
    public interface IGoalsRepository
    {
        public Task<IEnumerable<GoalsDTO>> GetAllGoals(int UserId);
        public Task<IEnumerable<GoalsDTO>> GetGoalById(int goalId, int userId);
        public Task<int> CreateGoal(GoalsDTO goal, int userId);
        public Task<bool> ModifyGoal(GoalsDTO goal, int userId);
        public Task<bool> DeleteGoal(int id, int userId);
    }
}
