import { UpdateSistemaComponent } from './../update-sistema/update-sistema.component';
import { SistemaService } from './../sistema.service';
import { Component, OnInit } from '@angular/core';
import { Sistema } from '../sistema';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sistema-list',
  templateUrl: './sistema-list.component.html',
  styleUrls: ['./sistema-list.component.css']
})
export class SistemaListComponent implements OnInit {

  sistemas: Sistema[] | undefined;

  constructor(private sistemaService: SistemaService,
    private router: Router) { }

  ngOnInit(): void {
    this.getSistemas();
  }

  private getSistemas(){
    this.sistemaService.getSistemasList().subscribe(data => {
      this.sistemas = data;
    })
  }

  updateSistema(id:any){
    this.router.navigate(['update-sistema',id]);
  }

}
