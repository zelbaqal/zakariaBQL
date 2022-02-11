package com.example.testh2.dao;

import com.example.testh2.entity.UserInformations;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * @author zakaria
 */
@Repository
public interface UserInformationsRepo extends JpaRepository<UserInformations, Long> {
    Optional<UserInformations> findUserInformationsByUserId(Long userId);
}
