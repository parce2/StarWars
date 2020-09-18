import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlimsRoutingModule } from './flims-routing.module';
import { FlimListComponent } from './flim-list/flim-list.component';
import { FlimOneComponent } from './flim-one/flim-one.component';


@NgModule({
  declarations: [FlimListComponent, FlimOneComponent],
  imports: [
    CommonModule,
    FlimsRoutingModule
  ]
})
export class FlimsModule { }
