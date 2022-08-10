import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrayerRequestService } from '../services/prayer-request.service';
import { PrayerRequest } from '../models/prayerRequest';
import { Router } from '@angular/router';
import { PrayerResponse } from '../models/prayerResponse';
import { User } from '../models/User';
@Component({
  selector: 'app-prayer-response',
  templateUrl: './prayer-response.component.html',
  styleUrls: ['./prayer-response.component.css']
})
export class PrayerResponseComponent implements OnInit {

  //place to store the reqeustId
  selectedRequest: PrayerRequest = new PrayerRequest();
  prayerId: number;
  prayerResponse: PrayerResponse = new PrayerResponse();
  originalPoster: User = new User();
    constructor(private actRoute: ActivatedRoute, private myPrayerService: PrayerRequestService, private router: Router) { }
  
    ngOnInit(): void {
      //extracted the id number from url
        this.prayerId = parseInt(this.actRoute.snapshot.paramMap.get("requestId")); 
        this.myPrayerService.getOneRequest(this.prayerId).subscribe(response =>{
        this.selectedRequest = response;
        console.log(this.selectedRequest.userId);
        this.myPrayerService.getUser(this.selectedRequest.userId).subscribe(response =>{
        console.log(response);
        this.originalPoster = response;
          });
      });
      
      
    }
   
    onClickReply(){
      if (this.prayerResponse.prayerTextResponse) {
        this.prayerResponse.requestId = this.selectedRequest.requestId;
        this.prayerResponse.ministerId =  JSON.parse(localStorage.getItem("currentUser")).userId;
        this.prayerResponse.opId = this.selectedRequest.userId;
        this.prayerResponse.dateTime = new Date(); 
        this.myPrayerService.postResponse(this.prayerResponse).subscribe(result =>{
        console.log(result)
        this.router.navigate(["unrespondedprayerrequests"]);
        });
      }
    }
  }