import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';
import { UserProfileLogedIn} from './model/UserProfileLogedIn';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   headersLogin = new HttpHeaders({
    'Content-Type': 'application/json'
  });
private jwtDecode: JwtHelperService;
   private user: UserProfileLogedIn;

  get isLogedIn() {
     this.setUserFromToken(this.user);
    return this.user.isLogedIn;
  }

  constructor(private http: HttpClient) {
    this.user = new UserProfileLogedIn();
    this.jwtDecode = new JwtHelperService();
  }

  login(username, password) {
    const jsonEndCodeLogin = JSON.stringify({'username': username, 'password': password});
    return this.http.post('http://localhost:8080/login', jsonEndCodeLogin, {headers: this.headersLogin});
  }

  setUserFromToken(user: UserProfileLogedIn) {
    const token = localStorage.getItem('token');
    try {
      const data = this.jwtDecode.decodeToken(token);
      user.isLogedIn = data === null ? false : data['isLogedIn'];
      user.authority = data === null ? null : data['sub'];
      user.userName = data === null ? null : data['userName'];
      user.expireDate = data === null ? null : data['exp'];
      user.createAt = data === null ? null : data['createAt'];

    } catch (e) {
      user.isLogedIn = false;
      user.authority = null;
      user.userName = null;
      user.expireDate = null;
      user.createAt = null;
    }
  }
  get isAdmin(): boolean {
    if ( this.user.authority !== null) {
      const authen = JSON.parse(this.user.authority);
      for (let authenKey in authen) {
        if ( authen[authenKey]['authority'] === 'ADMIN') {
          return true;
        }
      }
    }
    return false;
  }
  get userName() {
    return this.user.userName;
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtDecode.isTokenExpired(token);
  }
}
