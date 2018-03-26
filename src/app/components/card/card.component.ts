import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent   {

  @Input() article;
  @Input() isLink;
  constructor() { }

}
