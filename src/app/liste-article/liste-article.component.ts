import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { TypeArticle } from '../type';
import { ArticleComponent } from '../article/article.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-liste-article',
  standalone: true,
  imports: [ArticleComponent, CommonModule, FormsModule],
  templateUrl: './liste-article.component.html',
  styleUrl: './liste-article.component.css'
})
export class ListeArticleComponent implements OnInit {

  prix1: number = 23;
  prix2: number = 200;
  prix3: number = 230;
  message: string = "";
  liste: TypeArticle[] | undefined;


  constructor(private dataService: DataService) {

  }
  ngOnInit(): void {
    console.log("ng ngOnInit");
    this.liste = this.dataService.listeArticles;
  }

  onAffiche(arg: string) {
    return this.message = "Merci d'avoir voté pour l'article: " + arg;
  }
}
