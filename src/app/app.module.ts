import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetRequestComponent } from './fetch.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InboxComponent } from './inbox/inbox.component';
import { PrayerRequestsComponent } from './prayer-requests/prayer-requests.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditRequestComponent } from './edit-request/edit-request.component';
import { UnrespondedPrayerRequestsComponent } from './unresponded-prayer-requests/unresponded-prayer-requests.component';
import { PrayerResponseComponent } from './prayer-response/prayer-response.component';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  declarations: [
    AppComponent, GetRequestComponent, LoginComponent, RegistrationComponent, DashboardComponent, InboxComponent, PrayerRequestsComponent, NavbarComponent, EditRequestComponent, UnrespondedPrayerRequestsComponent, PrayerResponseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
