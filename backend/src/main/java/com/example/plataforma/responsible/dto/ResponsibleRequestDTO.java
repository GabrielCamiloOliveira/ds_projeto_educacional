package com.example.plataforma.responsible.dto;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponsibleRequestDTO {

    private Long id;

    @NotNull
    @NotEmpty
    @Size(max = 100)
    private String name;

    @NotNull
    @Positive
    @Min(value = 18)
    private Integer age;
}
