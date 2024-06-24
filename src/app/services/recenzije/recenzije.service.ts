import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecenzijeService {

  constructor(private http: HttpClient) { }

  API = "http://localhost:8080";

  public registerRecenzija(recenzijaData:any) {
    return this.http.post(this.API + "/recenzije", recenzijaData);
  }
  public getRecenzije(){
    return this.http.get(this.API + "/getRecenzije")
  }

}
