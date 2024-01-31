//package com.example.plataforma.Security;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import java.util.Collections;
//
//@Service
//public class MyUserDetailsService implements UserDetailsService {
//
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        // Aqui você buscaria os detalhes do usuário do banco de dados ou de algum serviço externo
//        // Neste exemplo, estamos apenas retornando um usuário estático
//
//        if ("user".equals(username)) {
//            return User.withUsername("user")
//                    .password("password")
//                    .roles("USER")
//                    .build();
//        } else {
//            throw new UsernameNotFoundException("User not found with username: " + username);
//        }
//    }
//}