import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AccountNewComponent } from './account-new.component';

describe('AccountNewComponent', () => {
  let component: AccountNewComponent;
  let fixture: ComponentFixture<AccountNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountNewComponent],
      imports: [FormsModule, HttpClientTestingModule], // Add FormsModule here
    }).compileComponents();

    fixture = TestBed.createComponent(AccountNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
