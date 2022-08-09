import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardService } from '../services/dashboard.service';
import { PrayerRequest } from '../models/prayerRequest';
import { User } from '../models/User';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  

  constructor(private prayerRequestData: DashboardService, private router: Router) { }
    formGroup:FormGroup;
    newRequest : PrayerRequest = new PrayerRequest();
    currentUser : User = new User();

  ngOnInit() {
    this.initForm();
    this.currentUser.id = JSON.parse(localStorage.getItem('currentUser')).id;
    this.currentUser.firstName = JSON.parse(localStorage.getItem('currentUser')).firstName;
    this.currentUser.lastName = JSON.parse(localStorage.getItem('currentUser')).lastName;
    this.currentUser.username = JSON.parse(localStorage.getItem('currentUser')).username;
    this.currentUser.token = JSON.parse(localStorage.getItem('currentUser')).token;
  }

  initForm(){
    this.formGroup= new FormGroup({
      prayerAsk: new FormControl('', Validators.required)
    })
  }

  onClickSubmitRequest() {
    if (this.formGroup.valid){
      var prayerText = this.formGroup.value;
      this.newRequest.userId = this.currentUser.id;
      this.newRequest.prayerAsk = prayerText.prayerAsk; 
      this.newRequest.dateTime = new Date ();
      this.newRequest.isAnswered = false;
      this.newRequest.isRespondedTo = false;
      console.log(this.newRequest);
      this.prayerRequestData.createPrayerRequest(this.newRequest).subscribe((result) => {
        console.log(result);
        this.router.navigate(['/prayerrequests']);
      })
    }
  }
}
