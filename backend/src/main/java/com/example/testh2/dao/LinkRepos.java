package com.example.testh2.dao;

import com.example.testh2.entity.Link;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LinkRepos extends JpaRepository<Link, Long> {

    Optional<Link> findByLinkId(Long id);
}
