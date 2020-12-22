import { SistemaService } from './../sistema.service';
import { Sistema } from '../models/sistema';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-sistema',
  templateUrl: './create-sistema.component.html',
  styleUrls: ['./create-sistema.component.css']
})
export class CreateSistemaComponent implements OnInit {

  sistema: Sistema = new Sistema();
  dataAtual = new Date();

  constructor(private sistemaService:SistemaService, private router: Router) { }

  ngOnInit(): void {
  }

  saveSistema(){
    this.sistemaService.createSistema(this.sistema).subscribe(data =>{
      console.log(data);
      this.goToSistemaList();
    },
    error => console.log(error));
  }

  goToSistemaList(){
    alert("Operação realizada com sucesso!");
    this.router.navigate(['/']);
  }

  onSubmit(){
    this.sistema.status = "Ativo"
    this.sistema.alteracaoJust = "inicial";
    this.sistema.dataAlteracao = this.dataAtual;
    this.sistema.usuarioNome = "user";
    console.log(this.sistema);
    this.saveSistema();

  }

}
