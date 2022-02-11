package com.example.testh2;

import com.example.testh2.dao.UserInformationsRepo;
import com.example.testh2.entity.UserInformations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableWebMvc
public class TestH2Application implements CommandLineRunner {

    @Autowired
    private UserInformationsRepo userInformationsRepo;

    public static void main(String[] args) {
        SpringApplication.run(TestH2Application.class, args);

    }


    @Override
    public void run(String... args) throws Exception {
        UserInformations user = new UserInformations();
        user.setSalutationEn("Hello");
        user.setSalutationFr("Bonjour");
        user.setDescriptionEn("Am a fullstack developper");
        user.setDescriptionFr("Je suis un developpeur fullStack");
        user.setPresentationFr("Je m'appelle Zakaria");
        user.setPresentationEn("My name's Zakaria");

        userInformationsRepo.save(user);
    }
}
