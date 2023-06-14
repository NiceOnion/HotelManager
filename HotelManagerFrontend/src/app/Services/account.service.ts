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
        const url = this.baseUrlService.getURL() + 'Account';
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Content-Length', JSON.stringify(account).length.toString())
            .set('Host', 'http://localhost:8080'); // Replace 'example.com' with the actual host

        console.log("The request is about to be sent! " + url + "  ---  " + account.username)
        return this.http.post(url, account, { headers }).pipe(
            catchError((error: any) => {
                return throwError(error);
            })
        );
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
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Content-Length': JSON.stringify(account).length.toString(),
            'Host': 'http://localhost:8080'
        });
        console.log("Sending: " + account.username + " --- " + account.id + "To: " + url);
        return this.http.post(url, account, { headers }).pipe(
            catchError((error: any) => {
                console.log(error);
                return throwError(error);
            })
        );
    }

}
