import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm , FormControl} from '@angular/forms';

@Component({
  selector: 'app-ajouer-article',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ajouer-article.component.html',
  styleUrl: './ajouer-article.component.css'
})
export class AjouerArticleComponent implements OnInit {
  titreArticle = new FormControl('');
  prixArticle = new FormControl(0);

  constructor() {

  }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm): void {
    console.log(this.prixArticle.value);
    console.log(this.titreArticle.value);

  }

}
