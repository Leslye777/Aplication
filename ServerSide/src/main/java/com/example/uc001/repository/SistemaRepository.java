package com.example.uc001.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.uc001.model.Sistema;

@Repository
public interface SistemaRepository extends JpaRepository<Sistema, Long>{
	
	
	@Query(value = "SELECT * FROM SISTEMA WHERE DESCRICAO = ?1 "
			+ "OR SIGLA = ?2",
			
		    countQuery = "SELECT count(*) FROM SISTEMA WHERE DESCRICAO = ?1 OR SIGLA = ?2",
		    nativeQuery = true)
	Page<Sistema> FindByQuery(String descricao, String sigla, Pageable paginacao);

		 	

}
