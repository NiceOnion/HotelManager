import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelNewComponent } from './hotel-new.component';

describe('HotelNewComponent', () => {
  let component: HotelNewComponent;
  let fixture: ComponentFixture<HotelNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
