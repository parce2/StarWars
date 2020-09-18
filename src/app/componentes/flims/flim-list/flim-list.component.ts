import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../../../services/starwars.service';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flim-list',
  templateUrl: './flim-list.component.html',
  styleUrls: ['./flim-list.component.css']
})
export class FlimListComponent implements OnInit {
    flims: any[] = [];
    
  constructor(private starservice: StarwarsService , private http: HttpClient, private router: Router) {

   }
   ngOnInit(): void {
         forkJoin( this.starservice.getdatos('films'), this.starservice.getdatos('people')).subscribe((data: any)=> {

          this.flims = data[0].results;
          console.log(data);

        });

  }

verflim(dato: string){
    console.log(dato['url']);
    this.router.navigate(['inicio', dato['url']]);
  }

}
