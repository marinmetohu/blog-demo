import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomMaterialModule } from './shared/material.module';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FancyImageUploaderModule } from 'ng2-fancy-image-uploader';
import { HttpClientModule } from '@angular/common/http';

/* imports */
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';

/* providers */
import { PostsService } from './pages/posts/posts.service';
import { ArticleService } from './pages/article/article.service';
import { MetaService } from './shared/meta-service.service';

/* declarations */
import { AppComponent } from './app.component';
import { PostsComponent } from './pages/posts/posts.component';
import { ArticleComponent } from './pages/article/article.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { InputErrorMsgComponent } from './components/input-error-msg/input-error-msg.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    ArticleComponent,
    SearchInputComponent,
    InputErrorMsgComponent,
    CommentsComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FormsModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    FancyImageUploaderModule,
    HttpClientModule,
    LazyLoadImageModule
  ],
  providers: [
    PostsService,
    ArticleService,
    MetaService
  ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
