import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  url= 'http://localhost:4200/dashboard';
  constructor(private http: HttpClient) { }

  dashboard(){
    return this.http.get(this.url);
  }
  
  savePrayerRequest(data: string){
    return this.http.post(this.url,data)
  }

}
