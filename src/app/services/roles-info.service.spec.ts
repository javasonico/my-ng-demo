import { TestBed, inject } from '@angular/core/testing';

import { RolesInfoService } from './roles-info.service';

describe('RolesInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RolesInfoService]
    });
  });

  it('should be created', inject([RolesInfoService], (service: RolesInfoService) => {
    expect(service).toBeTruthy();
  }));
});
