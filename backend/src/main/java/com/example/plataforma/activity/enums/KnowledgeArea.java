package com.example.plataforma.activity.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum KnowledgeArea {

    MATEMATICA("Matemática"),
    GRAMATICA("Gramática"),
    HISTORIA("História"),
    GEOGRAFIA("Geografia"),
    CIENCIAS("Ciências"),
    INGLES("Inglês");

    private String description;
}
