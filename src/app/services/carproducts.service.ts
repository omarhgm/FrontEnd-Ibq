import { Injectable } from "@angular/core";
import { Subject, Observable, AsyncSubject, BehaviorSubject } from "rxjs";
import { Guante } from "../models/guante";

@Injectable({
  providedIn: "root"
})
export class CarproductsService {
  private _productsSource = new BehaviorSubject<Guante[]>([]);
  public car: Guante[] = [];

  constructor() {}

  addProducts(product: Guante) {
    this.car.push(product);
  }

  deleteProduct(product: Guante): Observable<Guante[]> {
    var newCar: Guante[] = [];
    console.log(this.car.length);
    this.car.forEach(element => {
      if (element.idGuante != product.idGuante) newCar.push(element);
    });
    this.car = newCar;
    this.sendProducts();
    return this.getProducts();
  }

  sendProducts() {
    this._productsSource.next(this.car);
  }

  getProducts(): Observable<Guante[]> {
    return this._productsSource.asObservable();
  }

  getProductsAsList(): Guante[] {
    return this.car;
  }

  destroyCar() {
    this.car = [];
  }
}
