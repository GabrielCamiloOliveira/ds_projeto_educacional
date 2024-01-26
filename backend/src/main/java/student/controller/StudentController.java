package student.controller;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import student.dto.StudentAccountDTO;
import student.entity.Student;
import student.service.StudentService;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/student")
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping
    public List<Student> getStudents(){
        return studentService.getStudents();
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
