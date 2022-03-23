package com.example.testh2.controller;

import com.example.testh2.dto.UserInformationsDto;
import com.example.testh2.entity.Colaborator;
import com.example.testh2.entity.User;
import com.example.testh2.security.services.UserDetailsImp;
import com.example.testh2.services.ColaboratorsService;
import com.example.testh2.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;

@RestController
@RequestMapping("api/public")
@AllArgsConstructor
public class PublicResourcesController {

    private final UserService userService;
    private final ColaboratorsService colaboratorsService;


    @GetMapping
    public ResponseEntity<UserInformationsDto> getUserInformations(){
        return ResponseEntity.ok().body(userService.getUser());
    }

    @GetMapping("/user")
    public ResponseEntity<User> getUser(){
        return ResponseEntity.ok().body(userService.getUserById(new Long(1)));
    }


    @GetMapping("/{pdfName}")
    public ResponseEntity<Resource> loadPdfFile(@PathVariable String pdfName) throws IOException {
        Resource file = userService.loadPdfFile(pdfName);
        Path path = file.getFile().toPath();
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_TYPE, Files.probeContentType(path))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"")
                .body(file);
    }

    @GetMapping("/colaborators/{imageName}")
    public Resource loadColaboratorImage(@PathVariable("imageName") String imageName){
        return colaboratorsService.getColaboratorImage(imageName);
    }

    @GetMapping("colaborators")
    public ResponseEntity<List<Colaborator>> getColaborators(){
        return ResponseEntity.ok().body(colaboratorsService.getColaboratorsImages());
    }

}
