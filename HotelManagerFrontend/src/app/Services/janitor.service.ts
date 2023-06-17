import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BaseUrlService} from "./base-url.service";
import {Janitor} from "../DataObjects/Janitor";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class janitorService {

  constructor(private http: HttpClient, private url: BaseUrlService) {
  }

  header: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  })

  public GetAll(): Observable<any[]> {
    const url = this.url.getURL() + "Janitor/All";
    return this.http.get<Janitor[]>(url, {"headers": this.header});
  }

  public GetOne(id: Number): Observable<any> {
    const url = this.url.getURL() + `Janitor/One/${id}`;
    return this.http.get<Janitor>(url, {"headers": this.header})
  }

  public Post(janitor: Janitor): Observable<any> {
    const url = this.url.getURL() + "Janitor/New";
    return this.http.post(url, janitor, {"headers": this.header});
  }

  public Put(janitor: Janitor): Observable<any> {
    const url = this.url.getURL() + `Janitor/${janitor.id}`;
    return this.http.put(url, janitor, {"headers": this.header})
  }

  public Hire(jId: Number, hId: Number): Observable<any> {
    const url = this.url.getURL() + `Janitor/${jId}/Hotels/${hId}`
    return this.http.post(url, {}, {"headers": this.header});
  }

  public Delete(janitor: Janitor): Observable<any> {
    const url = this.url.getURL() + `Janitor/${janitor.id}`
    return this.http.delete(url, {"headers": this.header})
  }

  public Fire(jId: Number, hId: Number): Observable<any> {
    const url = this.url.getURL() + `Janitor/${jId}/Hotels/${hId}`
    return this.http.delete(url, {"headers": this.header})
  }
}