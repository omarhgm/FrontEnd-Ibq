import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";
import { PruevaComponent } from "./prueva/prueva.component";
import { Prueba2Component } from "./prueba2/prueba2.component";

@NgModule({
  declarations: [NavbarComponent, PruevaComponent, Prueba2Component],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, PruevaComponent, Prueba2Component]
})
export class ComponentsModule {}
