import { baseUrl } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/models/User'
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http : HttpClient, private router: Router) { }
  public currentUser = JSON.parse(localStorage.getItem('currentUser'));
  public currentUser$ = new Subject<User>();
 

  login(data):Observable<any>{
    return this.http.post(`${baseUrl}users/authenticate`, data);
  }
  register(data):Observable<any>{
    return this.http.post(`${baseUrl}users/register`, data);
  }
  getUser():Observable<User>{
    return this.currentUser;
  }
  getToken(){
   console.log(this.currentUser.token);
   return this.currentUser.token;
   
  }
  
}
