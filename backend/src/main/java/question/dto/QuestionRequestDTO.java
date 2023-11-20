package question.dto;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import question.enums.Dificulty;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class QuestionRequestDTO {

    private Long id;

    @NotNull
    @NotEmpty
    @Size(max = 100)
    private String question;

    @NotNull
    @NotEmpty
    @Size(max = 100)
    private String answer;

    @NotNull
    @NotEmpty
    @Size(max = 50)
    private String tip;

    @NotNull
    @Enumerated(EnumType.ORDINAL)
    private Dificulty dificulty;
}
