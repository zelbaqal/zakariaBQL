package com.example.testh2.mappers;


import com.example.testh2.dto.UserInformationsDto;
import com.example.testh2.entity.UserInformations;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

/**
 * @author zakaria
 */
@Mapper(componentModel = "spring")
public interface UserInformatiionsMpapper {

    UserInformatiionsMpapper INSTANCE = Mappers.getMapper( UserInformatiionsMpapper.class );

    @Mapping(source = "userId", target = "userId")
    @Mapping(source = "salutation.fieldFR", target = "salutationFr")
    @Mapping(source = "salutation.fieldEN", target = "salutationEn")
    @Mapping(source = "presentation.fieldFR", target = "presentationFr")
    @Mapping(source = "presentation.fieldEN", target = "presentationEn")
    @Mapping(source = "jobDescription.fieldFR", target = "descriptionFr")
    @Mapping(source = "jobDescription.fieldEN", target = "descriptionEn")
    UserInformations toUserInformations(UserInformationsDto generalInformationDto);


    @Mapping(source = "userId", target = "userId")
    @Mapping(source = "resumeNameEn", target = "resumeNameEn")
    @Mapping(source = "resumeNameFr", target = "resumeNameFr")
    @Mapping(source = "salutationFr", target = "salutation.fieldFR")
    @Mapping(source = "salutationEn", target = "salutation.fieldEN")
    @Mapping(source = "presentationEn", target = "presentation.fieldEN")
    @Mapping(source = "presentationFr", target = "presentation.fieldFR")
    @Mapping(source = "descriptionEn", target = "jobDescription.fieldEN")
    @Mapping(source = "descriptionFr", target = "jobDescription.fieldFR")
    UserInformationsDto toUserInformationDto(UserInformations user);
}
