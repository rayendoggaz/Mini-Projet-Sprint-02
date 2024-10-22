import { Genre } from "./genre.model";

export class Concert {
    idConcert! : number;
    nomConcert! : string;
    prixConcert! : number;
    dateCreation! : Date ;
    genre! : Genre;
    }