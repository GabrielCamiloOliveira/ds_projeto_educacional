package activity.dto;

import activity.enums.KnowledgeArea;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ActivityResponseDTO {

    private Long id;

    private KnowledgeArea knowledgeArea;

    private Integer timeToAnswer;

    private Double grade;
}