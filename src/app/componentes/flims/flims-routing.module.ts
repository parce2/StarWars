import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlimListComponent } from './flim-list/flim-list.component';
import { FlimOneComponent } from './flim-one/flim-one.component';

const routes: Routes = [
  {path: '', component: FlimListComponent },
  {path: ':id', component: FlimOneComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlimsRoutingModule { }
