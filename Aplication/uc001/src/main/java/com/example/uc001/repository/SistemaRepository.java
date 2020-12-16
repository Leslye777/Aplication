package com.example.uc001.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.uc001.model.Sistema;

@Repository
public interface SistemaRepository extends JpaRepository<Sistema, Long>{

}
