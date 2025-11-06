import { TestBed } from '@angular/core/testing';

import { MachineryServices } from './machinery-services';

describe('MachineryServices', () => {
  let service: MachineryServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MachineryServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
