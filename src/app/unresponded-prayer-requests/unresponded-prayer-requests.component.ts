import { Component, OnInit } from '@angular/core';
import { PrayerRequestService } from '../services/prayer-request.service';
import { PrayerRequest } from '../models/prayerRequest';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-unresponded-prayer-requests',
  templateUrl: './unresponded-prayer-requests.component.html',
  styleUrls: ['./unresponded-prayer-requests.component.css']
})
export class UnrespondedPrayerRequestsComponent implements OnInit {
  listOfRequests: PrayerRequest[];
  selectedPrayerRequest: PrayerRequest;

  constructor(private prayerService: PrayerRequestService) { }

  ngOnInit(): void {
    this.prayerService.getPrayerRequests().subscribe(result =>{
      this.listOfRequests = result;
    });
  }

  onClickReply(requestId: number){
    this.prayerService.getOneRequest(requestId).subscribe(result =>{
      console.log(result);
  })
  }

   //format date using moment()
   dateFormat(timestamp: Date) {
    return moment(timestamp).format("MMM do YY, h:mm a");
  }
}
