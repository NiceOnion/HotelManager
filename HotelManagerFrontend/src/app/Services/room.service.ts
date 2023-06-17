import {Injectable} from '@angular/core';
import {Room} from "../DataObjects/Room";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BaseUrlService} from "./base-url.service";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class RoomService {

    constructor(private http: HttpClient, private url: BaseUrlService) {
    }

    header: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
    })


    public DeleteRoom(room: Room): Observable<any> {
        const url = this.url.getURL() + `Room/${room.id}`;
        return this.http.delete(url, {'headers': this.header});
    }

    public PostRoom(room: Room, hotelId: Number): Observable<any> {
        const url = this.url.getURL() + `Room/${hotelId}`;
        return this.http.post(url, room, {'headers': this.header});
    }

    public PutRoom(room: Room | undefined): Observable<any> {
        const url = this.url.getURL() + `Room/${room?.id}`;
        return this.http.put(url, room, {'headers': this.header})
    }

    public GetAll(): Observable<any[]> {
        const url = this.url.getURL() + 'Room';
        return this.http.get<Room[]>(url)
    }

    public GetOne(id: Number): Observable<any> {
        const url = this.url.getURL() + `Room/One/${id}`
        return this.http.get<Room>(url, {'headers': this.header}).pipe(
            catchError((error: any) => {
                    console.log(error);
                    return throwError(error)
                }
            ));
    }
}
