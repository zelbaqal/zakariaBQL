package com.example.testh2.services.filesaver;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

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
        Path path = root.resolve(concatedFile);
        if(Files.exists(path)){
            //Delete old file and replace it with the new file
            delete(concatedFile);
        }
        //File not exist
        try {
            Files.copy(file.getInputStream(), this.root.resolve(concatedFile));
        } catch (IOException e) {
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

    @Override
    public void delete(String filename) {
        try {
            Path path = root.resolve(filename);
            Files.delete(path);
        }catch (IOException e){
            throw new RuntimeException("Error: " + e.getMessage());
        }
    }
}
