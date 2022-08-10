import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PrayerRequest } from '../models/prayerRequest';
import { baseUrl } from 'src/environments/environment';
import { ConnectableObservable, Observable } from 'rxjs';
import { PrayerResponse } from '../models/prayerResponse';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class PrayerRequestService {
   

  constructor(private http: HttpClient) { }
//these send to the back-end

  //get requests by user
  getMyPR(userId: number): Observable<PrayerRequest[]>{
    return this.http.get<PrayerRequest[]>(baseUrl + "PrayerRequests/getAll/" + userId);
    }

  //get all prayer requests
  getPrayerRequests(): Observable<PrayerRequest[]> {
    return this.http.get<PrayerRequest[]>(baseUrl + "PrayerRequests/unresponded/");
  }

  // component needs to send an Id for the request
  getOneRequest(requestId: number): Observable<PrayerRequest>{
    return this.http.get<PrayerRequest>(baseUrl + "PrayerRequests/getone/" + requestId); //does this need to be lower case requestId? Yes to match the variable in the paraameter
  }


    //component needs to provide the Id as well as the updated request info
    //editId:number, edittedInfo:PrayerRequest
  /* updateRequest(requestId: number): Observable<PrayerRequest>{
    return this.http.post<PrayerRequest>(baseUrl + "PrayerRequests/updateOne/", PrayerRequest);
  } */
  updateRequest(prequest: PrayerRequest): Observable<PrayerRequest>{
    return this.http.post<PrayerRequest>(baseUrl + "PrayerRequests/updateOne/", prequest);}


  deletePrayerRequest(requestId: number): Observable<any>{
    return this.http.delete<any>(baseUrl + "PrayerRequests/deleteOne/" + requestId);
  }


  postResponse(prayerResponse : PrayerResponse): Observable<any>{
    return this.http.post<any>(baseUrl + "PrayerResponses/new/" , prayerResponse);
  }

  getUser(userId : number){
    console.log(userId);
    return this.http.get<User>(baseUrl + "users/getone/" + userId)
  }

  // markAsAnswered(condition: boolean): Observable<PrayerRequest> {
  //   return this.http.put
  // }
 }
