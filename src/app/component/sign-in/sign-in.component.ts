import { Component } from '@angular/core';
import { AuthData, AuthService } from '../../services/auth.service';
import { ClientState } from '../../modules/client-state.module';
import { ClientService } from '../../services/client.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  signInForm: FormGroup;

  constructor(private authService: AuthService, private clientService: ClientService) {
    this.signInForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  signIn(): void {
    if (!this.signInForm.valid) return;

    const authData = new AuthData(this.signInForm.value.username, this.signInForm.value.password);
    this.authService.signInRequest(authData).subscribe({
      next: (response) => {
        console.log('Login successful', response)
      },
      error: (error) => {
        console.log('Login error', error)
      }
    });
  }

  navigateToRegister(): void {
    this.clientService.setState(ClientState.SIGN_UP)
  }

}
