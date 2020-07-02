import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CommentFormPageComponent } from './pages/comment-form-page/comment-form-page.component';
import { CommentListPageComponent } from './pages/comment-list-page/comment-list-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'commentform/:id', component: CommentFormPageComponent },
  { path: 'commentlist/:id', component: CommentListPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
