package com.example.plataforma.student.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.plataforma.student.entity.Student;
import java.util.Optional;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

    Optional<Student> findByUsername(String username);

    @Query("SELECT std FROM Student std WHERE std.email = ?1")
    Optional<Student> findStudentByEmail(String email);

//    @Query("SELECT cli FROM Student cli WHERE cli.cpf = ?1")
//    Optional<Student> findClienteByCpf(String cpf);
}
