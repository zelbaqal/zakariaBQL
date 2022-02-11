package com.example.testh2.services.filesaver;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

/**
 * @author zakaria
 */
@Service
@Qualifier("saveDB")
public class FileSaverDB implements FileStorageService {

    @Override
    public void save(MultipartFile file, String fileName, String extention) {

    }

    @Override
    public Resource load(String filename) {
        return null;
    }
}
