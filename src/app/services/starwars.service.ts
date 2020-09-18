import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {map} from 'rxjs/operators';

//PRUEBA

import {ajax} from 'rxjs/ajax';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor(private http: HttpClient) { }

 getdatos(url: string):any{
  return this.http.get(`https://swapi.dev/api/${url}`).pipe(map((data: any ) =>  {
    return data;
  }));
 }


getflim(url:string){
    return this.http.get(url);
}

}
