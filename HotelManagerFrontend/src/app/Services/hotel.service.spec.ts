import { TestBed } from '@angular/core/testing';

import { HotelService } from './hotel.service';
import {HttpClientModule} from "@angular/common/http";

describe('HotelService', () => {
  let service: HotelService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(HotelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
