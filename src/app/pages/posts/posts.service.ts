import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../interfaces';
import { assign, find, forEach, pull, map, values } from 'lodash';

@Injectable()
export class PostsService {
  private configUrl = 'https://jsonplaceholder.typicode.com/posts';
  private data: any;
  private messageSource = new BehaviorSubject<Array<Post>>([]);
  postsList = this.messageSource.asObservable();

  constructor(private http: HttpClient) {
    this.updatePosts();
  }

  loadPosts() {
    return this.http.get(this.configUrl);
  }

  updatePosts() {
    this.loadPosts().subscribe( resp => {
      this.data = resp;
      this.data = map(this.data, post => assign(post, {display: true}) );
      this.messageSource.next( this.data  );
    });
  }
}
