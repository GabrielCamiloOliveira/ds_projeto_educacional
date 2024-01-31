package com.example.plataforma.mapper;

import com.example.plataforma.dto.AchievementRequestDTO;
import com.example.plataforma.dto.AchievementResponseDTO;
import com.example.plataforma.entity.Achievement;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface AchievementMapper {

    AchievementMapper INSTANCE = Mappers.getMapper(AchievementMapper.class);

    Achievement toModel(AchievementRequestDTO achievementRequestDTO);

    Achievement toModel(AchievementResponseDTO achievementResponseDTO);

    AchievementResponseDTO toDTO(Achievement achievement);
}
