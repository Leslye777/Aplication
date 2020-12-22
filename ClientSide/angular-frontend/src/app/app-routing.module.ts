import { SearchSistemaComponent } from './search-sistema/search-sistema.component';
import { UpdateSistemaComponent } from './update-sistema/update-sistema.component';
import { CreateSistemaComponent } from './create-sistema/create-sistema.component';
import { SistemaListComponent } from './sistema-list/sistema-list.component';
import { Sistema } from './models/sistema';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  {path: "search-sistema/:pagina/:descricao/:sigla", component: SearchSistemaComponent},
  {path: "search-sistema/:pagina/:descricao", component: SearchSistemaComponent},
  {path: "search-sistema", component: SearchSistemaComponent},
  {path: 'create-sistema', component: CreateSistemaComponent},
  {path: "sistemas/:pagina", component: SistemaListComponent},
  {path: 'update-sistema/:id',component: UpdateSistemaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
