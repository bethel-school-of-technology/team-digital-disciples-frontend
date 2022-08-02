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

    //this.prayerService.deletePrayerRequest(requestId).subscribe();
  }

}
