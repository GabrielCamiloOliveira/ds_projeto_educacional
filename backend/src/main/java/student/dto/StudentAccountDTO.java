package student.dto;

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
}