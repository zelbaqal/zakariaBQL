package com.example.testh2.controller;

import com.example.testh2.dto.ResponseInformations;
import com.example.testh2.dto.UserInformationsDto;
import com.example.testh2.entity.Link;
import com.example.testh2.entity.User;
import com.example.testh2.security.services.UserDetailsImp;
import com.example.testh2.services.GeneralInfoService;
import com.example.testh2.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.security.Principal;

/**
 * @author zakaria
 */
@RestController
@RequestMapping("api/userInfo")
@AllArgsConstructor
public class UserController {

    private final UserService userService;


    @PatchMapping
    public ResponseEntity<UserInformationsDto> updateUserHomeInfo(
            @RequestPart("userInfo") UserInformationsDto userInfo,
            @RequestPart(value = "cvFileFR", required = false)MultipartFile cvFileFR,
            @RequestPart(value = "cvFileEN", required = false)MultipartFile cvFileEN
        ){


        return ResponseEntity.ok().body(userService.updateUserHomeInformation(userInfo, cvFileFR, cvFileEN));
    }

    @PatchMapping("/user")
    public ResponseEntity<String> updateUserEditInfo(
            @RequestPart("userInfo") User userInfo,
            @RequestPart(value = "userImage", required = false)MultipartFile userImage
    ){
        return ResponseEntity.ok().body(userService.updateUserEditInformation(userInfo, userImage));
    }

    @PatchMapping("/links")
    public ResponseEntity<Link> updateLinkInfo(
            @RequestPart("link")Link link,
            @RequestPart(value = "linkImage", required = false)MultipartFile linkImage){
        return ResponseEntity.ok().body(userService.updateLinkInfo(link, linkImage));
    }



//    @GetMapping("/{lang}")
//    public ResponseEntity<ResponseInformations> getUserInformations(@PathVariable("lang") String lang){
//        return ResponseEntity.ok().body(generalInfoService.getUserInfo((long) 1,lang));
//    }
//
//    @PostMapping("/{lang}")
//    public ResponseEntity<ResponseInformations> updateInfoUser(
//            @PathVariable("lang") String lang,
//            @RequestPart("cvFile")MultipartFile cvFile,
//            @RequestPart("userInfo") GeneralInformationDto userInfo){
//
//        ResponseInformations responseInformations = generalInfoService.saveGeneralInformation(lang, cvFile, userInfo);
//
//        return ResponseEntity.ok(responseInformations);
//    }

}
