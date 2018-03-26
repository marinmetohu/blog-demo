import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { MetaService } from '../../shared/meta-service.service';
import { pull, map, find, each } from 'lodash';
import {PageEvent} from '@angular/material';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

const metaTags = {
  title: 'Latest Articles',
  description: 'latest articles here'
};

export class PostsComponent implements OnInit {
  postsList;
  postsListDisplay;

  // MatPaginator Inputs
  length: number;
  pageSize: number;
  pageSizeOptions: Array<number> = [25, 45, 75, 100];

  constructor(private postsService: PostsService,
              private metaService: MetaService) { }

  ngOnInit() {
    this.pageSize = 25;
    this.postsService.postsList.subscribe(postsList => {

      this.postsList = postsList;
      this.length = this.postsList.length;

      this.updatePostsListDisplay();
    });

    this.metaService.setTitle(metaTags.title);
    this.metaService.setDescription(metaTags.description);
  }

  searchEvent($searchArray): void {
    each( this.postsList, (el) => {
      /** set display to true/false depending on find() result */
      el.display = find($searchArray, el);
    });
  }

  updatePostsListDisplay(pageIndex = 0 ): void {
    /** define how many posts to show */
    const step = pageIndex * this.pageSize;
    this.postsListDisplay = this.postsList.slice( step, step + this.pageSize );
  }

  onPaginationChange(pageEvent: PageEvent): void {
      this.pageSize =  pageEvent.pageSize;
      this.updatePostsListDisplay(pageEvent.pageIndex);
  }
}
