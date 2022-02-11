package com.example.testh2.services.files;

import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;


/**
 * @author zakaria
 */
@Service
public class ExcelSavableImp implements ExcelCsvReader<XSSFSheet> {


    @Override
    public XSSFSheet loadFileAndConvertedToUserInfo(Class<?> clazz, MultipartFile infoUserFile) throws IOException {
        XSSFWorkbook workbook = new XSSFWorkbook(infoUserFile.getInputStream());
        // Read student data form excel file sheet1.
        XSSFSheet worksheet = workbook.getSheetAt(0);
        return worksheet;
    }
}
