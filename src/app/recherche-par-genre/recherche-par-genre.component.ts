import { Component, OnInit } from '@angular/core';
import { Genre } from '../model/genre.model';
import { Concert } from '../model/concert.model';
import { ConcertsComponent } from '../concerts/concerts.component';
import { ConcertService } from '../services/concert.service';

@Component({
  selector: 'app-recherche-par-genre',
  templateUrl: './recherche-par-genre.component.html',
  styles: [
  ]
})
export class RechercheParGenreComponent implements OnInit {
  IdGenre! : number;
  genres! : Genre[];
  concerts! : Concert[];


  constructor(private concertService : ConcertService) { }

  ngOnInit(): void {
    this.concertService.listeGenres().
      subscribe(gens => {this.genres = gens._embedded.genres;
      console.log(gens);
    });

  }

  onChange() {
    this.concertService.rechercherParGenre(this.IdGenre).
      subscribe(prods =>{this.concerts=prods});

    }

}
