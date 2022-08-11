import { baseUrl } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/models/User'
import { Route, Router } from '@angular/router';
import { PrayerResponse } from '../models/prayerResponse';

@Injectable({
  providedIn: 'root'
})
export class PrayerResponseService {

  constructor(private http : HttpClient) { }

  getResponses(opId : number){
    return this.http.get<PrayerResponse[]>(baseUrl + "PrayerResponses/inbox/" + opId);
  }
  getUser(ministerId : number){
    console.log(ministerId);
    return this.http.get<User>(baseUrl + "users/getone/" + ministerId)
  }

}
