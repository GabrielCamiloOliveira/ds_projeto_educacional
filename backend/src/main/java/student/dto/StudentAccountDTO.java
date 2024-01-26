package student.dto;

import jakarta.persistence.Column;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StudentAccountDTO {

    private Long id;

    @NotNull
    @NotEmpty
    @Size(max = 30)
    private String username;

    @NotNull
    @NotEmpty
    @Size(max = 50)
    private String email;

    @NotNull
    @NotEmpty
    @Size(max = 100)
    private String name;

    @NotNull
    @NotEmpty
    @Size(min = 6, max = 15)
    private String password;

    @NotNull
    @Size(min = 4, max = 12)
    private Integer age;

    @NotNull
    @Max(value = 10)
    private Double average;

    @NotNull
    @Max(value = 100)
    private Double progressoFacil;

    @NotNull
    @Max(value = 100)
    private Double progressoMedio;

    @NotNull
    @Max(value = 100)
    private Double progressoDificil;

    @NotNull
    @Max(value = 100)
    private Double progressoInsano;
}