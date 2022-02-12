package com.example.testh2.dto;

import lombok.Data;

/**
 * @author zakaria
 */
@Data
public class UserInformationsDto {

    private Long userId;
    private FielldsLanguage salutation;
    private FielldsLanguage presentation;
    private FielldsLanguage jobDescription;
    private String resumeNameEn;
    private String resumeNameFr;
}
