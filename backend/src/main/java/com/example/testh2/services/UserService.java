package com.example.testh2.services;

import com.example.testh2.dao.LinkRepos;
import com.example.testh2.dao.UserInformationsRepo;
import com.example.testh2.dao.UserRepos;
import com.example.testh2.dto.UserInformationsDto;
import com.example.testh2.entity.Link;
import com.example.testh2.entity.User;
import com.example.testh2.entity.UserInformations;
import com.example.testh2.mappers.UserInformatiionsMpapper;
import com.example.testh2.security.services.UserDetailsImp;
import com.example.testh2.services.files.DataExtractorService;
import com.example.testh2.services.filesaver.FileStorageService;
import com.example.testh2.utils.FileTypeEnum;
import lombok.RequiredArgsConstructor;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.hibernate.engine.jdbc.BlobProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.EntityNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * @author zakaria
 */
@Service
@RequiredArgsConstructor
public class UserService {

    //private final DataExtractorService dataExtractorService;

    private final UserInformationsRepo userInformationsRepo;
    private final UserRepos userRepos;
    private final UserInformatiionsMpapper userInformationsMpapper;
    private final LinkRepos linkRepos;

    @Autowired
    @Qualifier("saveFolder")
    private FileStorageService fileStorageService;

    public UserInformationsDto getUser() {
        return userInformationsMpapper.INSTANCE
                .toUserInformationDto(userInformationsRepo.findAll().get(0));
    }

    public UserInformationsDto updateUserHomeInformation(UserInformationsDto userInfo, MultipartFile cvFileFR, MultipartFile cvFileEN) {
        UserInformations userInformations = userInformationsMpapper.INSTANCE.toUserInformations(userInfo);
        String extention = "pdf"; //StringUtils.getFilenameExtension(cvFileFR.getOriginalFilename());
        String fileNameFr = "cv-"+userInfo.getUserId()+"-fr";
        String fileNameEn = "cv-"+userInfo.getUserId()+"-en";

        userInformations.setResumeNameFr(fileNameFr +"."+extention);
        userInformations.setResumeNameEn(fileNameEn +"."+extention);

        if(!cvFileFR.isEmpty() && cvFileFR.getSize() > 0){
            //User not update his french cv file
            userInformations.setResumeFr(BlobProxy.generateProxy(byteExtractor(cvFileFR)));
            fileStorageService.save(cvFileFR, fileNameFr, extention);
        }
        if(!cvFileEN.isEmpty() && cvFileEN.getSize() > 0){
            //User not update his french cv file
            userInformations.setResumeEn(BlobProxy.generateProxy(byteExtractor(cvFileEN)));
            fileStorageService.save(cvFileEN, fileNameEn, extention);
        }
        return userInformationsMpapper.INSTANCE.toUserInformationDto(userInformationsRepo.save(userInformations));
    }

    public String updateUserEditInformation(User userInfo, MultipartFile userImage) {

        User user = userRepos.findById(userInfo.getUserId()).orElseThrow(()-> new EntityNotFoundException("Not found"));

        //save image if exist
        if(userImage != null){
            String extention = StringUtils.getFilenameExtension(userImage.getOriginalFilename());
            fileStorageService.save(userImage,"profil-"+user.getUserId(), extention);
            userInfo.setImageName("profil-"+user.getUserId()+"."+ extention);
        }
        userRepos.save(userInfo);
        return "user updated successufuly";
    }

    public Link updateLinkInfo(Link upddatedLink, MultipartFile linkImage) {
        Link link = linkRepos.findByLinkId(upddatedLink.getLinkId()).orElseThrow(()-> new EntityNotFoundException("Not found"));
        if(linkImage != null){
            String extention = StringUtils.getFilenameExtension(linkImage.getOriginalFilename());
            fileStorageService.save(linkImage,"link-"+link.getLinkId(), extention);
            link.setLinkImageName("link-"+link.getLinkId()+"."+ extention);
        }
        link.setLinkDescription(upddatedLink.getLinkDescription());
        link.setLinkUrl(upddatedLink.getLinkUrl());
        linkRepos.save(link);
        return link;
    }



    private byte[] byteExtractor(MultipartFile file){
        try{
            return file.getBytes();
        }catch (IOException ex){
            throw new RuntimeException("Couldn't extract byte array from this file");
        }
    }

    public Resource loadPdfFile(String pdfName) {
        String fileName = pdfName + ".pdf";
        return fileStorageService.load(fileName);
    }

    public User getUserById(Long id) {
        return userRepos.findById(id).get();
    }




//    public void saveUserInfoWithFile(MultipartFile fileInfo){
//        List<UserInfo> userInfo = new ArrayList<>();
//        //Chek yhe extention of the file
//        String filenameExtension = StringUtils.getFilenameExtension(fileInfo.getOriginalFilename());
//            if(FileTypeEnum.CSV.isEqual(filenameExtension)){
//                try{
//                   // List<Record> list = dataExtractorService.extractDataFromCSV(fileInfo);
//                    //List<Record> records = dataExtractorService.extractDataFromCSV(fileInfo);
//                    //userInfo = records.stream().map(UserService::setValuesCsvToUser).collect(Collectors.toList());
//                    userInfo = dataExtractorService.extractDataFromCSV(fileInfo);
//
//                }catch (IOException exception){
//                   exception.printStackTrace();
//                }
//            }
//            else
//                if(FileTypeEnum.XLSX.isEqual(filenameExtension) || FileTypeEnum.XLS.isEqual(filenameExtension)){
//                        XSSFSheet worksheet = null;
//                        try{
//                            worksheet = dataExtractorService.extractDataFromXLS(fileInfo);
//                        }catch (IOException exception){
//                            throw new RuntimeException("Error");
//                        }
//
//                        for (int index = 0; index < worksheet.getPhysicalNumberOfRows(); index++) {
//                            if (index > 0) {
//                                XSSFRow row = worksheet.getRow(index);
//                                userInfo.add(setValuesXlsToUser(row));
//                            }
//                }
//
//            }
//        userRepository.saveAll(userInfo);
//    }
//
//
//    private UserInfo setValuesXlsToUser(XSSFRow row) {
//        UserInfo user = new UserInfo();
//        user.setFirstName(getCellValue(row, 0));
//        user.setLastName(getCellValue(row, 1));
//        user.setAdress(getCellValue(row, 2));
//        user.setEmail(getCellValue(row, 3));
//        user.setJobFunction(getCellValue(row, 4));
//        user.setDescription(getCellValue(row, 5));
//        return user;
//    }
//
//
//    private String getCellValue(Row row, int cellNo) {
//        DataFormatter formatter = new DataFormatter();
//        Cell cell = row.getCell(cellNo);
//        return formatter.formatCellValue(cell);
//    }


}
