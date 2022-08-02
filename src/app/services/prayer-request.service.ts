import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PrayerRequest } from '../models/prayerRequest';
import { baseUrl } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrayerRequestService {
   baseUrl = "http://localhost:4000/api/";

  constructor(private http: HttpClient) { }

  getPrayerRequests(): Observable<PrayerRequest[]> {
    return this.http.get<PrayerRequest[]>(this.baseUrl + "PrayerRequests/unresponded/");
  }
}
