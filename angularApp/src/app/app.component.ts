import { Component, OnInit } from '@angular/core';
import { HttpClient } from  "@angular/common/http";
import { AuthService } from './services/auth-service/auth.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoginMode = true;
  signupForm: FormGroup;

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
    ){}

    ngOnInit(){
      this.signupForm = new FormGroup({
        'email': new FormControl(null),
        'password': new FormControl(null)
      })
    }

  callingNodeServer(){
    console.log("we got to the caller method")
    this.httpClient
    .get(`http://localhost:8000/`, {responseType: 'text'})
    .subscribe(response => {console.log(response)})
  }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  signUp(){
    console.log(this.signupForm)
    this.authService
      .signup(
        this.signupForm.value.email, 
        this.signupForm.value.password).subscribe(response => {
          console.log(response);
        })
  }

}
