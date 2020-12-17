


import { UpdateSistemaComponent } from './../update-sistema/update-sistema.component';
import { SistemaService } from './../sistema.service';
import { Component, OnInit } from '@angular/core';
import { Sistema } from '../sistema';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { Page } from '../page';



@Component({
  selector: 'app-sistema-list',
  templateUrl: './sistema-list.component.html',
  styleUrls: ['./sistema-list.component.css']
})
export class SistemaListComponent implements OnInit {

  sistemas: Sistema[] | undefined;
  page: Page = new Page();
  totalPages!: number;
  number!: number;
  

  url: String = "http://localhost:4200/sistemas/";

  constructor(private sistemaService: SistemaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.number = this.route.snapshot.params['number'];
    this.getSistemas(this.number);
  }


  private getSistemas(number: number){
    this.sistemaService.getSistemasList(number).subscribe(data => {
      this.page = data;
      this.sistemas = this.page.content;
      this.totalPages = this.page.totalPages;
    })
  }

  updateSistema(id:any){
    this.router.navigate(['update-sistema',id]);
  }



}
