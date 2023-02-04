import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router){};

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean
  {
    let isLoggedIn: boolean = this.loginService.isAuthenticated();
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

