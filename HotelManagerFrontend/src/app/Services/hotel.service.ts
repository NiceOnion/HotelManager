import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseUrlService} from "./base-url.service";
import {Observable} from "rxjs";
import {Hotel} from "../DataObjects/Hotel";

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient, private url: BaseUrlService) { }

  public GetAllHotels(): Observable<Hotel[]>{
    const url = this.url.getURL() + '/Hotel/All';
    return this.http.get<Hotel[]>(url);
  }

  public GetOneHotel(id: number): Observable<Hotel>{
    const url = this.url.getURL() + `/Hotel/One/${id}`;
    return this.http.get<Hotel>(url);
  }
}
