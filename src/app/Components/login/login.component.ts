import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router){
    
  }
  showLoginPage = true;
  login() {
    // Navigate to the new page and hide the login page
    this.router.navigate(['start']);
    this.showLoginPage = false;
  }
  
user: any;


}
