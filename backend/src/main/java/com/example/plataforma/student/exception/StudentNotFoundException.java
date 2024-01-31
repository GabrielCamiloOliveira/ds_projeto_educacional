package com.example.plataforma.student.exception;

import jakarta.persistence.EntityNotFoundException;

public class StudentNotFoundException extends EntityNotFoundException {

    public StudentNotFoundException(Long id) {
        super("Student with id %s not exists!".formatted(id));
    }

    public StudentNotFoundException(String username) { super("Student with id %s not exists!".formatted(username)); }

}
