package question.entity;

import entity.Auditable;
import jakarta.persistence.*;
import lombok.Data;
import question.enums.Dificulty;

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

    @Enumerated(EnumType.ORDINAL)
    private Dificulty dificulty;
}
