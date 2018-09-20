import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      regfullName: [null, Validators.required],
      reguserName: [null, Validators.required],
      regemail: [null, [Validators.required, Validators.email]],
      regpassword: [null, [Validators.required, Validators.minLength(6)]],
      rePassword: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.registerForm.controls; }

  onSignUpSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    // this.authService.getUserDetails(this.registerForm.get('reguserName').value, this.registerForm.get('regpassword').value);
  }

}
