import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {

  textAltImg: string = "Titre de alternative de l'image";
  urlImg: string = "https://via.placeholder.com/400x250";
  totalNbrLike: number = 0;
  comment: string = "Ceci est un commentaire";
  jaime: boolean = true;

  @Input() dispo: boolean = false;
  @Input() titreArticle: string = "";
  @Input() prixArticle: number = 0;
  @Input() idArticle: number = 0;
  @Output() info = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void { }

  onLike(): void {
    if (this.jaime) {
      this.totalNbrLike++;
      this.jaime = false;
    } else {
      this.totalNbrLike--;
      this.jaime = true;
    }
    this.info.emit(this.titreArticle);
  }

  getColor(): string {
    if (this.dispo) {
      return "green";
    }
    return "red";
  }
}
