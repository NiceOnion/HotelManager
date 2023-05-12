import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import { AccountService } from './account.service';
import {account} from "../DataObjects/Accounts";

describe('AccountServiceService', () => {
  let service: AccountService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AccountService]
    });
    service = TestBed.inject(AccountService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  afterEach(() => {
    httpMock.verify();
  })

  it('should return a list of accounts', () => {
    const mockAccounts = [
      {id: 1, password: '1', role: '', username: 'Account 1'},
      {id: 2, password: '2', role: '', username: 'Account 2'},
      {id: 3, password: '3', role: '', username: 'Account 3'},
    ];
    service.getAllAccounts().subscribe(accounts => {
      expect(accounts.length).toBe(3);
      expect(accounts).toEqual(mockAccounts);
    });

    const request = httpMock.expectOne('${service.aseUrlService.getURL()}/Accounts/All');
    expect(request.request.method).toBe('GET');
    request.flush(mockAccounts);
  });
});
