import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HomeComponent } from "./pages/home/home.component";
import { ProductsComponent } from "./pages/products/products.component";
import { CarproductsComponent } from "./pages/carproducts/carproducts.component";
import { AboutUsComponent } from "./pages/about-us/about-us.component";

const routes: Routes = [
  { path: "list", component: ProductsComponent },
  { path: "car", component: CarproductsComponent },
  { path: "about", component: AboutUsComponent },
  { path: "home", component: HomeComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgbModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
