package com.example.testh2.controller;

import com.example.testh2.entity.Colaborator;
import com.example.testh2.services.ColaboratorsService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.core.io.Resource;

import java.util.List;


@RestController
@AllArgsConstructor
@RequestMapping("api/colaborators")
public class ColaboratorController {

    private final ColaboratorsService colaboratorsService;

    @GetMapping("/{imageName}")
    public Resource loadColaboratorImage(@PathVariable("imageName") String imageName){
        return colaboratorsService.getColaboratorImage(imageName);
    }

    @GetMapping
    public ResponseEntity<List<Colaborator>> getColaborators(){
        return ResponseEntity.ok().body(colaboratorsService.getColaboratorsImages());
    }

}
