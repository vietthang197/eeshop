import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../auth.service';
import {HttpErrorResponse} from '@angular/common/http';
import { Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  pathLogo = 'assets/images/logo_page.jpg';
  loginForm: FormGroup;
  submitted = false;
  loginFailed = false;
  feedBackLogin = '';

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    if (authService.isAuthenticated()) {
      router.navigate( ['/home']);
    }
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
        this.router.navigate( ['/home']);
      }
    }, (error: HttpErrorResponse) => {
      this.setSubmitted(false);
      this.setLoginFailed(true);
      if (error.status === 401) {
        this.feedBackLogin = 'Tên tài khoản của bạn hoặc Mật khẩu không đúng, vui lòng thử lại.';
      } else {
        this.feedBackLogin = 'Kết nối đến server bị lỗi, vui lòng thử lại.';
      }
    });
  }
}
