using backend.Context;
using backend.DTO;
using backend.Entities;
using backend.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace backend.Repositories
{
    public class GoalsRepository : IGoalsRepository
    {
        private readonly GoalsDbContext _context;
        public GoalsRepository(
            GoalsDbContext context)
        {
            _context = context;
        }

        public async Task<int> CreateGoal(GoalsDTO goal, int userId)
        {
            var entity = MapToEntity(goal, userId);
            _context.Goals.Add(entity);
            await _context.SaveChangesAsync();
            return entity.Id;
        }

        public async Task<IEnumerable<GoalsDTO>> GetAllGoals(int UserId)
        {
            var goals = await _context.Goals.Where(x => x.UserId == UserId).ToListAsync();
            return MapToDto(goals);
        }

        public async Task<IEnumerable<GoalsDTO>> GetGoalById(int goalId, int userId)
        {
            var goals = await _context.Goals.Where(
                x => x.Id == goalId
                && x.UserId == userId).ToListAsync();
            return MapToDto(goals);
        }

        private static IEnumerable<GoalsDTO> MapToDto(IEnumerable<Goals> goals)
        {
            var data = new List<GoalsDTO>();
            foreach (var goal in goals)
            {
                data.Add(new GoalsDTO()
                {
                    Id = goal.Id,
                    Name = goal.Name,
                    Cost = goal.Cost,
                    CurrentAmount = goal.CurrentAmount,
                    Deadline = goal.Deadline,
                    SavingPerWeek = goal.SavingPerWeek
                });
            }
            return data;
        }
        private static Goals MapToEntity(GoalsDTO goal, int userId)
        {
            return new Goals()
            {
                Id = goal.Id,
                Name = goal.Name,
                UserId = userId,
                ImageUrl = goal.ImageUrl,
                Cost = goal.Cost,
                CurrentAmount = goal.CurrentAmount,
                Deadline = goal.Deadline,
                SavingPerWeek = goal.SavingPerWeek
            };
        }

        public async Task<bool> ModifyGoal(GoalsDTO goal, int userId)
        {
            var entity = await _context.Goals.FirstOrDefaultAsync(
                x => x.Id == goal.Id
                && x.UserId == userId);
            if (entity == null)
            {
                return false;
            }
            entity.Name = goal.Name;
            entity.ImageUrl = goal.ImageUrl;
            entity.Cost = goal.Cost;
            entity.CurrentAmount = goal.CurrentAmount;
            entity.Deadline = goal.Deadline;
            entity.SavingPerWeek = goal.SavingPerWeek;

            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeleteGoal(int id, int userId)
        {
            var goal = await _context.Goals.FirstOrDefaultAsync(
                x => x.Id == id
                && x.UserId == userId);
            if (goal == null)
            {
                return false;
            }
            _context.Remove(goal);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
