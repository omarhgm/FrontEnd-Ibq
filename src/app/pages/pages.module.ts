import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatPaginatorModule } from "@angular/material/paginator";
import {
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule,
  MatAutocompleteModule,
  MatTableModule
} from "@angular/material";
import { MatCarouselModule } from "@ngmodule/material-carousel";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { PaginatePipe } from "../pipes/paginate.pipe";
import { FilterPipe } from "../pipes/filter.pipe";
import { PfilterPipe } from "../pipes/pfilter.pipe";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CarproductsComponent } from "./carproducts/carproducts.component";
import { ComponentsModule } from "../components/components.module";
import { DialogSuccessfulComponent } from "../components/dialogs/dialog-successful/dialog-successful.component";
import { DialogUnsuccessfulComponent } from "../components/dialogs/dialog-unsuccessful/dialog-unsuccessful.component";
import { DialogAlreadyExistsComponent } from "../components/dialogs/dialog-already-exists/dialog-already-exists.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { DialogSendMailComponent } from "../components/dialogs/dialog-send-mail/dialog-send-mail.component";
import { OtherproductsComponent } from "./otherproducts/otherproducts.component";
import { MedicproductsComponent } from "./medicproducts/medicproducts.component";
import { ClothingproductsComponent } from "./clothingproducts/clothingproducts.component";
import { ClientesComponent } from "./clientes/clientes.component";

@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    PaginatePipe,
    FilterPipe,
    PfilterPipe,
    CarproductsComponent,
    AboutUsComponent,
    OtherproductsComponent,
    MedicproductsComponent,
    ClothingproductsComponent,
    ClientesComponent
  ],
  entryComponents: [
    DialogSuccessfulComponent,
    DialogUnsuccessfulComponent,
    DialogAlreadyExistsComponent,
    DialogSendMailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatPaginatorModule,
    FormsModule,
    ComponentsModule,
    MatDialogModule,
    MatCarouselModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatAutocompleteModule,
    MatTableModule
  ],
  exports: [HomeComponent]
})
export class PagesModule {}
