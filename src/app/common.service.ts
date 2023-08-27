import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public api: any;
  private isLoggedin;
  encryptSecretKey = "FGUCO";
  constructor(private http: HttpClient, private route: Router) {
    this.isLoggedin = false;
    if (window.location.hostname == "localhost") {
      this.api = "http://localhost:61567/";
    } else {
      // this.api = location.protocol + "//" + location.hostname + "/UCO/";
      this.api = location.protocol + "//" + location.hostname + "/CattleInsure_UAT/";
    }
  }


  uploadtDoc(obj): Observable<any> {
    return this.http.post(this.api + "api/Cattle/uploadtDoc", obj);
  }


}
