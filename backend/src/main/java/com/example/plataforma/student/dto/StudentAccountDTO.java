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

    
    @NotEmpty
    @Size(max = 30)
    private String username;

    
    @NotEmpty
    @Size(max = 50)
    private String email;

    
    @NotEmpty
    @Size(max = 100)
    private String name;

    
    @NotEmpty
    @Size(min = 6, max = 15)
    private String password;

    

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