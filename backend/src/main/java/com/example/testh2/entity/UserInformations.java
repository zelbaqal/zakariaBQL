package com.example.testh2.entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Blob;

/**
 * @author zakaria
 */
@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserInformations {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;
    private String salutationFr;
    private String salutationEn;
    private String presentationFr;
    private String presentationEn;
    private String descriptionFr;
    private String descriptionEn;
    private String resumeNameFr;
    private String resumeNameEn;
    private Blob resumeFr;
    private Blob resumeEn;
}
