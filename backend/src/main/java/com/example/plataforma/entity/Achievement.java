package com.example.plataforma.entity;

import com.example.plataforma.student.entity.Student;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
public class Achievement extends Auditable {

    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String description;

    @ManyToMany
    @JoinTable(
            name = "student_achievement",
            joinColumns = @JoinColumn (name = "achievement_id"),
            inverseJoinColumns = @JoinColumn(name = "student_id")
    )
    private List<Student> students;
}