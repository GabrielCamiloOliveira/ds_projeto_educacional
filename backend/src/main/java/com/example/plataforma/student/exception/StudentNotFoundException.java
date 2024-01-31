package com.example.plataforma.student.exception;

import jakarta.persistence.EntityNotFoundException;

public class StudentNotFoundException extends EntityNotFoundException {

    public StudentNotFoundException(Long id) {
        super(String.format("Student with id %s not exists!", id));
    }

    public StudentNotFoundException(String username) { super(String.format("Student with id %s not exists!", username)); }

}
