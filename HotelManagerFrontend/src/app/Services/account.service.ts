import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {BaseUrlService} from "./base-url.service";
import {account} from "../DataObjects/account";

@Injectable({
    providedIn: 'root'
})
export class AccountService {

    constructor(private http: HttpClient, public baseUrlService: BaseUrlService) {
    }

    public getAllAccounts(): Observable<account[]> {
        const url = this.baseUrlService.getURL() + 'Accounts/All';
        return this.http.get<account[]>(url)
    }

    public getOneAccount(id: number): Observable<account> {
        const url = this.baseUrlService.getURL() + 'Accounts/One/' + id;
        console.log(url)
        return this.http.get<account>(url).pipe(
            catchError((error: any) => {
                    return throwError(error)
                }
            ));
    }

    public postAccount(account: account): Observable<any> {
        const url = this.baseUrlService.getURL() + 'Account';
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json');
        return this.http.post(url, account, {headers});
    }

    deleteAccount(id: number) {
        const url = this.baseUrlService.getURL() + 'Account/' + id;
        return this.http.delete(url)
    }
}
