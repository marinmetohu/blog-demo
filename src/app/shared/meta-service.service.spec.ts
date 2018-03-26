import { TestBed, inject } from '@angular/core/testing';

import { MetaServiceService } from './meta-service.service';

describe('MetaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MetaServiceService]
    });
  });

  it('should be created', inject([MetaServiceService], (service: MetaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
