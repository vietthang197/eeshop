import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../auth.service';
import {HttpErrorResponse} from '@angular/common/http';
import { Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loginFailed = false;
  feedBackLogin = '';

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      logUsername: [null, Validators.required],
      logPassword: [null, Validators.required]
    });
  }
  get l() {return this.loginForm.controls; }
  setSubmitted(vl: boolean) {
    this.submitted = vl;
  }
  setLoginFailed(vl: boolean) {
    this.loginFailed = vl;
  }

  onLoginSubmit() {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.submitted = false;
      return;
    }
    this.authService.login(this.loginForm.get('logUsername').value, this.loginForm.get('logPassword').value).subscribe((res: Response) => {
      this.setSubmitted(true);
      if (res['authorization'] !== null) {
        const jwtDecode = new JwtHelperService();
        this.loginFailed = false;
        localStorage.setItem('token', res['authorization']);
        location.reload(true);
      }
    }, (error: HttpErrorResponse) => {
      this.setSubmitted(false);
      this.setLoginFailed(true);
      if (error.status === 401) {
        this.feedBackLogin = 'Tên tài khoản  hoặc Mật khẩu không đúng, vui lòng thử lại.';
      } else {
        this.feedBackLogin = 'Kết nối đến server bị lỗi, vui lòng thử lại.';
      }
    });
  }

}
