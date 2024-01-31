package com.example.plataforma.activity.mapper;

import com.example.plataforma.dto.AchievementResponseDTO;
import com.example.plataforma.activity.dto.ActivityRequestDTO;
import com.example.plataforma.activity.dto.ActivityResponseDTO;
import com.example.plataforma.activity.entity.Activity;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface ActivityMapper {

    ActivityMapper INSTANCE = Mappers.getMapper(ActivityMapper.class);

    Activity toModel(ActivityRequestDTO activityRequestDTO);

    Activity toModel(AchievementResponseDTO activityResponseDTO);

    ActivityResponseDTO toDTO(Activity activity);
}
