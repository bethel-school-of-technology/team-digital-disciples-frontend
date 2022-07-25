import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetRequestComponent } from './fetch.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InboxComponent } from './inbox/inbox.component';
import { PrayerRequestsComponent } from './prayer-requests/prayer-requests.component';

@NgModule({
  declarations: [
    AppComponent, GetRequestComponent, LoginComponent, RegistrationComponent, DashboardComponent, InboxComponent, PrayerRequestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
