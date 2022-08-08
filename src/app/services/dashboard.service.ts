import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  url= 'http://localhost:4200/dashboard';
  constructor(private http: HttpClient) { }

  dashboard(){
    return this.http.get(this.url);
  }
  
  savePrayerRequest(data: Observable<any>){
    return this.http.post(this.url,data);
  }

}
