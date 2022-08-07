import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login-service.service';
import { Router } from '@angular/router';
import { User } from '../models/User';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser : User = new User();
  constructor(private userInfo: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.userInfo.getCurrentUser().subscribe(result => {
      this.currentUser = result;
      console.log("Current User is: " + this.currentUser);
    })
  }

}
