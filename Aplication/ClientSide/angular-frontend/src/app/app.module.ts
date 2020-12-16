import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { SistemaListComponent } from './sistema-list/sistema-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateSistemaComponent } from './create-sistema/create-sistema.component'
import {FormsModule} from "@angular/forms";
import { UpdateSistemaComponent } from './update-sistema/update-sistema.component'



@NgModule({
  declarations: [
    AppComponent,
    SistemaListComponent,
    CreateSistemaComponent,
    UpdateSistemaComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
