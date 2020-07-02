import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TwitPageComponent } from './pages/twit-page/twit-page.component';
import { TwitListCardComponent } from './components/twit-list-card/twit-list-card.component';
import { TweetInputComponent } from './components/tweet-input/tweet-input.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchInputComponent } from './components/atoms/search-input/search-input.component';
import { ImagesCardComponent } from './components/images-card/images-card.component';
import { SideBarCardComponent } from './components/side-bar-card/side-bar-card.component';


@NgModule({
  declarations: [AppComponent, HomePageComponent, TwitPageComponent, TwitListCardComponent, TweetInputComponent, NavbarComponent, SearchInputComponent,ImagesCardComponent, SideBarCardComponent,],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
