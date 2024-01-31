package com.example.plataforma.activity.dto;

import com.example.plataforma.activity.enums.KnowledgeArea;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ActivityRequestDTO {

    private Long id;

    @NotNull
    @Enumerated(EnumType.STRING)
    private KnowledgeArea knowledgeArea;

    @NotNull
    @Positive
    @Min(value = 10)
    private Integer timeToAnswer;

    @NotNull
    @Positive
    @Max(value = 10)
    private Double grade;
}