import { Component, OnInit, SimpleChange, Input, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../interfaces';
import { forEach } from 'lodash';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  searchForm: FormGroup;
  searchTypes: Array<string> = ['both', 'first only', 'last only'];
  searchType: string;

  @Input('userList') postsList;
  @Input() customPlaceholder = 'Search';
  @Output() searchUsers = new EventEmitter<Array<Post>>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      searchString: ['', [Validators.required, Validators.email, Validators.maxLength(50) ]]
    });
    this.searchType = this.searchTypes[0];
  }
  onSubmit({ value, valid }: { value: any, valid: boolean }) {

    const matchArray = [];
    forEach(this.postsList, (post) => {
        const matchstr = new RegExp(value.searchString.toLowerCase());
        const title = post.title.toLowerCase();

        if ( matchstr.test(title) ) matchArray.push(post);
    });

    this.searchUsers.emit(matchArray);
  }
}
