import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FigurePageComponent} from '../figure-page.component';
import {FigureBiographyComponent} from '../figure-information/figure-biography/figure-biography.component';
import {FigurePhotosComponent} from '../figure-information/figure-photos/figure-photos.component';
import {FigureReviewsComponent} from '../figure-information/figure-reviews/figure-reviews.component';
import {FigureWorksComponent} from '../figure-information/figure-works/figure-works.component';
import {FigureAuthorsQuotesComponent} from '../figure-information/figure-authors-quotes/figure-authors-quotes.component';
import {FigureQuotesComponent} from '../figure-information/figure-quotes/figure-quotes.component';
import {FigureEducationComponent} from '../figure-information/figure-education/figure-education.component';
import {FigureChronologyComponent} from '../figure-information/figure-chronology/figure-chronology.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: FigurePageComponent, children: [
          { path: '', redirectTo: '/figure/biography/:id', pathMatch: 'full'},
          { path: 'biography/:id', component: FigureBiographyComponent},
          { path: 'chronology/:id', component: FigureChronologyComponent},
          { path: 'education/:id', component: FigureEducationComponent},
          { path: 'quotes/:id', component: FigureQuotesComponent},
          { path: 'authorsQuotes/:id', component: FigureAuthorsQuotesComponent},
          { path: 'works/:id', component: FigureWorksComponent},
          { path: 'reviews/:id', component: FigureReviewsComponent},
          { path: 'photos/:id', component: FigurePhotosComponent}
        ]
      }
    ])
  ]
})
export class FigureModule { }
