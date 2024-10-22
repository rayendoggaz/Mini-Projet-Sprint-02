import { Component, OnInit } from '@angular/core';
import { Concert } from '../model/concert.model';
import { AuthService } from '../services/auth.service';
import { ConcertService } from '../services/concert.service';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html'
})
export class ConcertsComponent implements OnInit {

    concerts? : Concert[]; //un tableau de concerts

  constructor(private concertService: ConcertService,
              public authService: AuthService) {
   //this.concerts=[];
     }

  ngOnInit(): void {

    this.chargerConcerts();
  }

  chargerConcerts(){
    this.concertService.listeConcert().subscribe(prods => {
      console.log(prods);
      this.concerts = prods;
      });
  }

supprimerConcert(p: Concert)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
  this.concertService.supprimerConcert(p.idConcert).subscribe(() => {
        console.log("concert supprimé");
        this.chargerConcerts();     
      
});
}
 
 

}
