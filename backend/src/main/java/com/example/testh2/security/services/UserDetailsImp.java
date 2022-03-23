package com.example.testh2.security.services;

import com.example.testh2.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserDetailsImp implements UserDetails {

    private static final long serialVersionUID = 1L;

    private User user;
    Set<GrantedAuthority> authorities = null;


    public String getPassword() {
        return user.getPassword();
    }

    public String getUsername() {
        return user.getEmail();
    }

    public boolean isAccountNonExpired() {
        return true;
    }

    public boolean isAccountNonLocked() {
        return true;
    }

    public boolean isCredentialsNonExpired() {
        return true;
    }

    public boolean isEnabled() {
        return true;
    }



}
