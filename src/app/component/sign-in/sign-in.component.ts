import { Component } from '@angular/core';
import { AuthData, AuthService } from '../../services/auth.service';
import { ClientState } from '../../modules/client-state.module';
import { ClientService } from '../../services/client.service';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  username: string = "";
  password: string = "";
  usernameFilter: string = "";
  passwordFilter: string = "";

  constructor(private authService: AuthService, private clientService: ClientService) {}

  signIn(): void {
    if (this.username == "" || this.password == "") {
      alert('Username or password is empty!')
    }
    const authData = new AuthData(this.username, this.password);
    this.authService.signInRequest(authData).subscribe({
      next: (response) => {
        console.log('Login successful', response)
      },
      error: (error) => {
        console.error('Login failed', error);
        if (error.status === 400 && error.error.error === 'Username is already exists') {
          this.usernameFilter = 'Username already taken. Please choose a different username.';
        } else {
          alert('An error occurred. Please try again later.');
        }
      }
    });
  }

  navigateToRegister(): void {
    this.clientService.setState(ClientState.SIGN_UP)
  }
}
