import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  constructor(private router:Router){
    
  }
  showLoginPage = true;
  login() {
    // Navigate to the new page and hide the login page
    this.router.navigate(['start']);
    this.showLoginPage = false;
  }
}
