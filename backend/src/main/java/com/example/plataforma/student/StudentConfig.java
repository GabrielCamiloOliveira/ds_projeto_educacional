package com.example.plataforma.student;

import com.example.plataforma.student.entity.Student;
import com.example.plataforma.student.repository.StudentRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;

import java.util.List;

public class StudentConfig {

    @Bean
    CommandLineRunner commandLineRunner(StudentRepository repository){
        return args -> {

            Student jonathan = new Student(
                    "Jonathan.Prado",
                    "coxinha123",
                    "jonathan@outlook.com"
            );

            repository.saveAll(
                    List.of(jonathan)
            );

        };


    }

}
