package com.example.testh2.services;

import com.example.testh2.dao.UserInformationsRepo;
import com.example.testh2.dto.ResponseInformations;
import com.example.testh2.dto.UserInformationsDto;
import com.example.testh2.entity.UserInformations;
import com.example.testh2.mappers.UserInformatiionsMpapper;
import lombok.AllArgsConstructor;
import org.hibernate.engine.jdbc.BlobProxy;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

/**
 * @author zakaria
 */
@Service
@AllArgsConstructor
public class GeneralInfoService {

    private final UserInformationsRepo userInformationsRepo;
    private final UserInformatiionsMpapper userInformatiionsMpapper;


    public ResponseInformations saveGeneralInformation(String lang, MultipartFile cvFile, UserInformationsDto generalInformationDto){

        UserInformations userInformations = null;
        byte[] file = null;
        Long id = generalInformationDto.getUserId();

        //Check if there an Id =====> update
        if(id != null){
            userInformations = findUser(id);
            userInformations = userInformatiionsMpapper.INSTANCE.toUserInformations(generalInformationDto);
        }else{
            userInformations = userInformatiionsMpapper.INSTANCE.toUserInformations(generalInformationDto);
        }
        //If id null =========> add
        try {
            file = cvFile.getBytes();
        }catch (IOException ex){
            return null;
        }
        userInformations.setResumeFr(BlobProxy.generateProxy(file));
        UserInformations user = userInformationsRepo.save(userInformations);

        return fieldsExtractorByLang(lang,user);

    }


    private ResponseInformations fieldsExtractorByLang(String lang, UserInformations user){
        ResponseInformations response = new ResponseInformations();
        response.setUserId(user.getUserId());
        if(lang.equals("en")){
            response.setSalutation(user.getSalutationEn());
            response.setPresentation(user.getPresentationEn());
            response.setJobDescription(user.getDescriptionEn());
        }else
        {
            response.setSalutation(user.getSalutationFr());
            response.setPresentation(user.getPresentationFr());
            response.setJobDescription(user.getDescriptionFr());
        }
        return response;
    }

    public ResponseInformations getUserInfo(Long id, String lang){
        UserInformations userInformations = findUser(id);
        return fieldsExtractorByLang(lang, userInformations);
    }

    private UserInformations findUser(Long id){
       return userInformationsRepo.findUserInformationsByUserId(id).orElseThrow(()->new RuntimeException("User not found"));
    }

    public UserInformationsDto getUserGlobalInfo(Long id) {

        return userInformatiionsMpapper.INSTANCE
                .toUserInformationDto(
                        userInformationsRepo.findUserInformationsByUserId(id).orElseThrow(()-> new RuntimeException("not found")));
    }
}
