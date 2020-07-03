import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { NavbarComponent } from './components/organism/navbar/navbar.component';
import { SideBarComponent } from './components/organism/side-bar/side-bar.component';
import { TwitListCardComponent } from './components/organism/twit-list-card/twit-list-card.component';

import { TweetInputComponent } from './components/molecule/tweet-input/tweet-input.component';
import { SearchInputComponent } from './components/molecule/search-input/search-input.component';

import { CardItemUserComponent } from './components/atoms/card-item-user/card-item-user.component';
import { CardItemHashtagsComponent } from './components/atoms/card-item-hashtags/card-item-hashtags.component';

import { ImagesCardComponent } from './components/molecule/images-card/images-card.component';
import { HashtagsCardComponent } from './components/molecule/hashtags-card/hashtags-card.component';
import { FollowCardComponent } from './components/molecule/follow-card/follow-card.component';
import { CommentFormPageComponent } from './pages/comment-form-page/comment-form-page.component';
import { CommentListPageComponent } from './pages/comment-list-page/comment-list-page.component';
import { CommentFormComponent } from './components/molecule/comment-form/comment-form.component';
import { CommentListComponent } from './components/molecule/comment-list/comment-list.component';



@NgModule({
  declarations: [AppComponent, HomePageComponent,TwitListCardComponent, TweetInputComponent, NavbarComponent, SearchInputComponent,ImagesCardComponent,CardItemUserComponent, CardItemHashtagsComponent,HashtagsCardComponent, SideBarComponent, FollowCardComponent, CommentFormPageComponent, CommentListPageComponent, CommentFormComponent, CommentListComponent,],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
