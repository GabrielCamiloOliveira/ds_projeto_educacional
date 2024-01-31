package com.example.plataforma.responsible.entity;

import com.example.plataforma.entity.Auditable;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Responsible extends Auditable {

    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Integer age;
}
