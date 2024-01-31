package com.example.plataforma.activity.entity;

import com.example.plataforma.activity.enums.KnowledgeArea;
import com.example.plataforma.entity.Auditable;
import com.example.plataforma.student.entity.Student;
import jakarta.persistence.*;
import lombok.Data;
import com.example.plataforma.question.entity.Question;
import java.util.List;

@Data
@Entity
public class Activity extends Auditable {

    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private KnowledgeArea knowledgeArea;

    @Column(nullable = false)
    private Integer timeToAnswer;

    @Column(nullable = false)
    private Double grade;

    @ManyToMany(mappedBy = "doneActivities")
    private List<Student> students;

    @ManyToMany
    @JoinTable(
            name = "activity_question",
            joinColumns = @JoinColumn(name = "activity_id"),
            inverseJoinColumns = @JoinColumn(name = "question_id")
    )
    private List<Question> questionList;
}

