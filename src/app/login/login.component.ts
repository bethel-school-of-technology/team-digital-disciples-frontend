import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private login: LoginService) { }
  formGroup: FormGroup;
  ngOnInit() {
    this.initForm();
  }
  initForm(){
    this.formGroup = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }
  loginProcess(){
    if (this.formGroup.valid){
      console.log(this.formGroup.value);
      this.login.login(this.formGroup.value).subscribe(result => {
        if (!result == null){  
          console.log(result);
          alert("Success");
        }else {
          alert("Invalid Attempt");
        }
      })
    }
  }
}