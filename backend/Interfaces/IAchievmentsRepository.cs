using backend.DTO;

namespace backend.Interfaces
{
    public interface IAchievmentsRepository
    {
        public Task<IEnumerable<AchievmentsDTO>> GetAllAchievments(int userId);
        public Task<bool> InsertAchievment(AchievmentsDTO achievment, int userId);
    }
}
