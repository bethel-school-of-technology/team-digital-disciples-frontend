import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private loginInfo: LoginService, private router: Router) { }
  formGroup: FormGroup;
  ngOnInit() {
    this.initForm();
  }
  initForm(){
    this.formGroup = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }
  registerProcess(){
    if (this.formGroup.valid){
      this.loginInfo.register(this.formGroup.value).subscribe(result => {
          console.log(result);
          this.router.navigate(['/login']);
      })
    }
  }
}
