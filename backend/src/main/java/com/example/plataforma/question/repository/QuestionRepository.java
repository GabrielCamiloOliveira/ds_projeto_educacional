package com.example.plataforma.question.repository;

import com.example.plataforma.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Long> { }