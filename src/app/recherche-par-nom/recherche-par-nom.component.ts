import { Component, OnInit } from '@angular/core';
import { Concert } from '../model/concert.model';
import { ConcertService } from '../services/concert.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit {

  nomConcert! : string;
  concerts!: Concert[];
  allConcerts!: Concert[];
  searchTerm!: string;
  
  constructor(private concertService : ConcertService) { }

  ngOnInit(): void {
    this.concertService.listeConcert().subscribe(prods => {
      console.log(prods);
      this.concerts = prods;
      });
      
  }

  rechercherProds(){
    this.concertService.rechercherParNom(this.nomConcert).
    subscribe(prods => {
      console.log(prods);
      this.concerts=prods;});
  }

  onKeyUp(filterText : string){
    this.concerts = this.allConcerts.filter(item =>
    item.nomConcert.toLowerCase().includes(filterText));
    }
    

}
