package com.example.testh2.dto;

import com.example.testh2.entity.ERole;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class JwtResponse {

    private String jwt;
    private Long id;
    private String username;
    private String email;
    private List<String> roles = new ArrayList<>();
}
