import { HttpParams, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Sistema } from '../sistema';
import { SistemaService } from '../sistema.service';
import { tap, map, filter, distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';
import { Page } from '../page';


@Component({
  selector: 'app-search-sistema',
  templateUrl: './search-sistema.component.html',
  styleUrls: ['./search-sistema.component.css']
})
export class SearchSistemaComponent implements OnInit {

  descricao!: string;
  url!: String;
  email!: String;

  sistemas: Sistema[] | undefined;
  page!: Page;

  totalPages!: number;
  numero!: number;

  constructor(private sistemaService: SistemaService,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.getSistemas();
  }

  private getSistemas(){
    this.sistemaService.getSistemasList(1).subscribe(data => {
      this.page = data;
      this.sistemas = this.page.content;
    })
  }

  updateSistema(id:any){
    this.router.navigate(['update-sistema',id]);
  }
  

}
