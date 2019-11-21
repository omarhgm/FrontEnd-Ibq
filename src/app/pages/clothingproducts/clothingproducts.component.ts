import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import { PageEvent } from "@angular/material/paginator";
import { CarproductsService } from "src/app/services/carproducts.service";
import { MatDialog } from "@angular/material";
import { DialogSuccessfulComponent } from "src/app/components/dialogs/dialog-successful/dialog-successful.component";
import { DialogAlreadyExistsComponent } from "src/app/components/dialogs/dialog-already-exists/dialog-already-exists.component";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { FormControl } from "@angular/forms";
import { Producto } from "src/app/models/producto";

@Component({
  selector: "app-clothingproducts",
  templateUrl: "./clothingproducts.component.html",
  styleUrls: ["./clothingproducts.component.css"]
})
export class ClothingproductsComponent implements OnInit {
  public productos: Producto[] = [];
  public pp: Producto[] = [];
  public producosName: string[] = [];
  public page_size: number = 3;
  public page_number: number = 1;
  public pageSizeOptions: number[] = [2, 3, 5, 6];
  public filterProduct = "";
  public filteredOptions: Observable<string[]>;
  myControl = new FormControl();

  constructor(
    private _productService: ProductService,
    private _carproductsService: CarproductsService,
    private _matDialog: MatDialog
  ) {}

  ngOnInit() {
    this._productService.getProductos().subscribe(data => {
      data.forEach(p => {
        console.log(p.tipoProducto);
        if (p.tipoProducto == 2) {
          this.pp.push(p);
          this.productos = this.pp;
        }
      });
      this.productos.forEach(element => {
        this.producosName.push(element.nombreProducto);
      });
    });
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map(value => this._filter(value))
    );
  }

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  openDialogSuccesful() {
    this._matDialog.open(DialogSuccessfulComponent);
  }

  openDialogAlreadyE() {
    this._matDialog.open(DialogAlreadyExistsComponent);
  }

  sendCar() {
    this._carproductsService.sendProducts();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.producosName.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
