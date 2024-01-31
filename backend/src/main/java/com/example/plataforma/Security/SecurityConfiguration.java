//package com.example.plataforma.Security;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.SecurityConfigurerAdapter;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.NoOpPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.web.DefaultSecurityFilterChain;
//import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfiguration {
//
//    @Bean
//    public UserDetailsService userDetailsService() {
//        // Implemente sua própria lógica para carregar detalhes do usuário
//        return new MyUserDetailsService();
//    }
//
//    @Bean
//    public PasswordEncoder passwordEncoder() {
//        // Use uma implementação real para produção, por exemplo, BCryptPasswordEncoder
//        return NoOpPasswordEncoder.getInstance();
//    }
//
//    @Configuration
//    public static class MySecurityConfigurerAdapter extends SecurityConfigurerAdapter<DefaultSecurityFilterChain, HttpSecurity> {
//
//        private final UserDetailsService userDetailsService;
//        private final PasswordEncoder passwordEncoder;
//
//        public MySecurityConfigurerAdapter(UserDetailsService userDetailsService, PasswordEncoder passwordEncoder) {
//            this.userDetailsService = userDetailsService;
//            this.passwordEncoder = passwordEncoder;
//        }
//
//        @Override
//        public void init(HttpSecurity http) throws Exception {
//            http
//                    .userDetailsService(userDetailsService)
//                    .formLogin()
//                    .loginPage("/login")
//                    .permitAll()
//                    .and()
//                    .logout()
//                    .permitAll()
//                    .and()
//                    .authorizeRequests()
//                    .antMatchers("/public").permitAll()
//                    .anyRequest().authenticated();
//        }
//
//        @Override
//        public void configure(HttpSecurity http) throws Exception {
//            // Adicione configurações adicionais se necessário
//        }
//    }
//}