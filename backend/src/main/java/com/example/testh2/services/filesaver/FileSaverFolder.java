package com.example.testh2.services.filesaver;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

/**
 * @author zakaria
 */
@Service
@Qualifier("saveFolder")
public class FileSaverFolder implements FileStorageService {

    private final Path root = Paths.get("uploads");

    {
        try {
            if(!Files.exists(root)){
                Files.createDirectories(root);
            }
        } catch (IOException e) {
            throw new RuntimeException("Could not initialize folder for upload!");
        }
    }

    @Override
    public void save(MultipartFile file, String fileName, String extention) {
        String concatedFile = fileName +"."+ extention;
        try {
            Files.copy(file.getInputStream(), this.root.resolve(concatedFile));
        } catch (Exception e) {
            throw new RuntimeException("Could not store the file. Error: " + e.getMessage());
        }
    }

    @Override
    public Resource load(String filename) {

        try {
            Path file = root.resolve(filename);
            Resource resource = new UrlResource(file.toUri());
            if (resource.exists() || resource.isReadable()) {
                return resource;
            } else {
                throw new RuntimeException("Could not read the file!");
            }
        } catch (MalformedURLException e) {
            throw new RuntimeException("Error: " + e.getMessage());
        }
    }
}
