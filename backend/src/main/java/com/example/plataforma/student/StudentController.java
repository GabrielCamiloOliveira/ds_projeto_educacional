package com.example.plataforma.student;

import com.example.plataforma.student.dto.StudentAccountDTO;
import com.example.plataforma.student.entity.Student;
import com.example.plataforma.student.exception.UserException;
import com.example.plataforma.student.service.StudentService;
import jakarta.validation.Valid;
import jdk.jshell.spi.ExecutionControl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/student")
public class StudentController {

    // Controlador principal do serviço estudante

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping
    public List<Student> getStudents(){
        return studentService.getStudents();
    }

    @PostMapping
    public ResponseEntity<String> createStudent(@RequestBody StudentAccountDTO studentDTO) {
        String result = studentService.createUser(studentDTO);
        return ResponseEntity.ok(result);
    }

    @GetMapping(path = "/login") // Mudança aqui: alterando para GET
    public ResponseEntity<Student> login(
            @RequestParam String email,
            @RequestParam String senha
    )throws UserException {
        Student student = studentService.login(email, senha);
        return new ResponseEntity<>(student, HttpStatus.OK);
    }

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public String create(@RequestBody @Valid StudentAccountDTO student)
    {
        return studentService.create(student);
    }

    @PostMapping("/{username}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(Long id, String username)
    {
        studentService.delete(id, username);
    }

    @PutMapping("/{username}")
    public String update(String username, @RequestBody @Valid StudentAccountDTO student)
    {
        return studentService.update(username, student);
    }
}
