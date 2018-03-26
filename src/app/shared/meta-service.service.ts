import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable()
export class MetaService {

  constructor(private titleService: Title,
              private meta: Meta
            ) { }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  public setDescription ( desc: string = ' ') {
    const descObj = { name: 'description', content: desc };

    ( !!this.meta.getTag('name=description') ) ? this.meta.updateTag(descObj) : this.meta.addTag(descObj);
  }
}
