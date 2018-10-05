import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  headersLogin = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor() { }


}
