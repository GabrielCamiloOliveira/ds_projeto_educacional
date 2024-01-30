package com.example.plataforma.question.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.example.plataforma.question.enums.Dificulty;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class QuestionResponseDTO {

    private Long id;

    private String question;

    private String answer;

    private String tip;

    private Dificulty dificulty;
}
