import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, NavigationExtras, Router, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginService } from './common/service/LoginService';
;

@Injectable({ providedIn: 'root' })
export class AuthenticationGuard implements CanActivate {
  constructor(
    private readonly router: Router,
    private readonly location: Location,
    private readonly loginService: LoginService

  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    if(!!this.loginService.user) {
      return true;
    }


    this.router.navigate(['login']);
    this.location.replaceState(state.url);

    return false;
  }


}
