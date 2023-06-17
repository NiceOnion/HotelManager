import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JanitorNewComponent } from './janitor-new.component';

describe('JanitorNewComponent', () => {
  let component: JanitorNewComponent;
  let fixture: ComponentFixture<JanitorNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JanitorNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JanitorNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
