import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SocialAuthService, GoogleLoginProvider, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-in-dialog',
  templateUrl: './sign-in-dialog.component.html',
  styleUrls: ['./sign-in-dialog.component.scss']
})
export class SignInDialogComponent implements OnInit, OnDestroy {

  user: SocialUser;
  loggedIn: boolean;
  loggingIn = false;
  closeDialog = false;

  protected authSubscription: Subscription;

  constructor(private authService: SocialAuthService,
              public dialogRef: MatDialogRef<SignInDialogComponent>,
              private cdRef: ChangeDetectorRef) { }
 

  ngOnInit() {
    this.authSubscription = this.authService.authState.subscribe((user) => {
      debugger;
      this.loggingIn = false;
      console.log(user);
      this.user = user;
      this.loggedIn = (user != null);

      if(this.closeDialog) {
        this.dialogRef.close(this.user);
        this.cdRef.detectChanges();
      }

    });
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  signInWithGoogle(): void {
    this.loggingIn = true;
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.closeDialog = true;
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
    this.closeDialog = true;
  }

}
