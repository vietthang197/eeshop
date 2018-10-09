import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {UserProfileLogedIn} from '../model/UserProfileLogedIn';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogedIn = false;
  userName = 'User';
  isAdmin = false;
  constructor(authService: AuthService) {
    this.isLogedIn = authService.isLogedIn && authService.isTokenExpired();
    this.userName = authService.userName;
    this.isAdmin = authService.isAdmin;
  }

  ngOnInit() {
  }

}
