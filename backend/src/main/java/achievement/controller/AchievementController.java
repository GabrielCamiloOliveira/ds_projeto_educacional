package achievement.controller;

import achievement.service.AchievementService;
import activity.dto.ActivityResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController("AchievementController")
@RequestMapping("api/v1/achievements")
public class AchievementController {
    AchievementService achievementService;

    @Autowired
    public AchievementController(AchievementService achievementService) { this.achievementService = achievementService; }

    // @PostMapping
    // @ResponseStatus(HttpStatus.CREATED)
    // public ActivityResponseDTO create() {}
}
