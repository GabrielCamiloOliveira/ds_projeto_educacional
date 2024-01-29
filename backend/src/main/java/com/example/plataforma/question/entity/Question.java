package com.example.plataforma.question.entity;

import com.example.plataforma.activity.entity.Activity;
import com.example.plataforma.entity.Auditable;
import jakarta.persistence.*;
import lombok.Data;
import com.example.plataforma.question.enums.Dificulty;

import java.util.List;

@Data
@Entity
public class Question extends Auditable {

    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String question;

    @Column(nullable = false)
    private String answer;

    @Column(nullable = false)
    private String tip;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Dificulty dificulty;

//    @ManyToMany(mappedBy = "questionList")
//    private List<Activity> activityList;
}
