import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "pfilter"
})
export class PfilterPipe implements PipeTransform {
  transform(listProducts: any[], serch: any): any {
    const resultFilter: any[] = [];
    if (serch === "") return listProducts;
    listProducts.forEach(product => {
      if (
        product.nombreProducto.toLowerCase().indexOf(serch.toLowerCase()) > -1
      )
        resultFilter.push(product);
    });
    return resultFilter;
  }
}
