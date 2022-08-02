import { Component, OnInit } from '@angular/core';
import { PrayerRequest } from '../models/prayerRequest';
import { PrayerRequestService } from '../services/prayer-request.service';

@Component({
  selector: 'app-prayer-requests',
  templateUrl: './prayer-requests.component.html',
  styleUrls: ['./prayer-requests.component.css']
})
export class PrayerRequestsComponent implements OnInit {
  
  requests: PrayerRequest[];

  constructor(private prayerService: PrayerRequestService) { }

  ngOnInit(): void {
    this.prayerService.getPrayerRequests().subscribe(result =>{
      this.requests = result;
    });
  }

}
