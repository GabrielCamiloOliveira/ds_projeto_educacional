package achievement.mapper;

import achievement.dto.AchievementRequestDTO;
import achievement.dto.AchievementResponseDTO;
import achievement.entity.Achievement;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface AchievementMapper {

    AchievementMapper INSTANCE = Mappers.getMapper(AchievementMapper.class);

    Achievement toModel(AchievementRequestDTO achievementRequestDTO);

    Achievement toModel(AchievementResponseDTO achievementResponseDTO);

    AchievementResponseDTO toDTO(Achievement achievement);
}
