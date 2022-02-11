package com.example.testh2.services.filesaver;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;



/**
 * @author zakaria
 */
public interface FileStorageService {

    void save(MultipartFile file, String fileName, String extention);
    Resource load(String filename);
}
