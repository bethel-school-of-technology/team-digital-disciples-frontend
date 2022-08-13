import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { LoginService } from '../services/login-service.service';
import { PrayerResponseService } from '../services/prayer-response.service';
import { PrayerResponse } from '../models/prayerResponse';
import { CombinedResponse } from '../models/CombinedResponse';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  responseService : PrayerResponseService;
  constructor(responseService : PrayerResponseService ) { 
    this.responseService = responseService;
  }
  public currentUser = new User();
  prayerResponses : CombinedResponse[];
  noResponses = false;


  ngOnInit(): void {
      this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
      this.responseService.getResponses(this.currentUser.id).subscribe(result => {
        if (result.length < 1){
          this.noResponses = true;
        }    
        this.prayerResponses = result;
        
      })
  }

}
