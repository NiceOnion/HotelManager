import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {BaseUrlService} from "./base-url.service";
import { account } from "../DataObjects/Accounts";
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient, public baseUrlService: BaseUrlService, public route: ActivatedRoute) { }

  httpOptions = {
    headers: new HttpHeaders(
        {
          'Content-type': 'application/json'
        }
    )
  };

  public getAllAccounts(): Observable<account[]>{
    const url = this.baseUrlService.getURL() + '/Accounts/All';
    return this.http.get<account[]>(url)
  }

  public getOneAccount(id: Number): Observable<account>{
    const url = this.baseUrlService.getURL() + '/Accounts/One/' + this.route.snapshot.paramMap.get('id');
    return this.http.get<account>(url).pipe(
        catchError((error: any) =>
        {return throwError(error)}
    ));
  }
}
