import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sistema } from '../models/sistema';
import { SistemaService } from '../sistema.service';


@Component({
  selector: 'app-update-sistema',
  templateUrl: './update-sistema.component.html',
  styleUrls: ['./update-sistema.component.css']
})
export class UpdateSistemaComponent implements OnInit {

  id!: number;
  sistema: Sistema = new Sistema();


  
  constructor(private sistemaService: SistemaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.sistemaService.getSistemaById(this.id).subscribe(data => {
      this.sistema = data;
    }, error => console.log(error));
  }
  
  onSubmit(){
    if(!this.isValidEmail(this.sistema.emailAtendimento)){
      alert("E-mail invalido");
      return  
    }
    if((this.sistema.descricao===undefined || this.sistema.sigla===undefined) ||
    this.sistema.descricao===null||this.sistema.sigla===null||
    this.sistema.descricao===""||this.sistema.sigla===""){
      alert("Dados obrigatórios não informados");
      return
    }
    this.sistemaService.UpdateSistema(this.id, this.sistema).subscribe(data =>{
      this.goToSistemaList();
    }, error => console.log(error));
    
    
  }

  goToSistemaList(){
    alert("Operação realizada com sucesso!");
    this.router.navigate(['/']);
  }

 reg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;


isValidEmail(email: any){
  return this.reg.test(email);
}



}
