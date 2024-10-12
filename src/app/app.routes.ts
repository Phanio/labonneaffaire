import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeArticleComponent } from './liste-article/liste-article.component';
import { DetailsArticleComponent } from './details-article/details-article.component';
import { PageNotFoudComponentComponent } from './page-not-foud-component/page-not-foud-component.component';
import { AjouerArticleComponent } from './ajouer-article/ajouer-article.component';

export const routes: Routes = [
    {
        path: "", component: ListeArticleComponent
    }
    , {
        path: "details/:id", component: DetailsArticleComponent
    },
    {
        path: "liste", redirectTo: ""
    },
    {
        path: "ajouter", component: AjouerArticleComponent
    },
    {
        path: "**", component: PageNotFoudComponentComponent
    }
];
