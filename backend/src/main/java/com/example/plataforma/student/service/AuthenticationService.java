//package com.example.plataforma.student.service;
//
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.example.plataforma.config.AuthenticationRequest;
//import com.example.plataforma.config.AuthenticationResponse;
//import lombok.RequiredArgsConstructor;
//import org.springframework.http.HttpHeaders;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.stereotype.Service;
//import com.example.plataforma.student.entity.AuthenticatedStudent;
//import com.example.plataforma.student.entity.Student;
//import com.example.plataforma.student.repository.StudentRepository;
//import com.example.plataforma.student.token.Token;
//import com.example.plataforma.student.token.TokenRepository;
//import com.example.plataforma.student.token.TokenType;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//
//@Service
//@RequiredArgsConstructor
//public class AuthenticationService {
//
//    private final StudentRepository studentRepository;
//
//    private final TokenRepository tokenRepository;
//
//    private final JwtService jwtService;
//
//    private final AuthenticationManager authenticationManager;
//
//
//
//    public AuthenticationResponse authenticate(AuthenticationRequest request) {
//
//        authenticationManager.authenticate(
//                new UsernamePasswordAuthenticationToken(
//                        request.getUsername(),
//                        request.getPassword()
//                )
//        );
//
//        var student = this.studentRepository.findByUsername(request.getUsername())
//                .orElseThrow();
//
//        AuthenticatedStudent authenticatedStudent = new AuthenticatedStudent(student);
//
//        var jwtToken = jwtService.generateToken(authenticatedStudent);
//        var refreshToken = jwtService.generateRefreshToken(authenticatedStudent);
//
//        revokeAllUserTokens(student);
//        saveUserToken(student, jwtToken);
//
//        return AuthenticationResponse.builder()
//                .accessToken(jwtToken)
//                .refreshToken(refreshToken)
//                .build();
//    }
//
//    public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {
//
//        final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
//        final String refreshToken;
//        final String username;
//
//        if (authHeader == null || !authHeader.startsWith("Bearer")) {
//            return;
//        }
//
//        refreshToken = authHeader.substring(7);
//        username = jwtService.extractUsername(refreshToken);
//
//
//        if (username != null) {
//
//            var user = this.studentRepository.findByUsername(username)
//                    .orElseThrow();
//
//            AuthenticatedStudent authenticatedUser = new AuthenticatedStudent(user);
//
//            if (jwtService.isTokenValid(refreshToken, authenticatedUser)) {
//
//                var accessToken = jwtService.generateToken(authenticatedUser);
//
//                revokeAllUserTokens(user);
//                saveUserToken(user, accessToken);
//
//                var authResponse = AuthenticationResponse.builder()
//                        .accessToken(accessToken)
//                        .refreshToken(refreshToken)
//                        .build();
//
//                new ObjectMapper().writeValue(response.getOutputStream(), authResponse);
//            }
//        }
//    }
//
//    private void saveUserToken(Student student, String jwtToken) {
//
//        var token = Token.builder()
//                .student(student)
//                .token(jwtToken)
//                .tokenType(TokenType.BEARER)
//                .expired(false)
//                .revoked(false)
//                .build();
//
//        tokenRepository.save(token);
//    }
//
//    private void revokeAllUserTokens(Student student) {
//
//        var validUserTokens = tokenRepository.findAllValidTokenByUser(Math.toIntExact(student.getId()));
//
//        if (validUserTokens.isEmpty())
//            return;
//
//        validUserTokens.forEach(token -> {
//            token.setExpired(true);
//            token.setRevoked(true);
//        });
//
//        tokenRepository.saveAll(validUserTokens);
//    }
//}