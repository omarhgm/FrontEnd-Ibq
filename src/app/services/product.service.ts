import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Producto } from "../models/producto";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private _url: string = "http://localhost:8080/getproductos";

  constructor(private http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this._url);
  }
}
