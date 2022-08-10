import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrayerRequestService } from '../services/prayer-request.service';
import { PrayerRequest } from '../models/prayerRequest';
import { Router } from '@angular/router';
import { PrayerResponse } from '../models/prayerResponse';
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
    constructor(private actRoute: ActivatedRoute, private myPrayerService: PrayerRequestService, private router: Router) { }
  
    ngOnInit(): void {
      //extracted the id number from url
      this.prayerId = parseInt(this.actRoute.snapshot.paramMap.get("requestId"));//finds numer and assigns it to variable from string to number
      console.log(this.prayerId);  
      
      //fetch the prayer request data according to the id
      this.myPrayerService.getOneRequest(this.prayerId).subscribe(response =>{
        console.log(response);
        this.selectedRequest = response;
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
        })
      }
    }
  }