import { Component, OnInit } from "@angular/core";
import { Guante } from "src/app/models/guante";
import { PageEvent } from "@angular/material/paginator";
import { CarproductsService } from "src/app/services/carproducts.service";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { Subscription, Observable } from "rxjs";
import { MatDialog } from "@angular/material";
import { DialogUnsuccessfulComponent } from "src/app/components/dialogs/dialog-unsuccessful/dialog-unsuccessful.component";
import { FormControl } from "@angular/forms";
import { startWith, map } from "rxjs/operators";

declare function myF(): any;

@Component({
  selector: "app-carproducts",
  templateUrl: "./carproducts.component.html",
  styleUrls: ["./carproducts.component.css"]
})
export class CarproductsComponent implements OnInit {
  public carProducts: Guante[] = [];
  public guantesName: string[] = [];
  public page_size: number = 3;
  public page_number: number = 1;
  public pageSizeOptions: number[] = [2, 3, 5, 6];
  public filterProduct = "";
  public filteredOptions: Observable<string[]>;
  myControl = new FormControl();
  subscription: Subscription;

  constructor(
    private _carproductsService: CarproductsService,
    private _router: Router,
    private _location: Location,
    private _matDialog: MatDialog
  ) {}

  ngOnInit() {
    this._carproductsService.getProducts().subscribe(data => {
      this.carProducts = data;
      this.carProducts.forEach(element => {
        this.guantesName.push(element.nombreGuante);
      });
    });
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map(value => this._filter(value))
    );
  }

  opendialog() {
    this._matDialog.open(DialogUnsuccessfulComponent);
  }

  My() {
    myF();
  }

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  delete(product: Guante) {
    this._carproductsService.deleteProduct(product).subscribe(data => {
      this.carProducts = data;
    });
    this.opendialog();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.guantesName.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }

  /*ngOnDestroy() {
    this._carproductsService.destroyCar();
  }
  */
}
