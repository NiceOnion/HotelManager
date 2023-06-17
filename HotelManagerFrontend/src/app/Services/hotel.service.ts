import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BaseUrlService} from "./base-url.service";
import {Observable, throwError} from "rxjs";
import {Hotel} from "../DataObjects/Hotel";
import {catchError} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class HotelService {

    constructor(private http: HttpClient, private url: BaseUrlService) {
    }

    header: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
    })

    public GetAllHotels(): Observable<Hotel[]> {
        const url = this.url.getURL() + 'Hotel/All';
        return this.http.get<Hotel[]>(url);
    }

    public GetOneHotel(id: number): Observable<Hotel> {
        const url = this.url.getURL() + `Hotel/One/${id}`;
        console.log(url);
        return this.http.get<Hotel>(url, {'headers' : this.header}).pipe(
            catchError((error: any) => {
                    console.log(error);
                    return throwError(error)
                }
            ));
    }

    public PostHotel(nHotel: Hotel) {
        const url = this.url.getURL() + 'Hotel'
        return this.http.post(url, nHotel, {'headers': this.header})
    }

    public PutHotel(nHotel : Hotel | undefined){
        const url = this.url.getURL() + 'Hotel'
        return this.http.put(url, nHotel, {'headers' : this.header})
    }

    public Delete(hotel: Hotel) {
        const url = this.url.getURL() + `Hotel/${hotel.id}`;
        this.http.delete(url);
    }
}
