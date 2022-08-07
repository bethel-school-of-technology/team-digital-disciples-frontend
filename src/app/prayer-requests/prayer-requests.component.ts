import { Component, OnInit } from '@angular/core';
import { PrayerRequest } from '../models/prayerRequest';
import { PrayerRequestService } from '../services/prayer-request.service';

@Component({
  selector: 'app-prayer-requests',
  templateUrl: './prayer-requests.component.html',
  styleUrls: ['./prayer-requests.component.css']
})

export class PrayerRequestsComponent implements OnInit {
  
  listOfRequests: PrayerRequest[];

  constructor(private prayerService: PrayerRequestService) { }

  ngOnInit(): void {
    this.prayerService.getPrayerRequests().subscribe(result =>{
      this.listOfRequests = result;
    });
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
