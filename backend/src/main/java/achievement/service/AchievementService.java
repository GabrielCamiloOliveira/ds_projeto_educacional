package achievement.service;

import achievement.dto.AchievementResponseDTO;
import achievement.mapper.AchievementMapper;
import achievement.repository.AchievementRepository;
import org.springframework.stereotype.Service;
import student.service.StudentService;

@Service
public class AchievementService {

    private final static AchievementMapper achievementMapper = AchievementMapper.INSTANCE;

    private AchievementRepository achievementRepository;

    private StudentService studentService;

    // public AchievementResponseDTO create() {}
}
