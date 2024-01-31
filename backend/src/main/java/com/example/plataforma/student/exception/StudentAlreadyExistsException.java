package com.example.plataforma.student.exception;

import jakarta.persistence.EntityExistsException;

public class StudentAlreadyExistsException extends EntityExistsException {

    public StudentAlreadyExistsException(String username) {
        super("Student with username %s already exists".formatted(username));
    }
}
