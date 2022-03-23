package com.example.testh2.security.services;

import com.example.testh2.dao.UserRepos;
import com.example.testh2.entity.Role;
import com.example.testh2.entity.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.HashSet;
import java.util.Set;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    Logger logger = LoggerFactory.getLogger(UserDetailsServiceImpl.class);

    @Autowired
    UserRepos userRepository;
    @Override
    @Transactional
    public UserDetailsImp loadUserByUsername(String username) throws UsernameNotFoundException {
        User domainUser = userRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));
        Set<Role> roles = domainUser.getRoles();
        logger.debug("role of the user" + roles);

        Set<GrantedAuthority> authorities = new HashSet<>();
        for(Role role: roles){
            authorities.add(new SimpleGrantedAuthority(role.getName().name()));
            logger.debug("role" + role + " role.getRole()" + (role.getName()));
        }
        UserDetailsImp customUserDetail=new UserDetailsImp();
        customUserDetail.setUser(domainUser);
        customUserDetail.setAuthorities(authorities);

        return customUserDetail;
    }
}
