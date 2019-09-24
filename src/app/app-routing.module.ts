import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HomeComponent } from "./pages/home/home.component";
import { PruevaComponent } from "./components/prueva/prueva.component";
import { Prueba2Component } from "./components/prueba2/prueba2.component";

const routes: Routes = [
  { path: "prueba", component: PruevaComponent },
  { path: "prueba2", component: Prueba2Component },
  { path: "home", component: HomeComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgbModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
