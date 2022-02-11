package com.example.testh2.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author zakaria
 */
@Data
@NoArgsConstructor
public class ResponseInformations {

    private Long userId;
    private String salutation;
    private String presentation;
    private String jobDescription;
}
