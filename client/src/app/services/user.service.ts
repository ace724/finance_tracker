import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loggedIn = false;

  constructor(private router: Router) { }

  // A mock login method
  login() {
    this.loggedIn = true;
    this.router.navigate(['/dashboard']);
  }

  // A mock registration method
  register() {
    this.loggedIn = true;
    this.router.navigate(['/dashboard']);
  }
}
