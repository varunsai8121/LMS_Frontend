import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent  implements OnInit{
login() {
throw new Error('Method not implemented.');
}
  title = 'frontend_v1';
  users: any;
 
  constructor(private http:HttpClient,private router:Router){

  }
  
  ngOnInit(): void {
    this.http.get('http://localhost:5133/api/user').subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('Request completed')
    });

  }
  // navigateToLoginPage(): void {
  //   // Navigate to the "login-page" component
  //   this.router.navigate(['/start']);

    
  // }
  
}
