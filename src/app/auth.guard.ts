import { Injectable } from '@angular/core';
import {CanActivate,Router} from '@angular/router';
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService,
              private _router: Router){}

  canActivate(): boolean {
    if(this._authService.loggedIn()){
      return true
    } else {
      this._router.navigate(['/login'])
      return false
    }
  }
}


/*
@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
*/
