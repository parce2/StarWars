import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajesRoutingModule } from './personajes-routing.module';
import { PersonajesListComponent } from './personajes-list/personajes-list.component';
import { FilterPipe } from '../../pipes/filter.pipe';



@NgModule({
  declarations: [PersonajesListComponent, FilterPipe ],
  imports: [
    CommonModule,
    PersonajesRoutingModule,
  
  
  ]
})
export class PersonajesModule { }
