import { Component, OnInit } from '@angular/core';
import { ArticleComponent } from './article/article.component';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';
import { TypeArticle } from './type';
import { RouterOutlet } from '@angular/router';
import { ListeArticleComponent } from './liste-article/liste-article.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  providers: [DataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'labonneaffaire';


  constructor() {

  }
  ngOnInit(): void {
    console.log("ng ngOnInit");
  }

}
