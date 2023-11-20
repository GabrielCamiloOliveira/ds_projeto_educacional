package activity.entity;

import activity.enums.KnowledgeArea;
import entity.Auditable;
import jakarta.persistence.*;
import lombok.Data;
import question.entity.Question;
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

    @ManyToMany(mappedBy = "activity")
    private List<Question> questionList;
}

