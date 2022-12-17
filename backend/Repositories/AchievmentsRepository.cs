using backend.Context;
using backend.DTO;
using backend.Entities;
using backend.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace backend.Repositories
{
    public class AchievmentsRepository : IAchievmentsRepository
    {
        private readonly AchievmentsDbContext _context;
        public AchievmentsRepository(
            AchievmentsDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<AchievmentsDTO>> GetAllAchievments(int userId)
        {
            var data = await _context.Achievments.Where(x => x.UserId == userId).ToListAsync();
            return MapToDto(data);
        }


        public async Task<bool> InsertAchievment(AchievmentsDTO achievment, int userId)
        {
            var entity = MapToEntity(achievment, userId);
            _context.Achievments.Add(entity);
            await _context.SaveChangesAsync();
            return true;
        }
        private static IEnumerable<AchievmentsDTO> MapToDto(IEnumerable<Achievments> goals)
        {
            var data = new List<AchievmentsDTO>();
            foreach (var goal in goals)
            {
                data.Add(new AchievmentsDTO()
                {
                    Id = goal.Id,
                    Name = goal.Name,
                    Description = goal.Description
                });
            }
            return data;
        }

        private static Achievments MapToEntity(AchievmentsDTO achievment, int userId)
        {
            return new Achievments()
            {
                Id = achievment.Id,
                UserId = userId,
                Name = achievment.Name,
                Description = achievment.Description
            };
        }
    }
}
