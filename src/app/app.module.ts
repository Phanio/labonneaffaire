import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ArticleComponent } from "./article/article.component";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { routes } from "./app.routes";
import { FormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";

@NgModule({
    imports: [CommonModule, routes, FormsModule, BrowserModule],
    bootstrap: [AppComponent]
})

export class AppModule { }