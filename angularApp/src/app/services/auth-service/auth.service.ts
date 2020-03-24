import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient ) { }

  signup(email, password){
    return this.httpClient.post(
      `http://localhost:8000/signup`, 
      {email: email, password: password}, {responseType: 'text'}
      )
  }

}
