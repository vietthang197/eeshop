import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import {UserRegister} from './model/UserRegister';
import {AppSetting} from './model/AppSetting';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  headerRegister = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  constructor(private http: HttpClient) { }
  public register(userRegister: UserRegister) {
      const data = JSON.stringify(userRegister);
      return this.http.post(AppSetting.API_URL_REGISTER, data, {headers: this.headerRegister});
  }
}
