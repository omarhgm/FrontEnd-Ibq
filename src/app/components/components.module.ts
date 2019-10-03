import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MatDialogModule } from "@angular/material";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { DialogSuccessfulComponent } from "./dialogs/dialog-successful/dialog-successful.component";
import { DialogUnsuccessfulComponent } from "./dialogs/dialog-unsuccessful/dialog-unsuccessful.component";
import { DialogAlreadyExistsComponent } from './dialogs/dialog-already-exists/dialog-already-exists.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    DialogSuccessfulComponent,
    DialogSuccessfulComponent,
    DialogUnsuccessfulComponent,
    DialogAlreadyExistsComponent
  ],
  imports: [CommonModule, RouterModule, MatDialogModule],
  exports: [NavbarComponent, FooterComponent]
})
export class ComponentsModule {}
