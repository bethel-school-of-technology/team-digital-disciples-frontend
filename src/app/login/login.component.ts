import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login-service.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginInfo: LoginService, private router: Router) { }
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
      this.loginInfo.login(this.formGroup.value).subscribe(result => {
          console.log(result);
          localStorage.setItem('currentUser', JSON.stringify(result));
          //get out of storage   
          console.log(JSON.parse(localStorage.getItem("currentUser")))
          //store user credentials in local variable To BE Completed
          this.router.navigate(['/dashboard']);
        })
        
 
    }
  }
}