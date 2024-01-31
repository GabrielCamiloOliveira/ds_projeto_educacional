//package com.example.plataforma.student.Config;
//
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.AuthenticationException;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.stereotype.Service;
//
//@Service
//public class YourAuthenticationService {
//
//    private final AuthenticationManager authenticationManager;
//
//    public YourAuthenticationService(AuthenticationManager authenticationManager) {
//        this.authenticationManager = authenticationManager;
//    }
//
//    public void authenticateUser(String username, String password) {
//        try {
//            Authentication authentication = authenticationManager.authenticate(
//                    new UsernamePasswordAuthenticationToken(username, password)
//            );
//
//            // Autenticação bem-sucedida, atualize o contexto de segurança
//            SecurityContextHolder.getContext().setAuthentication(authentication);
//        } catch (AuthenticationException e) {
//            // Tratar falha na autenticação
//            e.printStackTrace();
//        }
//    }
//}
