import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SocialUser } from 'angularx-social-login';
import { SignInDialogComponent } from '../../dialogs/sign-in-dialog/sign-in-dialog.component';

@Component({
  selector: 'app-sign-in-header',
  templateUrl: './sign-in-header.component.html',
  styleUrls: ['./sign-in-header.component.scss']
})
export class SignInHeaderComponent implements OnInit {

  @Input()  user: SocialUser;

  constructor(public dialogRef: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const innerSanctumDialog = this.dialogRef.open(SignInDialogComponent, {
      height: 'auto',
      minHeight: '300px',
      width: '500px',
      // panelClass: 'poc-benefits-dialog'
    });
    innerSanctumDialog.disableClose = true;
    innerSanctumDialog.afterClosed().subscribe(result => {
      this.user = result;
      
    });
  }
  

}
