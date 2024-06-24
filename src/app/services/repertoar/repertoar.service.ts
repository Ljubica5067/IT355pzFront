import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepertoarService {

  constructor(private http: HttpClient) { }

  API = "http://localhost:8080";

  public registerRepertoar(repertoarData:any) {
    return this.http.post(this.API + "/repertoari", repertoarData);
  }
  public getRepertoare(){
    return this.http.get(this.API + "/getRepertoare")
  }

}
