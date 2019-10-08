import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { DialogSendMailComponent } from "src/app/components/dialogs/dialog-send-mail/dialog-send-mail.component";
import { SendMailsService } from "src/app/services/send-mails.service";

@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.css"]
})
export class AboutUsComponent implements OnInit {
  constructor(private _matDialog: MatDialog) {}

  ngOnInit() {}

  openDialog() {
    this._matDialog.open(DialogSendMailComponent);
  }
}
