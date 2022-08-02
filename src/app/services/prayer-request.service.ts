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

  // component needs to send and Id for the request
  getOneRequest(requestId: number): Observable<PrayerRequest>{
    return this.http.get<PrayerRequest>(this.baseUrl + "PrayerRequests/getone/{requestId}"); //does this need to be lower case requestId? Yes to match the variable in the paraameter
  }


    //component needs to provide the Id as well as the updated request info
    //editId:number, edittedInfo:PrayerRequest
  updateRequest(editId: number, edittedInfo: PrayerRequest): Observable<PrayerRequest>{
    return this.http.put<PrayerRequest>(this.baseUrl + "PrayerRequests/updateOne/" , edittedInfo);
  }


  deletePrayerRequest(requestId: number): Observable<any>{
    return this.http.delete<any>(this.baseUrl + "PrayerRequests/deleteOne/{requestId}");
  }

  // markAsAnswered(condition: boolean): Observable<PrayerRequest> {
  //   return this.http.put
  // }
 }
