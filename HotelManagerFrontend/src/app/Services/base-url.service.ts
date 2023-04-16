import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseUrlService {

  private baseURL = 'http://localhost:8080'

  public getURL(){
    return this.baseURL;
  }
}
