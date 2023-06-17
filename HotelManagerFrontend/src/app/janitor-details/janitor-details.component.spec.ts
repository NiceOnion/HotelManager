import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JanitorDetailsComponent } from './janitor-details.component';

describe('JanitorDetailsComponent', () => {
  let component: JanitorDetailsComponent;
  let fixture: ComponentFixture<JanitorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JanitorDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JanitorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
