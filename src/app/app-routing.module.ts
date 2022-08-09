import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RegistrationComponent } from './registration/registration.component';
import { PrayerRequestsComponent } from './prayer-requests/prayer-requests.component';
import { LoginComponent } from './login/login.component';
import { InboxComponent } from './inbox/inbox.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { EditRequestComponent } from './edit-request/edit-request.component';
import { AuthUserGuardGuard } from './auth-user-guard.guard';


const routes: Routes = [

  {
    path: "",
    component: DashboardComponent,
    canActivate: [AuthUserGuardGuard]
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path:'prayerrequests',
    component: PrayerRequestsComponent,
    canActivate: [AuthUserGuardGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'inbox',
    component:InboxComponent,
    canActivate: [AuthUserGuardGuard]
  }, 
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthUserGuardGuard]
  },
  {
    path: 'edit/:requestId',
    component: EditRequestComponent,
    canActivate: [AuthUserGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
