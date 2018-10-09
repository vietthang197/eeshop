import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRoleArray = route.data.expectedRole;
    const token = localStorage.getItem('token');
    // decode the token to get its payload
    const tokenPayload = decode(token);
    let count  = 0;
    let acepptRole = false;
    const arrRole: any = JSON.parse(tokenPayload.sub);
    for ( let index = 0; index < expectedRoleArray.length; index ++ ) {
      for ( let _j = 0; _j < arrRole.length; _j ++) {
        if ( expectedRoleArray[index] === arrRole[_j]['authority']) {
          count ++;
        }
      }
    }
    if ( count === expectedRoleArray.length) {
      acepptRole = true;
    }
    if (
      !this.auth.isAuthenticated() ||
      !acepptRole
    ) {
      this.router.navigate(['403']);
      return false;
    }
    return true;
  }
}
