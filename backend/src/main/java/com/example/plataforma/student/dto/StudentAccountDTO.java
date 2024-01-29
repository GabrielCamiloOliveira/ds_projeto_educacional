package com.example.plataforma.student.dto;

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

    private Integer age;


    @Max(value = 10)
    private Double average;


    @Max(value = 100)
    private Double progressoFacil;


    @Max(value = 100)
    private Double progressoMedio;


    @Max(value = 100)
    private Double progressoDificil;


    @Max(value = 100)
    private Double progressoInsano;
}