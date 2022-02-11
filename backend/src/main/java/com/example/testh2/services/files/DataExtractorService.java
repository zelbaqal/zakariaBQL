package com.example.testh2.services.files;

import com.example.testh2.entity.UserInformations;
import lombok.RequiredArgsConstructor;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;


@Service
@RequiredArgsConstructor
public class DataExtractorService {

    private final CsvSavableImp csvSavableImp;
    private final ExcelSavableImp excelSavableImp;

    public List<UserInformations> extractDataFromCSV(MultipartFile file)throws IOException {
        return csvSavableImp.loadFileAndConvertedToUserInfo(UserInformations.class, file);
    }

    public XSSFSheet extractDataFromXLS(MultipartFile file)throws IOException {
        return excelSavableImp.loadFileAndConvertedToUserInfo(UserInformations.class, file);
    }




}
