import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: 'inicio' , loadChildren: () => import('./componentes/flims/flims.module').then(m => m.FlimsModule)
   },
   { 
    path: 'personajes' , loadChildren: () => import('./componentes/personajes/personajes.module').then(m => m.PersonajesModule)
   },
  { path: '', redirectTo: 'inicio' , pathMatch: 'full' },
  { path: '**' , redirectTo: 'Inicio' , pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
