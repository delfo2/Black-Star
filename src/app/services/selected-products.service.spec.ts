import { TestBed } from '@angular/core/testing';

import { SelectedProductsService } from './selected-products.service';

describe('SelectedProductsService', () => {
  let service: SelectedProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
