import { TestBed, inject } from '@angular/core/testing';

import { EstadosInfoService } from './estados-info.service';

describe('EstadosInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstadosInfoService]
    });
  });

  it('should be created', inject([EstadosInfoService], (service: EstadosInfoService) => {
    expect(service).toBeTruthy();
  }));
});
