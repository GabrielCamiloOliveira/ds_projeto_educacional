package student.Config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import student.entity.Student;
import student.repository.StudentRepository;

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
