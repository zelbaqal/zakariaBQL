package com.example.testh2.services;

import com.example.testh2.dao.ColaboratorRepos;
import com.example.testh2.entity.Colaborator;
import com.example.testh2.services.filesaver.FileStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.core.io.Resource;

import java.util.List;


@Service
public class ColaboratorsService {

    @Autowired
    @Qualifier("saveFolder")
    private FileStorageService fileStorageService;

    @Autowired
    private ColaboratorRepos colaboratorRepos;

    public Resource getColaboratorImage(String imageName){
        return fileStorageService.load(imageName);
    }

    public List<Colaborator> getColaboratorsImages() {

        return colaboratorRepos.findAll();
    }
}
