package com.example.testh2.services;

import com.example.testh2.services.filesaver.FileStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.core.io.Resource;


@Service
public class ColaboratorsService {

    @Autowired
    @Qualifier("saveFolder")
    private FileStorageService fileStorageService;

    public Resource getColaboratorImage(String imageName){
        return fileStorageService.load(imageName);
    }
}
