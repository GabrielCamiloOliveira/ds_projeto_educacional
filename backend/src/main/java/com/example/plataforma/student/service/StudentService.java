package com.example.plataforma.student.service;
import com.example.plataforma.student.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.example.plataforma.student.dto.StudentAccountDTO;
import com.example.plataforma.student.entity.Student;
import com.example.plataforma.student.exception.StudentAlreadyExistsException;
import com.example.plataforma.student.exception.StudentNotFoundException;
import com.example.plataforma.student.mapper.StudentMapper;


import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    private final static StudentMapper studentMapper = StudentMapper.INSTANCE;

    private final StudentRepository studentRepository;

//    private final PasswordEncoder passwordEncoder;

//    @Autowired
//    public StudentService(StudentRepository studentRepository, PasswordEncoder passwordEncoder) {
//        this.studentRepository = studentRepository;
//        this.passwordEncoder = passwordEncoder;
//    }

    @Autowired
    public StudentService (StudentRepository studentRepository){
        this.studentRepository = studentRepository;
    }

    public List<Student> getStudents(){
        return studentRepository.findAll();
    }

    public String createUser(StudentAccountDTO studentAccountDTO) {

        return create(studentAccountDTO);
    }

    public String create(StudentAccountDTO studentAccountDTO) {

        verifyIfExists(studentAccountDTO.getUsername());

        Student studentToCreate = studentMapper.toModel(studentAccountDTO);

//        studentToCreate.setPassword(passwordEncoder.encode(studentToCreate.getPassword()));

        var createdStudent = this.studentRepository.save(studentToCreate);

        return "Student created!";
    }

    public String update(String username, StudentAccountDTO studentAccountDTO) {

        Student foundUser = verifyAndGetIfExists(username);

        verifyIfExists(studentAccountDTO.getUsername());

        studentAccountDTO.setId(foundUser.getId());

        Student studentToUpdate = studentMapper.toModel(studentAccountDTO);

//        studentToUpdate.setPassword(passwordEncoder.encode(studentToUpdate.getPassword()));

        studentToUpdate.setCreatedDate(foundUser.getCreatedDate());

        Student updatedStudent = studentRepository.save(studentToUpdate);

        return "Student updated!";
    }

    public void delete(Long id, String username) {

        verifyAndGetIfExists(username);

        studentRepository.deleteById(id);
    }

    private void verifyIfExists(String username) {

        Optional<Student> foundUsername = studentRepository.findByUsername(username);

        if (foundUsername.isPresent()) {
            throw new StudentAlreadyExistsException(username);
        }
    }

    public Student verifyAndGetIfExists(String username) {

        return studentRepository.findByUsername(username)
                .orElseThrow(() -> new StudentNotFoundException(username));
    }
}
