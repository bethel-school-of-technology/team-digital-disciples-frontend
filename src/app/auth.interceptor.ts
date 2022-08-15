import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { LoginService } from './services/login-service.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

public loginService : LoginService;
constructor (loginService : LoginService){
this.loginService = loginService;
}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
        'Authorization': `Bearer ${this.loginService.getToken()}`,
      },
    });

    return next.handle(req);
  }
}