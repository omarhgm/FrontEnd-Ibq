import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule
} from "@angular/material";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { DialogSuccessfulComponent } from "./dialogs/dialog-successful/dialog-successful.component";
import { DialogUnsuccessfulComponent } from "./dialogs/dialog-unsuccessful/dialog-unsuccessful.component";
import { DialogAlreadyExistsComponent } from "./dialogs/dialog-already-exists/dialog-already-exists.component";
import { DialogSendMailComponent } from "./dialogs/dialog-send-mail/dialog-send-mail.component";

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    DialogSuccessfulComponent,
    DialogSuccessfulComponent,
    DialogUnsuccessfulComponent,
    DialogAlreadyExistsComponent,
    DialogSendMailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  exports: [NavbarComponent, FooterComponent]
})
export class ComponentsModule {}
