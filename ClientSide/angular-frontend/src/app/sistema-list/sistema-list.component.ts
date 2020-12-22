


import { SistemaService } from '../sistema.service';
import { Component, OnInit } from '@angular/core';
import { Sistema } from '../models/sistema';
import { Router, ActivatedRoute } from '@angular/router';
import { range } from 'rxjs';


@Component({
  selector: 'app-sistema-list',
  templateUrl: './sistema-list.component.html',
  styleUrls: ['./sistema-list.component.css']
})
export class SistemaListComponent implements OnInit {
  
  page:any;
  sistemas!: Sistema[];
  totalPages!: number;
  pagina!: number;
  atual=0;
  ultima = 0;

  url2 = "null"
  descricao: string = "null"
  email = "null";

  arrayOne(n: number): any[] {
    return Array(n);
  }

  constructor(private sistemaService: SistemaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.pagina = parseInt(this.route.snapshot.params['pagina']);
    this.getSistemas(this.pagina);
  }

  getSistemas(pagina: number){
    this.sistemaService.getSistemasList(pagina).subscribe(data => {
      this.page = data;
      pagina = this.page.number;
      this.totalPages = this.page.totalPages;
      this.atual = this.page.number;
      this.sistemas = this.page.content;
      this.ultima = this.totalPages-1;
    }
    )
  }



  incrementador(){
    this.atual = this.atual+1;
  }  

  decrementador(){
    this.atual = this.atual-1;
  }

  url = "http://localhost:4200/sistemas/"

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

  teste(numero: number){
    this.getSistemas(numero);
  }


  comparacao(i: number): String{
    if(this.atual === i){
      return "active";
    }
    return "";

  }

  

  
}