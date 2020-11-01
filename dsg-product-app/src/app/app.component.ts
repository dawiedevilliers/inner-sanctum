import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { SocialAuthService, GoogleLoginProvider, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { authConfig } from './sso/sso.config';
import { SignInDialogComponent } from './components/dialogs/sign-in-dialog/sign-in-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  user: SocialUser;
  loggedIn: boolean;

  title = 'dsg-product-app';
  url = '';
  protected authSubscription: Subscription;

  constructor(
    public dialogRef: MatDialog,
    private router: Router,
    private authService: SocialAuthService) {



    this.authSubscription =this.authService.authState.subscribe((user) => {
      this.user = user;
    });

  }
 
  ngAfterViewInit(): void {

    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((route: NavigationEnd) => {
      this.url = route['url'];
      // if ((this.url === '/' || this.url === '') && (this.user === null || this.user === undefined)) {
      //   const innerSanctumDialog = this.dialogRef.open(SignInDialogComponent, {
      //     height: 'auto',
      //     minHeight: '300px',
      //     width: '500px',
          
      //   });
      //   innerSanctumDialog.disableClose = true;
      //   innerSanctumDialog.afterClosed().subscribe(result => {
      //     this.router.navigateByUrl('books-list');
      //   });
      // }
    });

    


  }
  ngOnInit(): void {

  }
  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

}
