import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {BaseUrlService} from "./base-url.service";
import { account } from "../DataObjects/Accounts";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient, private baseUrlService: BaseUrlService) { }

  httpOptions = {
    headers: new HttpHeaders(
        {
          'Content-type': 'application/json'
        }
    )
  };

  public getAllAccounts(): Observable<any>{
    const url = this.baseUrlService.getURL() + '/Accounts/All';
    return this.http.get<account[]>(url)

        /*.pipe(
        map((response: any) => {return response}),
        catchError((error: any) => {return throwError(error);
        })
    )*/
  }

  public getOneAccount(id: number): Observable<account>{
    const url = '/Accounts/one/${id}';
    return this.http.get(this.baseUrlService.getURL() + url).pipe(
        map((response: any) => {return response;}),
        catchError((error: any) => {return throwError(error)})
    )
  }
}
