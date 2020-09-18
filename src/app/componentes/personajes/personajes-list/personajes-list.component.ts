import { Component,  OnInit } from '@angular/core';

import { StarwarsService } from '../../../services/starwars.service';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-personajes-list',
  templateUrl: './personajes-list.component.html',
  styleUrls: ['./personajes-list.component.css']
})
export class PersonajesListComponent implements OnInit {


  allpersona: any [] = [];

  textobuscar ="";

  constructor(private star: StarwarsService, private http: HttpClient) { 

  }
 
  ngOnInit(): void {

    forkJoin( this.star.getdatos('films'), this.star.getdatos('people')).subscribe((data: any)=> {

      this.allpersona = data[1].results;
 
      console.log(data);
    });
   }

   buscar(event){
     this.textobuscar= event;
   }


} 
 

