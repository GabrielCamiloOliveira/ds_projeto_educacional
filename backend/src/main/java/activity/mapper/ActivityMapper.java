package activity.mapper;

import achievement.dto.AchievementResponseDTO;
import activity.dto.ActivityRequestDTO;
import activity.dto.ActivityResponseDTO;
import activity.entity.Activity;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface ActivityMapper {

    ActivityMapper INSTANCE = Mappers.getMapper(ActivityMapper.class);

    Activity toModel(ActivityRequestDTO activityRequestDTO);

    Activity toModel(AchievementResponseDTO activityResponseDTO);

    ActivityResponseDTO toDTO(Activity activity);
}
