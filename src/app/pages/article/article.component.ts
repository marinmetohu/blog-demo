import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArticleService } from './article.service';
import {Router} from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { assign, cloneDeep, find } from 'lodash';

import { MetaService } from '../../shared/meta-service.service';

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
              private articleService: ArticleService,
              private titleService: Title,
              private meta: Meta,
              private metaService: MetaService
            ) { }

  getComments(id) {
    this.articleService.getComments(id).subscribe(comments => this.comments = comments);
  }

  getArticle(id) {
    this.articleService.getArticle(id).subscribe(article => {

      this.article =  article;
      this.metaService.setTitle( this.article.title );
      this.metaService.setDescription(this.article.body);
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.getArticle(params.get('id') );
    });
  }
}
