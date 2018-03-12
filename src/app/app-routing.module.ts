import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './pages/posts/posts.component';
import { ArticleComponent } from './pages/article/article.component';


const routes: Routes = [
  { path: 'posts', component: PostsComponent, data: { state: 'posts'} },
  { path: 'article/:id', component: ArticleComponent, data: { state: 'article'} },
  { path: '', redirectTo: '/posts', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
