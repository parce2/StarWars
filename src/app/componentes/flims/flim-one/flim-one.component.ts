import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarwarsService } from '../../../services/starwars.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-flim-one',
  templateUrl: './flim-one.component.html',
  styleUrls: ['./flim-one.component.css']
})
export class FlimOneComponent implements OnInit {


  flim : any= [];

  personajes :any[]= [] ;
  constructor(private router: ActivatedRoute, private Star: StarwarsService, private  http: HttpClient) {

   }


  ngOnInit(): void {

    this.router.params.subscribe(data=>{
      this.Star.getflim(data['id']).subscribe((datae: any) => {
          this.flim = datae;

          this.flim['characters'].forEach(element => {

            this.http.get(element).subscribe(info => {
              this.personajes.push(info);
                console.log(info);
            });


          });
      });
    });

}
}
