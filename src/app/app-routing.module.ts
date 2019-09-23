import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { PruevaComponent } from "./prueva/prueva.component";
import { Prueba2Component } from "./prueba2/prueba2.component";

const routes: Routes = [
  { path: "prueba", component: PruevaComponent },
  { path: "prueba2", component: Prueba2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgbModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
