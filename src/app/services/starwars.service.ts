import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



//PRUEBA

import {ajax} from 'rxjs/ajax';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor(private http: HttpClient) { }

 /*   Query(query: string){
      return this.http.get(`https://swapi.dev/api/${query}`).pipe(map((data: any ) =>  {
       return data.results;
      }));
    }

  Getflims(){
   return this.Query('films');
  }


 getpersonajes(){
      return this.Query('people');
 }*/

 getdatos(url: string):any{
          const gh= ajax.getJSON("https://swapi.dev/api/"+ url);
          const  data = new Observable(ob => {
            gh.subscribe( (res) => {
            ob.next(res);
             ob.complete();
              },
               (error) => {
                ob.error(error);
                 }
              );
          });
      return data;
 }


getflim(url:string){
    return this.http.get(url);
}

}
