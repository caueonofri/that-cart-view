import { Injectable } from '@angular/core';

// apply token functionality
// apply guards

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn: boolean = true;
  constructor() { }

  isAuthenticated() {
    return this.isLoggedIn;
  }



}
