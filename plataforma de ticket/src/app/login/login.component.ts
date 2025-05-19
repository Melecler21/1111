
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  usuario = '';
  clave = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  login(): void {
    if(this.auth.login(this.usuario, this.clave)) {
      this.error = '';
      this.router.navigate(['/']);
    } else {
      this.error = 'Usuario o clave incorrectos';
    }
  }
}
