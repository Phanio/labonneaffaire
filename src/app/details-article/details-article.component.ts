import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details-article',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './details-article.component.html',
  styleUrl: './details-article.component.css'
})
export class DetailsArticleComponent implements OnInit {


  titreArticle: string = "";
  prixArticle: number = 0;
  idArticle: number = 0;
  urlImg: string = "";

  constructor(private route: ActivatedRoute, private dataService: DataService) {

  }

  ngOnInit(): void {
    this.idArticle = parseInt(this.route.snapshot.params["id"]);
    const article = this.dataService.getArticle(this.idArticle);
    this.prixArticle = article?.prixArticle ?? 0;
    this.titreArticle = article?.titreArticle ?? "";
    this.urlImg = article?.urlImg ?? "";
  }
}
