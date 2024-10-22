import { Component, OnInit } from '@angular/core';
import { Genre } from '../model/genre.model';
import { ConcertService } from '../services/concert.service';

@Component({
  selector: 'app-liste-genres',
  templateUrl: './liste-genres.component.html',
  styles: [
  ]
})
export class ListeGenresComponent implements OnInit {

  genres!: Genre[];

  ajout:boolean=true;


  updatedGen:Genre = {"idGen":0,"nomGen":""};

  
  constructor(private concertService: ConcertService) { }

  ngOnInit(): void {
    
    this.chargerGenres();
  }


  chargerGenres() {
    this.concertService.listeGenres().
      subscribe(gens => {this.genres = gens._embedded.genres;
      console.log(gens);
      });

  }

  genreUpdated(gen:Genre) {
    console.log("genégorie reçue du composant updateCAtegorie ",gen);
    this.concertService.ajouterGenre(gen).subscribe( ()=> this.chargerGenres());


  }

  updateGen(gen :Genre)
  {
    this.updatedGen = gen;
    this.ajout=false;
  }

}
