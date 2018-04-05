import { TestBed, inject } from '@angular/core/testing';

import { IdiomasInfoService } from './idiomas-info.service';

describe('IdiomasInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IdiomasInfoService]
    });
  });

  it('should be created', inject([IdiomasInfoService], (service: IdiomasInfoService) => {
    expect(service).toBeTruthy();
  }));
});
