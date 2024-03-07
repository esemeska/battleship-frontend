import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

export class AuthData {
  constructor(private username: string, private password: string) {}
}

export enum AuthInputType {
  USERNAME = "USERNAME",
  PASSWORD = "PASSWORD"
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signInUrl = 'http://localhost:8000/api/sign_in/';
  private signUpUrl = 'http://localhost:8000/api/sign_up/';

  constructor(private http: HttpClient) { }

  signInRequest(authData: AuthData): Observable<any> {
    return this.http.post(this.signInUrl, authData);
  }

  signUpRequest(authData: AuthData): Observable<any> {
    return this.http.post(this.signUpUrl, authData);
  }

}
