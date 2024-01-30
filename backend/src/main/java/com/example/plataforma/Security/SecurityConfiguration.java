package com.example.plataforma.Security;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return NoOpPasswordEncoder.getInstance(); // Apenas para fins educacionais; NÃO use em produção
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable() // Desativar CSRF temporariamente
                .authorizeRequests()
                .requestMatchers("/public/**").permitAll() // Páginas públicas
                .requestMatchers("/admin/**").hasRole("ADMIN") // Exige a função ADMIN para páginas de administração
                .anyRequest().authenticated() // Todas as outras páginas exigem autenticação
                .and()
                .formLogin()
                .loginPage("/login") // Página de login personalizada
                .permitAll()
                .and()
                .logout()
                .permitAll();

        return http.build();
    }
}