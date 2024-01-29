package com.example.plataforma.student.entity;

import com.example.plataforma.entity.Achievement;
import com.example.plataforma.activity.entity.Activity;
import com.example.plataforma.entity.Auditable;
import jakarta.persistence.*;
import lombok.Data;
import com.example.plataforma.responsible.entity.Responsible;
import java.util.List;

@Data
@Entity
public class Student extends Auditable {

    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 30)
    private String username;

    @Column(nullable = false, unique = true, length = 100)
    private String name;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private Integer age;

    @Column(nullable = false)
    private Double average;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private Double progressoFacil;

    @Column(nullable = false)
    private Double progressoMedio;

    @Column(nullable = false)
    private Double progressoDificil;

    @Column(nullable = false)
    private Double progressoInsano;

    @ManyToMany
    @JoinTable(
            name = "student_activity",
            joinColumns = @JoinColumn(name = "student_id"),
            inverseJoinColumns = @JoinColumn(name = "activity_id")
    )

    private List<Activity> doneActivities;

    @ManyToMany(mappedBy = "students")
    private List<Achievement> achievementList;

    @ManyToOne(cascade = {CascadeType.MERGE})
    private Responsible responsible;


    public Student() {
    }

    public Student(Long id, String username, String name, String password, Integer age, Double average, String email, List<Activity> doneActivities, List<Achievement> achievementList, Responsible responsible) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.password = password;
        this.age = age;
        this.average = average;
        this.email = email;
        this.doneActivities = doneActivities;
        this.achievementList = achievementList;
        this.responsible = responsible;
    }

    public Student(String username, String name, String password, Integer age, Double average, String email, List<Activity> doneActivities, List<Achievement> achievementList, Responsible responsible) {
        this.username = username;
        this.name = name;
        this.password = password;
        this.age = age;
        this.average = average;
        this.email = email;
        this.doneActivities = doneActivities;
        this.achievementList = achievementList;
        this.responsible = responsible;
    }

    public Student(String username, String password, String email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Double getAverage() {
        return average;
    }

    public void setAverage(Double average) {
        this.average = average;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Activity> getDoneActivities() {
        return doneActivities;
    }

    public void setDoneActivities(List<Activity> doneActivities) {
        this.doneActivities = doneActivities;
    }

    public List<Achievement> getAchievementList() {
        return achievementList;
    }

    public void setAchievementList(List<Achievement> achievementList) {
        this.achievementList = achievementList;
    }

    public Responsible getResponsible() {
        return responsible;
    }

    public void setResponsible(Responsible responsible) {
        this.responsible = responsible;
    }

    public Double getProgressoFacil() {
        return progressoFacil;
    }

    public void setProgressoFacil(Double progressoFacil) {
        this.progressoFacil = progressoFacil;
    }

    public Double getProgressoMedio() {
        return progressoMedio;
    }

    public void setProgressoMedio(Double progressoMedio) {
        this.progressoMedio = progressoMedio;
    }

    public Double getProgressoDificil() {
        return progressoDificil;
    }

    public void setProgressoDificil(Double progressoDificil) {
        this.progressoDificil = progressoDificil;
    }

    public Double getProgressoInsano() {
        return progressoInsano;
    }

    public void setProgressoInsano(Double progressoInsano) {
        this.progressoInsano = progressoInsano;
    }
}
