package com.example.testh2.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Link {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long linkId;
    private String linkDescription;
    private String linkUrl;
    private String linkImageName;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @JsonBackReference
    private User user;
}
