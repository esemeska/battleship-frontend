import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  usernameFilter: string = "";
  passwordFilter: string = "";

  constructor(private loginService: LoginService) {}

  login(): void {
    this.loginService.login(this.username, this.password).subscribe({
      next: (response) => {
        console.log('Registration successful', response)
      },
      error: (error) => {
        console.error('Registration failed', error);
        if (error.status === 400 && error.error.error === 'Username already exists') {
          this.usernameFilter = 'Username already taken. Please choose a different username.';
        } else {
          alert('An error occurred. Please try again later.');
        }
      }
    });
  }
}
