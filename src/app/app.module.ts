import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';
import { NgxInfiniteScrollerModule } from 'ngx-infinite-scroller';

import 'hammerjs';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuardService } from './services/auth-guard.service';
import { LocalStorageService } from './services/local-storage.service';
import { SessionStorageService } from './services/session-storage.service';
import { SessionService } from './services/session.service';
import { QuizAswerService } from './services/quiz-aswer.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GeneralResponsesComponent } from './general-responses/general-responses.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GeneralResponsesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppMaterialModule,
    NgxInfiniteScrollerModule
  ],
  providers: [
    AuthenticationService,
    AuthGuardService,
    LocalStorageService,
    SessionService,
    SessionStorageService,
    QuizAswerService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
