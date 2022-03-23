package com.example.testh2;

import com.example.testh2.dao.ColaboratorRepos;
import com.example.testh2.dao.RoleRepo;
import com.example.testh2.dao.UserInformationsRepo;
import com.example.testh2.dao.UserRepos;
import com.example.testh2.entity.*;
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

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
@EnableWebMvc
public class TestH2Application implements CommandLineRunner {

    @Autowired
    private UserInformationsRepo userInformationsRepo;
    @Autowired
    private UserRepos userRepos;
    @Autowired
    private RoleRepo roleRepo;
    @Autowired
    private ColaboratorRepos colaboratorRepos;

    public static void main(String[] args) {
        SpringApplication.run(TestH2Application.class, args);

    }


    @Override
    public void run(String... args) throws Exception {
//        UserInformations user = new UserInformations();
//        user.setSalutationEn("Hello");
//        user.setSalutationFr("Bonjour");
//        user.setDescriptionEn("Am a fullstack developper");
//        user.setDescriptionFr("Je suis un developpeur fullStack");
//        user.setPresentationFr("Je m'appelle Zakaria");
//        user.setPresentationEn("My name's Zakaria");
//        user.setResumeNameEn("resumeEn.pdf");
//        user.setResumeNameFr("resumeFr.pdf");
//
//
//
//
//        userInformationsRepo.save(user);


//        User userEdit = new User();
//
//        userEdit.setFirstname("zakaria");
//        userEdit.setLastname("El baqal");
//        userEdit.setEmail("zakar");
//
//        userRepos.save(userEdit);

//        Role role = new Role();
//        role.setName(ERole.ROLE_USER);
//        Role role2 = new Role();
//        role2.setName(ERole.ROLE_ADMIN);

//        roleRepo.save(role);
//        roleRepo.save(role2);
//        List<Colaborator> collaborators = new ArrayList<>();
//
//        collaborators.add(Colaborator.builder().tooltip("bootstrap").imageName("colaborator-bootstrap.png").build());
//        collaborators.add(Colaborator.builder().tooltip("jquery").imageName("colaborator-jquery.png").build());
//        collaborators.add(Colaborator.builder().tooltip("javascript").imageName("colaborator-javascript.png").build());
//        collaborators.add(Colaborator.builder().tooltip("css").imageName("colaborator-css.png").build());
//        collaborators.add(Colaborator.builder().tooltip("java").imageName("colaborator-java.png").build());
//        collaborators.add(Colaborator.builder().tooltip("oracle").imageName("colaborator-oracle.png").build());
//        collaborators.add(Colaborator.builder().tooltip("git").imageName("colaborator-git.png").build());
//        collaborators.add(Colaborator.builder().tooltip("angular").imageName("colaborator-angular.png").build());
//        collaborators.add(Colaborator.builder().tooltip("spring").imageName("colaborator-spring.png").build());
//        collaborators.add(Colaborator.builder().tooltip("mysql").imageName("colaborator-mysql.png").build());
//
//        colaboratorRepos.saveAll(collaborators);




    }
}
