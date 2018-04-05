import { TestBed, inject } from '@angular/core/testing';

import { UsuariosInfoService } from './usuarios-info.service';

describe('UsuariosInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsuariosInfoService]
    });
  });

  it('should be created', inject([UsuariosInfoService], (service: UsuariosInfoService) => {
    expect(service).toBeTruthy();
  }));
});
