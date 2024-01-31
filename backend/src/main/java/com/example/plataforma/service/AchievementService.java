package com.example.plataforma.service;

import com.example.plataforma.mapper.AchievementMapper;
import com.example.plataforma.repository.AchievementRepository;
import com.example.plataforma.student.service.StudentService;
import org.springframework.stereotype.Service;

@Service
public class AchievementService {

    private final static AchievementMapper achievementMapper = AchievementMapper.INSTANCE;

    private AchievementRepository achievementRepository;

    private StudentService studentService;

    // public AchievementResponseDTO create() {}
}
