import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatPaginatorModule } from "@angular/material/paginator";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { PaginatePipe } from "../pipes/paginate.pipe";
import { FilterPipe } from "../pipes/filter.pipe";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [HomeComponent, ProductsComponent, PaginatePipe, FilterPipe],
  imports: [CommonModule, RouterModule, MatPaginatorModule, FormsModule],
  exports: [HomeComponent]
})
export class PagesModule {}
