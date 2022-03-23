package com.example.testh2.dao;

import com.example.testh2.entity.ERole;
import com.example.testh2.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepo extends JpaRepository<Role, Integer> {
    Optional<Role> findByName(ERole name);
}
