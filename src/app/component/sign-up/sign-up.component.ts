import { Component } from '@angular/core';
import { AuthData, AuthService } from '../../services/auth.service';
import { ClientService } from '../../services/client.service';
import { ClientState } from '../../modules/client-state.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  signUpForm: FormGroup;

  constructor(private authService: AuthService, private clientService: ClientService) {
    this.signUpForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  signUp(): void {
    if (!this.signUpForm.valid) return;

    const authData = new AuthData(this.signUpForm.value.username, this.signUpForm.value.password);
    this.authService.signUpRequest(authData).subscribe({
      next: (response) => {
        console.log('Register successful', response)
      },
      error: (error) => {
        console.log('Registration error', error);
      }
    })
  }

  navigateToLogin(): void {
    this.clientService.setState(ClientState.SIGN_IN)
  }
  
}
