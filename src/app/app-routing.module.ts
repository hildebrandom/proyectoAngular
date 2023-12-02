import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListArticulosComponent } from './components/list-articulos/list-articulos.component';
import { EditarArticulosComponent } from './components/editar-articulos/editar-articulos.component';

const routes: Routes = [
  {path:'',component:ListArticulosComponent},
  {path:'add',component:EditarArticulosComponent},
  {path:'add/:id',component:EditarArticulosComponent},
  {path:'**',component:ListArticulosComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
