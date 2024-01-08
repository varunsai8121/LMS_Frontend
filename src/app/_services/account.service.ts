import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl='http://localhost:5133/api/user';

  constructor(private http:HttpClient) { }
  login(model:any)
  {
    return this.http.post(this.baseUrl+'app/login',model);
  }
}
