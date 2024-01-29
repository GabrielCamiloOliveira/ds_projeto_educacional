//package com.example.plataforma.achievement.student.com.example.plataforma.achievement.entity;
//
//import lombok.AllArgsConstructor;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//import java.util.Collection;
//
//@AllArgsConstructor
//public class AuthenticatedStudent implements UserDetails {
//
//    private Student com.example.plataforma.achievement.student;
//
//    @Override
//    public Collection<? extends GrantedAuthority> getAuthorities() { return null; }
//
//    @Override
//    public String getPassword() { return com.example.plataforma.achievement.student.getPassword(); }
//
//    @Override
//    public String getUsername() {
//        return com.example.plataforma.achievement.student.getUsername();
//    }
//
//    @Override
//    public boolean isAccountNonExpired() { return false; }
//
//    @Override
//    public boolean isAccountNonLocked() { return false; }
//
//    @Override
//    public boolean isCredentialsNonExpired() { return false; }
//
//    @Override
//    public boolean isEnabled() { return false; }
//}