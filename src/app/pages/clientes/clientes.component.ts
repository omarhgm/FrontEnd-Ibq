import { Component, OnInit } from "@angular/core";

export interface PeriodicElement {
  name: string;
  position: number;
  cellphone: string;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: "AHF MEXICO A.C.",
    cellphone: "-",
    email: "guadalupe.prev.condesa@gmail.com"
  },
  {
    position: 2,
    name: "BIOMEDICA DE REFERENCIA S.A.P.I. DE C.V.",
    cellphone: "4170-9140",
    email: "fgallegos@bioderef.com;"
  },
  {
    position: 3,
    name: "CORDÓN VITAL S.A. DE C.V.",
    cellphone: "5540-6141",
    email: "victor.mendoza@cordonvital.com"
  },
  {
    position: 4,
    name: "CRUZ ROJA MEXICANA I.A.P.",
    cellphone: "5557-5063",
    email: "rmorales@cruzrojamexicana.org.mx"
  },
  {
    position: 5,
    name: "FUNDACIÓN DE ASISTENCIA PRIVADA CONDE DE VALENCIANA I.A.P.",
    cellphone: "5442-1700  Ext.3335",
    email: "earostegui@industriasqyb.com; "
  },
  {
    position: 6,
    name: "FUNDACIÓN HOSPITAL NUESTRA SEÑORA DE LA LUZ I.A.P.",
    cellphone: "5128-1156 / 5128-1141 Ext.662",
    email: "teresa.guevara@hospitaldelaluz.org"
  },
  {
    position: 7,
    name: "HOSPITAL NUESTRA SEÑORA DE GUADALUPE S.A. DE C.V.",
    cellphone: "-",
    email: "carlos.villar@hguadalupe.com"
  },
  {
    position: 8,
    name: "INMATERIIS S.A. DE C.V.",
    cellphone: "-",
    email: "jorge.perez@inmateriis.com"
  },
  {
    position: 9,
    name:
      "INSTITUTO DE SEGURIDAD Y SERVICIOS SOCIALES DE LOS TRABAJADORES DEL ESTADO CMN 20 DE NOVIEMBRE",
    cellphone: "-",
    email: "earostegui@industriasqyb.com"
  },
  {
    position: 10,
    name: "LABORATORIO CLÍNICO Y DE GENÉTICA S.C.",
    cellphone: "5545-5836 Ext. 215",
    email: "comprasesue@hotmail.com"
  },
  {
    position: 11,
    name: "LABORATORIO DE ANÁLISIS CLÍNICOS FLORIDA SATÉLITE S.A. DE C.V..",
    cellphone: "5572-6509",
    email: "jefedelaboratorio@floridasatelite.com"
  },
  {
    position: 12,
    name: "LABORATORIO DE REFERENCIA ELI S.A. DE C.V.",
    cellphone: "2454-7901 / (55) 2050-428",
    email: "lab_elisa@yahoo.com.mx"
  },
  {
    position: 13,
    name: "LABORATORIOS DE ESPECIALIDADES INMUNOLÓGICAS S.A. DE C.V.",
    cellphone: "5553-2696 Ext. 128",
    email: "hlonginesc@lei.mx"
  },
  {
    position: 14,
    name: "OLARTE Y AKLE BACTERIÓLOGOS S.A. DE C.V.",
    cellphone: "(55)-4390-3853",
    email: "santiagooria@olarteyakle.com"
  },
  {
    position: 15,
    name: "ORTHIN REFERENCIA ESPECIALIZADA S.A. DE C.V.",
    cellphone: "8500-5233 Ext. 175",
    email: "recepcion.proveedores@orthinlab.com.mx"
  },
  {
    position: 16,
    name: "SERVICIOS DE SALUD PUBLICA DEL DISTRITO FEDERAL",
    cellphone: "2614-2709",
    email: "industriasquimicasybiologicas@industriasqyb.com"
  }
];

@Component({
  selector: "app-clientes",
  templateUrl: "./clientes.component.html",
  styleUrls: ["./clientes.component.css"]
})
export class ClientesComponent implements OnInit {
  displayedColumns: string[] = ["position", "name", "cellphone", "email"];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit() {}
}
