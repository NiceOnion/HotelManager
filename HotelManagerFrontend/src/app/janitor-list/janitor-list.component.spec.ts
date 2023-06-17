import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JanitorListComponent } from './janitor-list.component';

describe('JanitorListComponent', () => {
  let component: JanitorListComponent;
  let fixture: ComponentFixture<JanitorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JanitorListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JanitorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
