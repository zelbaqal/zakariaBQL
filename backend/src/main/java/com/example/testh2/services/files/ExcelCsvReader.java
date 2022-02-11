package com.example.testh2.services.files;


import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

/**
 * @author zakaria
 */
public interface ExcelCsvReader<T> {

     T loadFileAndConvertedToUserInfo(Class<?> clazz, MultipartFile infoUserFile) throws IOException;
}
