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
  constructor(private loginInfo: LoginService, private router: Router) { 
  }
  public currentUser: User;
  public isLoggedin: boolean;
  logout(){
    localStorage.removeItem('currentUser');
    this.loginInfo.currentUser$.next(null);
    this.router.navigate(['/login']); 
    
  }
  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.loginInfo.currentUser$.subscribe(user => {
      this.currentUser = user;
    })
  }

}
