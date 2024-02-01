package com.example.plataforma.student.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;

// Classe autenticação login
@Getter
@AllArgsConstructor
public class LoginRequest {
    private String email;
    private String senha;

    public String setEmail(String email) {
        this.email = email;
        return email;
    }

    public String setSenha(String senha) {
        this.senha = senha;
        return senha;
    }
}
