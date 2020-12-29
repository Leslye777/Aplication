import { HttpParams, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { Sistema } from '../models/sistema';
import { SistemaService } from '../sistema.service';
import { Page } from '../models/page';


@Component({
  selector: 'app-search-sistema',
  templateUrl: './search-sistema.component.html',
  styleUrls: ['./search-sistema.component.css']
})
export class SearchSistemaComponent implements OnInit {

  page:any;
  sistemas!: Sistema[];
  totalPages!: number;
  pagina!: number;
  atual=0;
  ultima = 0;

  sigla!: String;
  descricao!: String;
  email!: String;

  arrayOne(n: number): any[] {
    return Array(n);
  }

  constructor(private sistemaService: SistemaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.pagina = 0;
  }


  getSistemasTeste(pagina: number, descricao: String, sigla: String){
    descricao = this.verificaUndefined(descricao);
    sigla = this.verificaUndefined(sigla);
    this.sistemaService.getSistemasListTeste(pagina, descricao, sigla).subscribe(data => {
      this.page = data;
      pagina = this.page.number;
      this.totalPages = this.page.totalPages;
      this.atual = this.page.number;
      this.sistemas = this.page.content;
      this.ultima = this.totalPages-1;
      this.isEmpty();
      console.log("Descricao "+descricao+" Pagina "+pagina+" Sigla "+sigla);
    }
    )
  }

  incrementador(){
    this.atual = this.atual+1;
  }  

  decrementador(){
    this.atual = this.atual-1;
  }

  url = "http://localhost:4200/search-sistema/"


  updateSistema(id:any){
    this.router.navigate(['update-sistema',id]);
    
  }

  inicial(): String{
    if(this.atual===0){
      return "disabled";
    }
    return "";
  }

  final(): String{
    if(this.atual===this.totalPages-1){
      return "disabled";
    }
    return ""
  }

  comparacao(i: number): String{
    if(this.atual === i){
      return "active";
    }
    return "";

  }


  isEmpty(){
    if(this.totalPages===0){
      alert("Nenhum Sistema foi encontrado. Favor revisar os critérios da sua pesquisa!");
    }
  }

  teste(pagina: number){
    this.getSistemasTeste(pagina, this.descricao, this.sigla);
  }

  

  onSearch(){
    this.getSistemasTeste(this.pagina,this.descricao,this.sigla);
  }

  verificaUndefined(campo: any){
    if(campo===""){
      return undefined
    }
    return campo;
  }
}
