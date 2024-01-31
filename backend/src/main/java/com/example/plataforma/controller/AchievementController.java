package com.example.plataforma.controller;

import com.example.plataforma.service.AchievementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
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
