import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArticleService } from './article.service';
import {Router} from '@angular/router';

import { assign, cloneDeep, find } from 'lodash';

import { Post } from '../../interfaces';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article: any;
  comments: any;

  constructor(private route: ActivatedRoute,
              private articleService: ArticleService
            ) { }

  getComments(id) {
    this.articleService.getComments(id).subscribe(comments => this.comments = comments);
  }

  getArticle(id) {
    this.articleService.getArticle(id).subscribe(article => {

      /**
       * get the article by id
       */
      this.article =  article;
      /**
       * load comments after loading the article
       */
      this.getComments(id);
    });
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.getArticle(params.get('id') );
    });
  }
}
