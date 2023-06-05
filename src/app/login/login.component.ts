import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  errorMessage = '';
  constructor(private _authService: AuthServiceService, private router: Router) {

  }

  ngOnInit() {

  }

  loginFn() {
    if (this.username.trim().length === 0) {
      this.errorMessage = 'Username cannot be empty';
    }
    else if (this.password.trim().length === 0) {
      this.errorMessage = 'Password cannot be empty';
    }
    else {
      let res = this._authService.login(this.username, this.password);
      if (res === 200) {
        this.router.navigate(['/home']);
      }
      else if (res === 403) {
        this.router.navigate(['/login']);
        this.errorMessage = 'Invalid username or password';
      }
    }

  }
}
