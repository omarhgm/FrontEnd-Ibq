import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [HomeComponent, ProductsComponent],
  imports: [CommonModule, RouterModule],
  exports: [HomeComponent]
})
export class PagesModule {}
