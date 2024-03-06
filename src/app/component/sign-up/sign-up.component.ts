import { Component } from '@angular/core';
import { AuthData, AuthService } from '../../services/auth.service';
import { ClientService } from '../../services/client.service';
import { ClientState } from '../../modules/client-state.module';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  username: string = "";
  password: string = "";
  usernameFilter: string = "";
  passwordFilter: string = "";

  constructor(private authService: AuthService, private clientService: ClientService) {}

  sign_up(): void {
    const authData = new AuthData(this.username, this.password);
    this.authService.signUpRequest(authData).subscribe({
      next: (response) => {
        console.log('Register successful', response)
      },
      error: (error) => {
        console.error('Registration failed', error);
        if (error.status === 400 && error.error.error === 'Username already exists') {
          this.usernameFilter = 'Username already taken. Please choose a different username.';
        } else {
          alert('An error occurred. Please try again later.');
        }
      }
    })
  }

  navigateToLogin(): void {
    this.clientService.setState(ClientState.SIGN_IN)
  }
  
}
