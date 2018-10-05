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
import { AuthService} from './auth.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ModalModule} from 'ngx-bootstrap';
import { ProfileComponent } from './user/profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ManagerComponent } from './manager/manager.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {AdminAllProductsComponent} from './admin/product-manager/admin-all-products/admin-all-products.component';
import { AdminProductDashboardComponent } from './admin/product-manager/admin-product-dashboard/admin-product-dashboard.component';
import { AdminProductCreateComponent } from './admin/product-manager/admin-product-create/admin-product-create.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatDatepickerModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule} from '@angular/material';
import { MatInputModule} from '@angular/material';
import { MatButtonModule, MatButtonToggleModule} from '@angular/material';

library.add(fas);

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full', canLoad: [AuthGuard]},
  {path: 'home', component: HomeComponent },
  {path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },
  {path: 'admin-product-manager', component: AdminAllProductsComponent, canActivate: [AuthGuard]},
  {path: 'admin-product-create', component: AdminProductCreateComponent, canActivate: [AuthGuard]},
  {path: 'user', component: UserComponent, canActivate: [AuthGuard], children: [
      {path: 'profile', component: ProfileComponent}
    ]},
  {path: '404', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductdemoComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    LogoutComponent,
    UserComponent,
    NotFoundComponent,
    ManagerComponent,
   // AdminDashboardComponent,
    AdminAllProductsComponent,
   AdminProductDashboardComponent,
   AdminProductCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
