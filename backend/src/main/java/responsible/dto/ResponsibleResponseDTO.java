package responsible.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponsibleResponseDTO {

    private Long id;

    private String name;

    private Integer age;
}
