
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  private admin = false;

  login(usuario: string, clave: string): boolean {
    if(usuario === 'admin' && clave === 'admin123') {
      this.loggedIn = true;
      this.admin = true;
      return true;
    } else if(usuario === 'user' && clave === 'user123') {
      this.loggedIn = true;
      this.admin = false;
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn = false;
    this.admin = false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  isAdmin(): boolean {
    return this.admin;
  }
}
