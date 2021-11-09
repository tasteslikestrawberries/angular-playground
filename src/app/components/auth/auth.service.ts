import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//https://firebase.google.com/docs/reference/rest/auth
interface IAuthResponseData {
  idToken:string;
  email:string;
  refreshToken: string;
  expiresIn:string;
  localId:string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http.post<IAuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDWfBOFdgr1Lx0cKLXG6l8GGDt8NP2v9O8', //firebase apikey
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    );
  }
}
