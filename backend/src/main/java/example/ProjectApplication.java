package example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@EnableWebMvc
@SpringBootApplication

//@EnableAutoConfiguration
public class ProjectApplication {
    public static void main(String[] args) { SpringApplication.run(ProjectApplication.class, args); }
}