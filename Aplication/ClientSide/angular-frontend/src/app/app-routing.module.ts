import { UpdateSistemaComponent } from './update-sistema/update-sistema.component';
import { CreateSistemaComponent } from './create-sistema/create-sistema.component';
import { SistemaListComponent } from './sistema-list/sistema-list.component';
import { Sistema } from './sistema';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: "sistemas", component: SistemaListComponent},
  {path: 'create-sistema', component: CreateSistemaComponent},
  {path: '', redirectTo: 'sistemas', pathMatch: 'full'},
  {path: 'update-sistema/:id',component: UpdateSistemaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
