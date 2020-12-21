import { SearchSistemaComponent } from './search-sistema/search-sistema.component';
import { UpdateSistemaComponent } from './update-sistema/update-sistema.component';
import { CreateSistemaComponent } from './create-sistema/create-sistema.component';
import { SistemaListComponent } from './sistema-list/sistema-list.component';
import { Sistema } from './models/sistema';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: "sistemas/:pagina", component: SistemaListComponent},
  {path: "search-sistema/:pagina", component: SearchSistemaComponent},
  {path: 'create-sistema', component: CreateSistemaComponent},
  {path: '', redirectTo: 'search-sistema/0', pathMatch: 'full'},
  {path: 'update-sistema/:id',component: UpdateSistemaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
