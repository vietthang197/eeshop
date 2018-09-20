import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   headersLogin = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  login(username, password) {
    const jsonEndCodeLogin = JSON.stringify({'username': username, 'password': password});
    return this.http.post('http://localhost:8080/login', jsonEndCodeLogin, {headers: this.headersLogin});
  }
}
