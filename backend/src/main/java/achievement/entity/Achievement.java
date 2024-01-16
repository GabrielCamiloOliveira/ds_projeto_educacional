package achievement.entity;

import entity.Auditable;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Achievement extends Auditable {

    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String description;
}