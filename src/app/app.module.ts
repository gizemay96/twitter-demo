import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TwitPageComponent } from './pages/twit-page/twit-page.component';
import { TwitListCardComponent } from './components/organism/twit-list-card/twit-list-card.component';
import { TweetInputComponent } from './components/molecule/tweet-input/tweet-input.component';
import { NavbarComponent } from './components/organism/navbar/navbar.component';
import { SearchInputComponent } from './components/molecule/search-input/search-input.component';
import { ImagesCardComponent } from './components/molecule/images-card/images-card.component';
import { SideBarCardComponent } from './components/atoms/side-bar-card/side-bar-card.component';
import { CardItemUserComponent } from './components/atoms/card-item-user/card-item-user.component';
import { CardItemHashtagsComponent } from './components/atoms/card-item-hashtags/card-item-hashtags.component';
import { FollowCardComponent } from './components/molecule/follow-card/follow-card.component';
import { HashtagsCardComponent } from './components/molecule/hashtags-card/hashtags-card.component';
import { SideBarComponent } from './components/organism/side-bar/side-bar.component';


@NgModule({
  declarations: [AppComponent, HomePageComponent, TwitPageComponent, TwitListCardComponent, TweetInputComponent, NavbarComponent, SearchInputComponent,ImagesCardComponent, SideBarCardComponent, CardItemUserComponent, CardItemHashtagsComponent, FollowCardComponent, HashtagsCardComponent, SideBarComponent,],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
