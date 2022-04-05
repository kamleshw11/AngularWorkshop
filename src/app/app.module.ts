import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './mycomponents/header/header.component';
import { FooterComponent } from './mycomponents/footer/footer.component';
import { MainComponent } from './mycomponents/main/main.component';
import { MovieListComponent } from './mycomponents/movie-list/movie-list.component';
import { ChoreListComponent } from './mycomponents/chore-list/chore-list.component';
import { ImageListComponent } from './mycomponents/image-list/image-list.component';
import { FavLinksComponent } from './mycomponents/fav-links/fav-links.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    MovieListComponent,
    ChoreListComponent,
    ImageListComponent,
    FavLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
