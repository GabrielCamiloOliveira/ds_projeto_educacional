package student.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import student.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Long> { }