import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  formGroup:FormGroup
  prayerRequests: any;
  constructor(private prayerRequestData: DashboardService, private router: Router) { 
    this.prayerRequestData.dashboard().subscribe((data) => {
      this.prayerRequests=data;
    });
  }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.formGroup= new FormGroup({
      prayerAsk: new FormControl('', Validators.required)
    })
  }

  postPrayerRequest() {
    if (this.formGroup.valid){
      console.log(this.formGroup.value);
      this.prayerRequestData.savePrayerRequest(this.formGroup.value).subscribe((result) => {
        console.log(result);
        this.router.navigate(['/prayer-requests']);
      })
    }
  }
}
