import { TestBed } from '@angular/core/testing';

import { CarproductsService } from './carproducts.service';

describe('CarproductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarproductsService = TestBed.get(CarproductsService);
    expect(service).toBeTruthy();
  });
});
