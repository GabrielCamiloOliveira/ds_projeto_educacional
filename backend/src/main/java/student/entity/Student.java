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

    @ManyToMany(mappedBy = "student")
    private List<Activity> doneActivities;

    @ManyToMany(mappedBy = "student")
    private List<Achievement> achievementList;

    @ManyToOne(cascade = {CascadeType.MERGE})
    private Responsible responsible;
}
