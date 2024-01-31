//package com.example.plataforma.Security;
//
//import com.example.plataforma.student.entity.Student;
//import com.example.plataforma.student.repository.StudentRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import java.util.Optional;
//
//@Service
//public class UserDetailsServiceImpl implements UserDetailsService {
//
//    private final StudentRepository studentRepository;
//
//    @Autowired
//    public UserDetailsServiceImpl(StudentRepository studentRepository) {
//        this.studentRepository = studentRepository;
//    }
//
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        Optional<Student> studentOptional = studentRepository.findByUsername(username);
//
//        Student student = studentOptional.orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + username));
//
//        // Criar e retornar um objeto UserDetails com base nas informações do Student
//        // Aqui, estou assumindo que a classe Student possui métodos getUsername() e getPassword().
//        return org.springframework.security.core.userdetails.User.withUsername(student.getUsername())
//                .password(student.getPassword())
//                .roles("USER")
//                .build();
//    }
//}