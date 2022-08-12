import { Component, OnInit } from '@angular/core';
import { PrayerRequest } from '../models/prayerRequest';
import { PrayerRequestService } from '../services/prayer-request.service';
import { User } from '../models/User';

@Component({
  selector: 'app-prayer-requests',
  templateUrl: './prayer-requests.component.html',
  styleUrls: ['./prayer-requests.component.css']
})

export class PrayerRequestsComponent implements OnInit {
  //stores user request with false
  listOfRequests: PrayerRequest[];
currentRequest: PrayerRequest = new PrayerRequest();

  constructor(private prayerService: PrayerRequestService) { }
  public currentUser: User;
 
  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.prayerService.getMyPR(this.currentUser.id).subscribe(result =>{
      
      this.listOfRequests = result;
      result = result.sort(function (a, b) {
        var dateA = new Date(a.dateTime).getTime();
        var dateB = new Date(b.dateTime).getTime();
        return dateA < dateB ? -1 : 1; // ? -1 : 1 for ascending/increasing order
      });
    });
  }

  onClickAnswered(prayerRequest: PrayerRequest) {
    console.log(prayerRequest);
    this.currentRequest = prayerRequest;
    this.currentRequest.isAnswered = true;
    this.prayerService.updateRequest(this.currentRequest).subscribe(result =>{
      console.log(result);
      
    })
  }

  onClickDelete(requestId: number){
    console.log("Testing" + requestId);
    this.prayerService.deletePrayerRequest(requestId).subscribe(result =>{
      console.log(result);
      location.reload();
    })
  }

  onClickGetOne(requestId: number){
    this.prayerService.getOneRequest(requestId).subscribe(result =>{
      console.log(result);
      //redirect to edit component page

    })
  }
}
