import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatDialogModule } from "@angular/material";
import { MatCarouselModule } from "@ngmodule/material-carousel";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { PaginatePipe } from "../pipes/paginate.pipe";
import { FilterPipe } from "../pipes/filter.pipe";
import { FormsModule } from "@angular/forms";
import { CarproductsComponent } from "./carproducts/carproducts.component";
import { ComponentsModule } from "../components/components.module";
import { DialogSuccessfulComponent } from "../components/dialogs/dialog-successful/dialog-successful.component";
import { DialogUnsuccessfulComponent } from "../components/dialogs/dialog-unsuccessful/dialog-unsuccessful.component";
import { DialogAlreadyExistsComponent } from "../components/dialogs/dialog-already-exists/dialog-already-exists.component";

@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    PaginatePipe,
    FilterPipe,
    CarproductsComponent
  ],
  entryComponents: [
    DialogSuccessfulComponent,
    DialogUnsuccessfulComponent,
    DialogAlreadyExistsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatPaginatorModule,
    FormsModule,
    ComponentsModule,
    MatDialogModule,
    MatCarouselModule
  ],
  exports: [HomeComponent]
})
export class PagesModule {}
