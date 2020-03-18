import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HomeComponent } from "./pages/home/home.component";
import { ProductsComponent } from "./pages/products/products.component";
import { CarproductsComponent } from "./pages/carproducts/carproducts.component";
import { AboutUsComponent } from "./pages/about-us/about-us.component";
import { OtherproductsComponent } from "./pages/otherproducts/otherproducts.component";
import { MedicproductsComponent } from "./pages/medicproducts/medicproducts.component";
import { ClothingproductsComponent } from "./pages/clothingproducts/clothingproducts.component";
import { ClientesComponent } from "./pages/clientes/clientes.component";

const routes: Routes = [
  { path: "list", component: ProductsComponent },
  { path: "car", component: CarproductsComponent },
  { path: "dlist", component: OtherproductsComponent },
  { path: "mlist", component: MedicproductsComponent },
  { path: "clist", component: ClothingproductsComponent },
  { path: "about", component: AboutUsComponent },
  { path: "home", component: HomeComponent },
  { path: "clients", component: ClientesComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgbModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
