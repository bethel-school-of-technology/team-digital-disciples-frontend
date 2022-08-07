import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrayerRequest } from '../models/prayerRequest';
import { PrayerRequestService } from '../services/prayer-request.service';

@Component({
  selector: 'app-edit-request',
  templateUrl: './edit-request.component.html',
  styleUrls: ['./edit-request.component.css']
})

export class EditRequestComponent implements OnInit {
//property to store current request info
currentRequest: PrayerRequest = new PrayerRequest();

//place to store the reqeustId
prayerId: number;

  constructor(private actRoute: ActivatedRoute, private myPrayerService: PrayerRequestService, private router: Router) { }

  ngOnInit(): void {
    //extracted the id number from url
    this.prayerId = parseInt(this.actRoute.snapshot.paramMap.get("requestId"));//finds numer and assigns it to variable from string to number
    console.log(this.prayerId);  
    
    //fetch the prayer request data according to the id
    this.myPrayerService.getOneRequest(this.prayerId).subscribe(response =>{
      console.log(response);
      this.currentRequest = response;
    });
  }

  editRequest(){
    this.myPrayerService.updateRequest(this.currentRequest).subscribe(response =>{
      console.log(response);
      this.router.navigate(["prayerrequests"]);
    })
  }

}
