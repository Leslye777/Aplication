package com.example.uc001.model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Sistema")
public class Sistema {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "descricao",length = 100,nullable = false)
	private String descricao;
	
	@Column(name = "sigla", length = 10, nullable = false)
	private String sigla;
	
	@Column(name = "emailAtendimento", length = 100)
	private String emailAtendimento;
	
	@Column(name = "url", length = 50)
	private String url;
	
	@Column(name = "status", length = 50, nullable = false)
	private String status;
	
	@Column(name = "usuarioNome", length = 50)
	private String usuarioNome;
	
	@Column(name = "dataAlteracao", length = 50, nullable = false)
	private LocalDateTime dataAlteracao;
	
	@Column(name = "alteracaoJust", length = 50, nullable = false)
	private String alteracaoJust;
	
	
	public Sistema() {
		
	}

	public Sistema(String descricao, String sigla, String emailAtendimento, String url, String status) {
		super();
		this.descricao = descricao;
		this.sigla = sigla;
		this.emailAtendimento = emailAtendimento;
		this.url = url;
		this.status = status;
		
	}
	
	public String getUsuarioNome() {
		return usuarioNome;
	}

	public void setUsuarioNome(String usuarioNome) {
		this.usuarioNome = usuarioNome;
	}

	public LocalDateTime getDataAlteracao() {
		return dataAlteracao;
	}

	public void setDataAlteracao(LocalDateTime dataAlteracao) {
		this.dataAlteracao = dataAlteracao;
	}

	public String getAlteracaoJust() {
		return alteracaoJust;
	}

	public void setAlteracaoJust(String alteracaoJust) {
		this.alteracaoJust = alteracaoJust;
	}
	
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public String getSigla() {
		return sigla;
	}
	public void setSigla(String sigla) {
		this.sigla = sigla;
	}
	public String getEmailAtendimento() {
		return emailAtendimento;
	}
	public void setEmailAtendimento(String emailAtendimento) {
		this.emailAtendimento = emailAtendimento;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}	
	
	
	
	
	
}
