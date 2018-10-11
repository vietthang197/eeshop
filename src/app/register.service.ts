import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import {UserRegister} from './model/UserRegister';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  headerRegister = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  urlRegisterApi = 'http://localhost:8080/api/user/register';
  constructor(private http: HttpClient) { }
  public register(userRegister: UserRegister) {
      const data = JSON.stringify(userRegister);
      return this.http.post(this.urlRegisterApi, data, {headers: this.headerRegister});
  }
}
