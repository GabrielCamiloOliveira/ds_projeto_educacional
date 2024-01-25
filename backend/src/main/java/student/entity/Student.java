package student.entity;

import achievement.entity.Achievement;
import activity.entity.Activity;
import entity.Auditable;
import jakarta.persistence.*;
import lombok.Data;
import responsible.entity.Responsible;
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


    @ManyToMany(mappedBy = "student")
    private List<Activity> doneActivities;

    @ManyToMany(mappedBy = "student")
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


}
