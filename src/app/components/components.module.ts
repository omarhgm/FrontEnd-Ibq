import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";
import { PruevaComponent } from "./prueva/prueva.component";
import { Prueba2Component } from "./prueba2/prueba2.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  declarations: [
    NavbarComponent,
    PruevaComponent,
    Prueba2Component,
    FooterComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, PruevaComponent, Prueba2Component, FooterComponent]
})
export class ComponentsModule {}
