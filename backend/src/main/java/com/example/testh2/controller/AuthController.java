package com.example.testh2.controller;

import com.example.testh2.dao.RoleRepo;
import com.example.testh2.dao.UserRepos;
import com.example.testh2.dto.JwtResponse;
import com.example.testh2.dto.LoginRequest;
import com.example.testh2.dto.MessageResponse;
import com.example.testh2.dto.SignUpRequest;
import com.example.testh2.entity.ERole;
import com.example.testh2.entity.Role;
import com.example.testh2.entity.User;
import com.example.testh2.security.jwt.JwtUtils;
import com.example.testh2.security.services.UserDetailsImp;
import com.example.testh2.services.AuthService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import javax.validation.Valid;


@RestController
@AllArgsConstructor
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        return ResponseEntity.ok(authService.signIn(loginRequest));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest signUpRequest) {
        return ResponseEntity.ok(authService.registerUser(signUpRequest));
    }
}
