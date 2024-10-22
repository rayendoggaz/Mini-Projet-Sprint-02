import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddConcertComponent } from './add-concert/add-concert.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ListeGenresComponent } from './liste-genres/liste-genres.component';
import { LoginComponent } from './login/login.component';
import { ConcertGuard } from './concert.guard';
import { ConcertsComponent } from './concerts/concerts.component';
import { RechercheParGenreComponent } from './recherche-par-genre/recherche-par-genre.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { UpdateConcertComponent } from './update-concert/update-concert.component';



const routes: Routes = [
  {path: "concerts", component : ConcertsComponent},
  {path: "add-concert", component : AddConcertComponent, canActivate:[ConcertGuard]},
  {path: "updateConcert/:id", component: UpdateConcertComponent},
  {path: "rechercheParGenre", component : RechercheParGenreComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "listeGenres", component : ListeGenresComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: "", redirectTo: "concerts", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
