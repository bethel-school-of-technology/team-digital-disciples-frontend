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

  currentRequest: PrayerRequest = new PrayerRequest();

  //place to store the reqeustId
  selectedRequest: PrayerRequest;
  prayerId: number;
  
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
   
    onClickReply(prayerResponse: PrayerResponse){
      this.myPrayerService.postResponse(prayerResponse).subscribe(result =>{
        console.log(result);
        
  
      })
    }
  }