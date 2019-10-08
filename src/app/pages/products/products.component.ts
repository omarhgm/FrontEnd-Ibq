import { Component, OnInit } from "@angular/core";
import { GuantesService } from "src/app/services/guantes.service";
import { Guante } from "src/app/models/guante";
import { PageEvent } from "@angular/material/paginator";
import { CarproductsService } from "src/app/services/carproducts.service";
import { MatDialog } from "@angular/material";
import { DialogSuccessfulComponent } from "src/app/components/dialogs/dialog-successful/dialog-successful.component";
import { DialogAlreadyExistsComponent } from "src/app/components/dialogs/dialog-already-exists/dialog-already-exists.component";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  public guantes: Guante[] = [];
  public guantesName: string[] = [];
  public page_size: number = 3;
  public page_number: number = 1;
  public pageSizeOptions: number[] = [2, 3, 5, 6];
  public filterProduct = "";
  public filteredOptions: Observable<string[]>;
  myControl = new FormControl();

  constructor(
    private _guantesService: GuantesService,
    private _carproductsService: CarproductsService,
    private _matDialog: MatDialog
  ) {}

  ngOnInit() {
    this._guantesService.getGuantes().subscribe(data => {
      this.guantes = data;
      this.guantes.forEach(element => {
        this.guantesName.push(element.nombreGuante);
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

  addCar(producto: Guante) {
    var flag = 0;
    if (this._carproductsService.getProductsAsList().length == 0) {
      this._carproductsService.addProducts(producto);
      this.openDialogSuccesful();
      return;
    } else
      this._carproductsService.getProductsAsList().forEach(element => {
        if (element.idGuante == producto.idGuante) flag = 1;
        return;
      });
    if (flag == 0) {
      this._carproductsService.addProducts(producto);
      this.openDialogSuccesful();
    } else this.openDialogAlreadyE();
  }

  sendCar() {
    this._carproductsService.sendProducts();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.guantesName.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
