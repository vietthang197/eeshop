import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../auth.service';
import {HttpErrorResponse, HttpResponse, HttpResponseBase} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loginFailed = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

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
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.loginForm.get('logUsername').value, this.loginForm.get('logPassword').value).subscribe((res: Response) => {
      console.log(res['authorization']);
      this.setSubmitted(true);
      this.setLoginFailed(false);
    }, (error: HttpErrorResponse) => {
      if (error.status === 401) {
        this.setSubmitted(false);
        this.setLoginFailed(true);
      }
    });
  }

}
