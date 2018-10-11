import { Component, OnInit  } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {HttpErrorResponse} from '@angular/common/http';
import { Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
import {MatSnackBar} from '@angular/material';
import {RegisterService} from '../register.service';
import { UserRegister} from '../model/UserRegister';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  registerForm: FormGroup;
  logoRegister = 'assets/images/logo_register.png';
  feedBackRegister = 'Đăng ký thành công';
  registerFailed = false;
  submitted = false;
  countryList: any;
  constructor(private formBuilder: FormBuilder, private authService: AuthService,
              private router: Router, public snackBar: MatSnackBar,
              private registerService: RegisterService,
              private toastr: ToastrService) {
    if (authService.isAuthenticated()) {
      router.navigate( ['/home']);
      return;
    }
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      regUsername: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_]{1,15}$')
      ])),
      regPassword: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{5,16}$')
      ])),
      regConfirmPassword: [null, Validators.required],
      regEmail: [null, Validators.compose([
        Validators.required,
        Validators.email
      ])],
      regNumberphone: [null, Validators.required],
      regAddress1: [null, Validators.required],
      regAddress2: [null, Validators.required],
      birthDay: [null, Validators.required],
      regFullname: [null, Validators.required]
    });
  }
  public openSnackBar(): void {
    this.snackBar.open('Thông tin điền vào chưa hợp lệ', 'Điền lại', {
      duration: 3000,
    });
  }
  onRegisterFormSubmit () {
    if (!this.registerForm.valid) {
      this.openSnackBar();
      return;
    }
    this.submitted = true;
    this.registerFailed = false;
    const userRegister: UserRegister = new UserRegister();
    userRegister._username = this.registerForm.controls['regUsername'].value;
    userRegister._password = this.registerForm.controls['regPassword'].value;
    userRegister._confirmPassword = this.registerForm.controls['regConfirmPassword'].value;
    userRegister._email = this.registerForm.controls['regEmail'].value;
    userRegister._phone = this.registerForm.controls['regNumberphone'].value;
    userRegister._address1 = this.registerForm.controls['regAddress1'].value;
    userRegister._address2 = this.registerForm.controls['regAddress2'].value;
    userRegister._birthday = this.registerForm.controls['birthDay'].value;
    userRegister._name = this.registerForm.controls['regFullname'].value;
    this.registerService.register(userRegister).subscribe((res: Response) => {
      if (res['registerStatus']) {
        this.router.navigate(['/login-page']);
        this.toastr.success('Đăng ký thành công!', 'Success!');
      } else {
        this.toastr.error('Đăng ký thất bại!', 'Failed!');
        this.feedBackRegister = res['message'];
        this.registerFailed = true;
        this.submitted = false;
      }
    }, ( error: HttpErrorResponse) => {
      this.toastr.error('Đăng ký thất bại!', 'Failed!');
      this.feedBackRegister = 'Lỗi kết nối tới Server, vui lòng thử lại';
      this.registerFailed = true;
      this.submitted = false;
    });
  }
}
