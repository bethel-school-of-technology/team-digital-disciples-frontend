import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private loginInfo: LoginService) { }
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
      console.log(this.formGroup.value);
      this.loginInfo.register(this.formGroup.value).subscribe(result => {
          console.log(result);
      })
    }
  }
}
