import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {BaseUrlService} from "./base-url.service";

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  constructor(private http: HttpClient, private baseUrlService: BaseUrlService) { }

  httpOptions = {
    headers: new HttpHeaders(
        {
          'Content-type': 'application/json'
        }
    )
  };

  getAllAccounts(): Observable<any>{
    const url = '/All';
    return this.http.get(this.baseUrlService.getURL() + url).pipe(
        map((response: any) => {return response}),
        catchError((error: any) => {return throwError(error);
        })
    )
  }

  getOneAccount(id: number): Observable<any>{
    const url = '/one/${id}';
    return this.http.get(this.baseUrlService.getURL() + url).pipe(
        map((response: any) => {return response;}),
        catchError((error: any) => {return throwError(error)})
    )
  }
}
