
import { UpdateSistemaComponent } from './update-sistema/update-sistema.component';
import { Sistema } from './models/sistema';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from './models/page';

@Injectable({
  providedIn: 'root'
})
export class SistemaService {

  private baseURL = "http://localhost:8080/api/v1/sistemas" 

  constructor(private HttpClient: HttpClient) { }
 
  getSistemasList(pagina: number): Observable<Page>{
    return this.HttpClient.get<Page>(`${this.baseURL}?pagina=${pagina}`);
  }

  getSistemaById(id: number): Observable<Sistema>{
    return this.HttpClient.get<Sistema>(`${this.baseURL}/${id}`)
  }

  createSistema(sistema: Sistema): Observable<Object>{
    return this.HttpClient.post(`${this.baseURL}`,sistema);
  }


  UpdateSistema(id: number, sistema: Sistema): Observable<Object>{
    return this.HttpClient.put(`${this.baseURL}/${id}`, sistema);
  }

}
