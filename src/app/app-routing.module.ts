import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { GeneralResponsesComponent } from './general-responses/general-responses.component';
import { LoginComponent } from './login/login.component';

import { AuthGuardService } from './services/auth-guard.service';

const appRoutes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'responses'
  },
  {
    path: 'responses',
    component: GeneralResponsesComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    component: LoginComponent
  }

];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
  ],
  exports: [
    RouterModule
  ],
  declarations: [

  ]
})
export class AppRoutingModule { }
