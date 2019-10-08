import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Location } from "@angular/common";
import { ToastrService } from "ngx-toastr";
import { SendMailsService } from "src/app/services/send-mails.service";

@Component({
  selector: "app-dialog-send-mail",
  templateUrl: "./dialog-send-mail.component.html",
  styleUrls: ["./dialog-send-mail.component.css"]
})
export class DialogSendMailComponent implements OnInit {
  public mail: string = "";
  public ownerForm: FormGroup;

  constructor(
    private _sendmailService: SendMailsService,
    private _location: Location,
    private _toastrSerice: ToastrService
  ) {}

  ngOnInit() {
    this.ownerForm = new FormGroup({
      mail: new FormControl("", [Validators.required, Validators.email])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.ownerForm.controls[controlName].hasError(errorName);
  };

  public onCancel = () => {
    this._location.back();
  };

  sendMail() {
    this._sendmailService.sendMail(this.mail).subscribe();
    this._toastrSerice.success(this.mail, "Correo enviado a:", {
      disableTimeOut: true
    });
  }
}
