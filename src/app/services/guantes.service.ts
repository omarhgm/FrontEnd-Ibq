import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Guante } from "../models/guante";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GuantesService {
  private _url: string = "http://localhost:8080/getguantes";

  constructor(private http: HttpClient) {}

  getGuantes(): Observable<Guante[]> {
    return this.http.get<Guante[]>(this._url);
  }
}
