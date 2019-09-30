import { Pipe, PipeTransform } from "@angular/core";
import { Guante } from "../models/guante";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(listProducts: any[], serch: any): any {
    const resultFilter: Guante[] = [];
    if (serch === "") return listProducts;
    listProducts.forEach(product => {
      if (product.nombreGuante.toLowerCase().indexOf(serch.toLowerCase()) > -1)
        resultFilter.push(product);
    });
    return resultFilter;
  }
}
