import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Genre } from '../model/genre.model';
import { Concert } from '../model/concert.model';
import { ConcertService } from '../services/concert.service';

@Component({
  selector: 'app-update-concert',
  templateUrl: './update-concert.component.html',
  styles: [
  ]
})
export class UpdateConcertComponent implements OnInit {

  currentConcert = new Concert();
  genres! : Genre[];
  updatedGenId! : number;
  
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private concertService: ConcertService) { }

  ngOnInit(): void {
    this.concertService.listeGenres().
    subscribe(gens => {this.genres = gens._embedded.genres;
    console.log(gens);
    });


    this.concertService.consulterConcert(this.activatedRoute.snapshot.params['id']).
    subscribe( prod =>{ this.currentConcert = prod; 
      this.updatedGenId =   this.currentConcert.genre.idGen;
    
    } ) ;
    }
    

  

  updateConcert() {
    this.currentConcert.genre = this.genres.find(gen => gen.idGen == this.updatedGenId)!;
         this.concertService.updateConcert(this.currentConcert).subscribe(prod => {
      this.router.navigate(['concerts']); }
      );
  }

}
