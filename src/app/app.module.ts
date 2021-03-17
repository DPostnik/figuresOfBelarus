import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FigurePageComponent } from './figure-page/figure-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from './shared/shared.module';
import { SearchFormComponent } from './home-page/search-form/search-form.component';
import { FigureInformationComponent } from './figure-page/figure-information/figure-information.component';
import { FigureNavBarComponent } from './figure-page/figure-nav-bar/figure-nav-bar.component';
import { FigureBiographyComponent } from './figure-page/figure-information/figure-biography/figure-biography.component';
import { FigureEducationComponent } from './figure-page/figure-information/figure-education/figure-education.component';
import { FigureQuotesComponent } from './figure-page/figure-information/figure-quotes/figure-quotes.component';
import { FigureAuthorsQuotesComponent } from './figure-page/figure-information/figure-authors-quotes/figure-authors-quotes.component';
import { FigureWorksComponent } from './figure-page/figure-information/figure-works/figure-works.component';
import { FigureReviewsComponent } from './figure-page/figure-information/figure-reviews/figure-reviews.component';
import { FigurePhotosComponent } from './figure-page/figure-information/figure-photos/figure-photos.component';
import { FigureChronologyComponent } from './figure-page/figure-information/figure-chronology/figure-chronology.component';
import { CardComponent } from './home-page/card/card.component';
import {AdminModule} from './admin/admin.module';
import {InfoService} from './shared/services/info.service';
import {PhotoService} from './shared/services/photo.service';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    FigurePageComponent,
    SearchFormComponent,
    FigureInformationComponent,
    FigureNavBarComponent,
    FigureBiographyComponent,
    FigureEducationComponent,
    FigureQuotesComponent,
    FigureAuthorsQuotesComponent,
    FigureWorksComponent,
    FigureReviewsComponent,
    FigurePhotosComponent,
    FigureChronologyComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    AdminModule
  ],
  providers: [InfoService, PhotoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
