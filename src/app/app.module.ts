import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FlimsModule } from './componentes/flims/flims.module';
import { HttpClientModule } from '@angular/common/http';

import { PersonajesModule } from './componentes/personajes/personajes.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlimsModule,
    HttpClientModule,
    PersonajesModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
