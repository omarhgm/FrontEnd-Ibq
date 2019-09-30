import { Component, OnInit } from "@angular/core";
import { GuantesService } from "src/app/services/guantes.service";
import { Guante } from "src/app/models/guante";
import { PageEvent } from "@angular/material/paginator";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  public guantes: Guante[] = [];
  public page_size: number = 3;
  public page_number: number = 1;
  public pageSizeOptions: number[] = [2, 3, 5, 6];

  constructor(private _guantesService: GuantesService) {}

  ngOnInit() {
    this._guantesService.getGuantes().subscribe(data => (this.guantes = data));
  }

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }
}
