import { baseUrl } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User'
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http : HttpClient, private router: Router) { }
  private currentUser = JSON.parse(localStorage.getItem('currentUser'));
  login(data):Observable<any>{
    return this.http.post(`${baseUrl}users/authenticate`, data);
  }
  register(data):Observable<any>{
    return this.http.post(`${baseUrl}users/register`, data);
  }
  getUser():Observable<User>{
    return this.currentUser;
  }
  
}
