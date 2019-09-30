import { TestBed } from '@angular/core/testing';

import { GuantesService } from './guantes.service';

describe('GuantesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuantesService = TestBed.get(GuantesService);
    expect(service).toBeTruthy();
  });
});
