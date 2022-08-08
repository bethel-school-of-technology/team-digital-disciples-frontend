import { baseUrl } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }
  login(data):Observable<any>{
    return this.http.post(`${baseUrl}users/authenticate`, data);
  }
  register(data):Observable<any>{
    return this.http.post(`${baseUrl}users/register`, data);
  }

}
