import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';

import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  AmazonLoginProvider,
} from 'angularx-social-login';

import { BooksListComponent } from './components/pages/books-list/books-list.component';
import { BookDetailComponent } from './components/pages/book-detail/book-detail.component';
import { BookItemComponent } from './components/page-components/book-item/book-item.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MaterialComponentsModule } from './modules/material-components/material-components.module';
import { SignInHeaderComponent } from './components/page-components/sign-in-header/sign-in-header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { SignInDialogComponent } from './components/dialogs/sign-in-dialog/sign-in-dialog.component';
import { ListCardComponent } from './components/page-components/list-card/list-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksListComponent,
    BookDetailComponent,
    BookDetailComponent,
    BookItemComponent,
    SignInHeaderComponent,
    SignInDialogComponent,
    ListCardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    SocialLoginModule,
    HttpClientModule,
    MaterialComponentsModule,
    NgbModule,
    FlexLayoutModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '395458440323-ab224554gg87dl7kk2ffqe5su17s8jae.apps.googleusercontent.com'
            ),
          },
          // {
          //   id: FacebookLoginProvider.PROVIDER_ID,
          //   provider: new FacebookLoginProvider('clientId'),
          // },
          // {
          //   id: AmazonLoginProvider.PROVIDER_ID,
          //   provider: new AmazonLoginProvider(
          //     'clientId'
          //   ),
          // },
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  entryComponents: [SignInDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
