import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title= 'post API calls in Angular';
  prayerRequests: any;
  constructor(private prayerRequestData: DashboardService) { 
    this.prayerRequestData.dashboard().subscribe((data) => {
      this.prayerRequests=data;
    });
  }

  ngOnInit(): void {
  }

  postPrayerRequest(data : any) {
    console.warn(data)
    this.prayerRequestData.savePrayerRequest(data).subscribe((result) => {
      console.warn(result)
    })
  }
}
