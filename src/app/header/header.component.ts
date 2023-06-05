import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private authService: AuthServiceService) {

  }
  ngOnInit() {

  }
  goToHome() {
    this.router.navigate(['/home']);
  }
  logout() {
    this.authService.logout();
  }
}
