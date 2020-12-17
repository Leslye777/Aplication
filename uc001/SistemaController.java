package com.example.uc001.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.uc001.exception.ResourceNotFoundException;
import com.example.uc001.model.Sistema;
import com.example.uc001.repository.SistemaRepository;


@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")

public class SistemaController {
	
	@Autowired
	private SistemaRepository sistemaRepository;
	
	/*
	@GetMapping("/sistemas")
	public List<Sistema> getAllSistemas(){
		
		return sistemaRepository.findAll();
	}
	*/
	@GetMapping("/sistemas")
	public Page<Sistema> getSistemas(@RequestParam(required = false) String Descricao,
			@RequestParam(required = false) String Sigla,
			@RequestParam(required = false) String Email,
			@RequestParam int pagina, @RequestParam int qtd){
			
		
		Pageable paginacao = PageRequest.of(pagina,qtd) ;
		
		Page<Sistema> paginas = sistemaRepository.findAll(paginacao);
		
		return paginas.getPageable();
	}
	
	
	@PostMapping("/sistemas")
	public Sistema createSistema(@RequestBody Sistema sistema) {
		sistema.setStatus("Ativo");
		return sistemaRepository.save(sistema);
	}
	
	@GetMapping("/sistemas/{id}")
	public ResponseEntity<Sistema> getSistemaById(@PathVariable Long id) {
		Sistema sistema = sistemaRepository.findById(id)
				.orElseThrow( () -> new ResourceNotFoundException("Não encontrado: "+id) );
	
		return ResponseEntity.ok(sistema);
	}
	
	@PutMapping("/sistemas/{id}")
	public ResponseEntity<Sistema> updateSistema(@PathVariable Long id, @RequestBody Sistema sistemaDetalhes){
		
		Sistema sistema = sistemaRepository.findById(id)
				.orElseThrow( () -> new ResourceNotFoundException("Não encontrado: "+id) );
		
		sistema.setAlteracaoJust(sistemaDetalhes.getAlteracaoJust());
		sistema.setDataAlteracao(java.time.LocalDateTime.now());
		sistema.setDescricao(sistemaDetalhes.getDescricao());
		sistema.setEmailAtendimento(sistemaDetalhes.getEmailAtendimento());
		sistema.setSigla(sistemaDetalhes.getSigla());
		sistema.setUrl(sistemaDetalhes.getUrl());
		sistema.setUsuarioNome(sistemaDetalhes.getUsuarioNome());
		sistema.setStatus(sistemaDetalhes.getStatus());
		
		Sistema updatedSistema = sistemaRepository.save(sistema);
		
		return ResponseEntity.ok(updatedSistema);
	}
	

}
