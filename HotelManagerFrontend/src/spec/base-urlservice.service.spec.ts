import { TestBed } from '@angular/core/testing';

import { BaseUrlService } from '../app/Services/base-url.service';

describe('BaseURLServiceService', () => {
  let service: BaseUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
