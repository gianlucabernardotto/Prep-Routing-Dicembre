import { TestBed } from '@angular/core/testing';

import { FoodfactsService } from './foodfacts.service';

describe('FoodfactsService', () => {
  let service: FoodfactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodfactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
