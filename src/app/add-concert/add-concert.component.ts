import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genre } from '../model/genre.model';
import { Concert } from '../model/concert.model';
import { ConcertService } from '../services/concert.service';

@Component({
  selector: 'app-add-concert',
  templateUrl: './add-concert.component.html'
})
export class AddConcertComponent implements OnInit {

  newConcert = new Concert();
  genres! : Genre[];
  newIdGen! : number;
  newGenre! : Genre;
  
  constructor(private concertService: ConcertService,
              private router : Router) { }

  ngOnInit(): void {

    this.concertService.listeGenres().
          subscribe(gens => {this.genres = gens._embedded.genres;
            console.log(gens);
        });
 
  }

 
  addConcert(){
    this.newConcert.genre = this.genres.find(gen => gen.idGen == this.newIdGen)!;
    this.concertService.ajouterConcert(this.newConcert)
                      .subscribe(prod => {
                      console.log(prod);
                      this.router.navigate(['concerts']);
                      }); 
    }




}
