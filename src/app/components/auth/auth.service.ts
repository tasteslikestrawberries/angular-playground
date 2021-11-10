import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

//https://firebase.google.com/docs/reference/rest/auth - response payload
export interface IAuthResponseData {
  idToken: string; //A Firebase Auth ID token for the authenticated user.
  email: string; //	The email for the authenticated user.
  refreshToken: string; //	A Firebase Auth refresh token for the authenticated user.
  expiresIn: string; //	The number of seconds in which the ID token expires.
  localId: string; //The uid of the authenticated user.
  registered?: boolean; //Whether the email is for an existing account, signup doesn't yield it but login does
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http
      .post<IAuthResponseData>(
        //firebase signup api endpoint + apikey
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDWfBOFdgr1Lx0cKLXG6l8GGDt8NP2v9O8',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(catchError(this.handleError));
  }

  login(email: string, password: string) {
    return this.http
      .post<IAuthResponseData>(
        //firebase sign-in/login api endpoint + apikey
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDWfBOFdgr1Lx0cKLXG6l8GGDt8NP2v9O8',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(catchError(this.handleError));
  }

  //this method is private because it will be used only inside this service
  private handleError(errorRes: HttpErrorResponse) {
    let errorMsg = 'An unknown error occured!'; //this will be the default error message
    //if error response doesn't have an error key or doesn't have an error key on the error key (nested error key)
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMsg);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS': //this is firebase's api common error code(https://firebase.google.com/docs/reference/rest/auth)
        errorMsg = 'This email exists already.';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMsg = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMsg = 'This password is not correct.';
        break;
    }
    return throwError(errorMsg);
  }
}
