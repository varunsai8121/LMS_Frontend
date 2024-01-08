import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/_services/account.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model: any = {};
  loggedIn = false;
  showLoginPage = true;

  constructor(private router: Router, private accountservice: AccountService) {}

  login() {
    this.accountservice.login(this.model).subscribe({
      next: response => {
        console.log(response);
        this.loggedIn = true;
        // Move the navigation and page hiding code here
        this.router.navigate(['start']);
        this.showLoginPage = false;
      },
      error: error => {
        console.log(error);
        // Handle error, e.g., show an error message to the user
      }
    });
  }
}
