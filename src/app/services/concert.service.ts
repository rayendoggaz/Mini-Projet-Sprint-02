import { Injectable } from '@angular/core';
import { Genre } from '../model/genre.model';
import { Concert } from '../model/concert.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GenreWrapper } from '../model/genreWrapped.model';
import { AuthService } from './auth.service';
import { apiURL } from '../config';

const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'appligenion/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class ConcertService {
  
 
  apiURLGen: string = 'http://localhost:8080/concerts/gen';

  concerts! : Concert[]; //un tableau de concerts
  //genres : Genre[];
 

  constructor(private http : HttpClient,
              private authService : AuthService) { 
    
    /* this.genres = [
      {idGen : 1, nomGen : "PC"},
      {idGen : 2, nomGen : "Imprimante"}
    ]; */
  /*  this.concerts = [{idConcert : 1, nomConcert : "PC Asus", prixConcert : 3000.600, dateCreation : new Date("01/14/2011"),
                      genre : {idGen : 1, nomGen : "PC"} },
                     {idConcert : 2, nomConcert : "Imprimante Epson", prixConcert : 450, dateCreation : new Date("12/17/2010"),
                    genre :  {idGen : 2, nomGen : "Imprimante"}},
                     {idConcert : 3, nomConcert :"Tablette Samsung", prixConcert : 900.123, dateCreation : new Date("02/20/2020"), 
                     genre : {idGen : 1, nomGen : "PC"}}
                    ];
                    */
    
  }

  listeConcert(): Observable<Concert[]>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
   
     return this.http.get<Concert[]>(apiURL+"/all",{headers:httpHeaders});

    }

    ajouterConcert( prod: Concert):Observable<Concert>{
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
        return this.http.post<Concert>(apiURL+"/addprod", prod, {headers:httpHeaders});
      }
     
      
   
  supprimerConcert(id : number) {
       const url = `${apiURL}/delprod/${id}`;
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
          return this.http.delete(url,  {headers:httpHeaders});
        }
      
   consulterConcert(id: number): Observable<Concert> {
          const url = `${apiURL}/getbyid/${id}`;
          console.log(url);
          let jwt = this.authService.getToken();
          jwt = "Bearer "+jwt;
          let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
            return this.http.get<Concert>(url,{headers:httpHeaders});
          }
  
    updateConcert(prod :Concert) : Observable<Concert>    {
       console.log("prooooooooooood "+prod);
        console.log(prod.genre);
          let jwt = this.authService.getToken();
          jwt = "Bearer "+jwt;
          let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
            return this.http.put<Concert>(apiURL+"/updateprod", prod, {headers:httpHeaders});
          }
  

         
       listeGenres():Observable<GenreWrapper>{
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt})
        return  this.http.get<GenreWrapper>(this.apiURLGen,{headers:httpHeaders});
        
            }     

       rechercherParGenre(idGen: number): Observable<Concert[]> {
          const url = `${apiURL}/prodsgen/${idGen}`;
          return this.http.get<Concert[]>(url);
         } 

  rechercherParNom(nom: string):Observable< Concert[]> {
    const url = `${apiURL}/prodsByName/${nom}`;
    return this.http.get<Concert[]>(url);
    }

    ajouterGenre( gen: Genre):Observable<Genre>{
      return this.http.post<Genre>(this.apiURLGen, gen, httpOptions);
      }
      

 
}
