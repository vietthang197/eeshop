import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { HeaderComponent } from './header/header.component';
import { ProductdemoComponent } from './productdemo/productdemo.component';
import { FooterComponent } from './footer/footer.component';
import {AuthGuard} from './auth.guard';
import { AdminComponent } from './admin/admin.component';
import { AuthService} from './auth.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule} from '@angular/common/http';

library.add(fas);

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full', canLoad: [AuthGuard]},
  {path: 'home', component: HomeComponent },
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductdemoComponent,
    FooterComponent,
    AdminComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
