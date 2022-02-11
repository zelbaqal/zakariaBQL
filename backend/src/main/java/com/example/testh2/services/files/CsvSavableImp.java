package com.example.testh2.services.files;

import com.example.testh2.entity.UserInformations;
import com.fasterxml.jackson.databind.ObjectReader;
import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.fasterxml.jackson.dataformat.csv.CsvSchema;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;


/**
 * @author zakaria
 */
@Service
@RequiredArgsConstructor
public class CsvSavableImp implements ExcelCsvReader<List<UserInformations>>{

    private final CsvMapper mapper;


    @Override
    public List<UserInformations> loadFileAndConvertedToUserInfo(Class<?> clazz, MultipartFile infoUserFile) throws IOException {
        CsvSchema schema = mapper.schemaFor(clazz).withHeader().withColumnReordering(true);
        ObjectReader reader = mapper.readerFor(clazz).with(schema);

        return reader.<UserInformations>readValues(infoUserFile.getInputStream()).readAll();
    }



}
