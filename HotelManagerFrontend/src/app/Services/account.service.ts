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

    header: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
    })
    constructor(private http: HttpClient, public baseUrlService: BaseUrlService) {
    }


    public getAllAccounts(): Observable<account[]> {
        const url = this.baseUrlService.getURL() + 'Account/All';
        return this.http.get<account[]>(url)
    }

    public getOneAccount(id: number): Observable<account> {
        const url = this.baseUrlService.getURL() + 'Account/One/' + id;
        console.log(url)
        return this.http.get<account>(url).pipe(
            catchError((error: any) => {
                    return throwError(error)
                }
            ));
    }

    public postAccount(account: account): Observable<any> {
        console.log("You have called the post method")
        const url = this.baseUrlService.getURL() + 'Account/id';
        console.log(account)
        console.log("The request is about to be sent! " + )
        return this.http.post(url, body);
    }

    deleteAccount(id: number) {
        const url = this.baseUrlService.getURL() + 'Account/' + id;
        return this.http.delete(url)
    }

    putAccount(account: account | undefined): Observable<any> {
        if (!account) {
            throw new Error('Invalid account');
        }

        const url = this.baseUrlService.getURL() + 'Account/' + account.id;
        console.log("Sending: " + account.username + " --- " + account.id + " To: " + url);
        return this.http.put(url, account, { headers: this.header }).pipe(
            catchError((error: any) => {
                console.log(error);
                return throwError(error);
            })
        );
    }

}
