import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SocialAuthService, GoogleLoginProvider, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-in-dialog',
  templateUrl: './sign-in-dialog.component.html',
  styleUrls: ['./sign-in-dialog.component.scss']
})
export class SignInDialogComponent implements OnInit, OnDestroy, AfterViewInit {

  user: SocialUser;
  loggedIn: boolean;
  loggingIn = false;
  closeDialog = false;

  flag = false;

  protected authSubscription: Subscription;

  constructor(private authService: SocialAuthService,
              public dialogRef: MatDialogRef<SignInDialogComponent>,
              private cdRef: ChangeDetectorRef) { }
  
 

  ngOnInit() {
    
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.authSubscription = this.authService.authState.subscribe((user) => {
      debugger;
      this.loggingIn = false;
      console.log(user);
      this.user = user;
      this.loggedIn = (user != null);
     

      debugger;

      if(this.user !== null && this.user !== undefined && this.flag) {
        this.dialogRef.close();
      }

      this.flag = true;

      // if(this.closeDialog && this.flag) {
        
      //   this.cdRef.detectChanges();
      // }

    });
  }

  signInWithGoogle(): void {
    this.loggingIn = true;
    this.closeDialog = true;
    // this.dialogRef.close();
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);


  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.closeDialog = true;
    this.authService.signOut();
    this.dialogRef.close();

  }

}
