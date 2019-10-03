import { Component, OnInit } from "@angular/core";
import { MatCarousel, MatCarouselComponent } from "@ngmodule/material-carousel";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public carouselImages: string[] = [
    "../../../assets/img/IMAGEN CONSULTORIO MEDICO.jpg",
    "../../../assets/img/IMAGEN CIENCIA-EDUCACION-SALUD.jpg",
    "../../../assets/img/IMAGEN CONSULTORIO-HOSPITAL.jpg",
    "../../../assets/img/IMAGEN DENTISTA.jpg",
    "../../../assets/img/IMAGEN DONACION DE SANGRE.jpg",
    /*"../../../assets/img/IMAGEN HOSPITAL.jpg",*/
    /*"../../../assets/img/IMAGEN INDUSTRIA 1.jpg",*/
    "../../../assets/img/IMAGEN INDUSTRIA-DISTRIBUCION.jpg",
    /*"../../../assets/img/IMAGEN LABORATORIO CLINICO.jpeg",*/
    "../../../assets/img/IMAGEN SALUD.jpg" /*,
    "../../../assets/img/IMAGEN VETERINARIA.jpg"*/
  ];

  constructor() {}

  ngOnInit() {}
}
