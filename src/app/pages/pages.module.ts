import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatPaginatorModule } from "@angular/material/paginator";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { PaginatePipe } from "../pipes/paginate.pipe";

@NgModule({
  declarations: [HomeComponent, ProductsComponent, PaginatePipe],
  imports: [CommonModule, RouterModule, MatPaginatorModule],
  exports: [HomeComponent]
})
export class PagesModule {}
