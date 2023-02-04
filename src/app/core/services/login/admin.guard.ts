import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private loginService: LoginService, private router:Router){};

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean
  {
    let isLoggedIn = this.loginService.isAuthenticated();
    const routeConfig: ActivatedRouteSnapshot = route;

    const routePath: string = routeConfig.routeConfig?.path || '';
    if (routePath == 'user' && isLoggedIn){
      return true
    } else {
      this.router.navigate(['/']);
      return false
    }
  }

}
