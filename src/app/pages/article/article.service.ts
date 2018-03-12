import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ArticleService {

  constructor(private http: HttpClient) {
  }

  getComments(id) {
    return this.http.get( `https://jsonplaceholder.typicode.com/posts/${id}/comments` );
  }

  getArticle(id) {
    return this.http.get( `https://jsonplaceholder.typicode.com/posts/${id}` );
  }
}
