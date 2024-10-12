import { Injectable } from '@angular/core';
import { TypeArticle } from './type';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  listeArticles: TypeArticle[] = [
    {
      id: 1,
      titreArticle: "Vélo",
      prixArticle: 80,
      urlImg: "https://via.placeholder.com/400x250",
      textAltImg: "Descrition vélo",
      dispo: false,
    },
    {
      id: 2,
      titreArticle: "Voiture",
      prixArticle: 450,
      urlImg: "https://via.placeholder.com/400x250",
      textAltImg: "Voiture",
      dispo: true,
    },
    {
      id: 3,
      titreArticle: "Camihon",
      prixArticle: 8000,
      urlImg: "https://via.placeholder.com/400x250",
      textAltImg: "Camihon",
      dispo: false,
    },
    {
      id: 4,
      titreArticle: "Radio",
      prixArticle: 40,
      urlImg: "https://via.placeholder.com/400x250",
      textAltImg: "Radio",
      dispo: true,
    },
  ];
  constructor() { }

  getArticle(id: number): TypeArticle | undefined {
    return this.listeArticles?.find(({ id: idArticle }) => id === idArticle);
  }
}
