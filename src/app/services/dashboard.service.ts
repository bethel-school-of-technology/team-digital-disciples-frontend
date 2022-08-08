import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { PrayerRequest } from '../models/prayerRequest';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  
  constructor(private http: HttpClient) { }

  createPrayerRequest(prayerRequest : PrayerRequest):Observable<any> {
  return this.http.post(`${baseUrl}prayerRequests/new`, prayerRequest);
  }

}
