import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SendMailsService {
  constructor(private http: HttpClient) {}

  private _url: string = "http://localhost:8080/send";

  sendMail(mail: string): Observable<any> {
    return this.http.post(this._url, mail);
  }
}
