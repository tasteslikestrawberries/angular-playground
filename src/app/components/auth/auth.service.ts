import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.model';
import { Router } from '@angular/router';

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
  user = new Subject<User | null>();
  private tokenExpirationTimer: any;

  constructor(private http: HttpClient, private router: Router) {}

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
      .pipe(
        catchError(this.handleError),
        /*rxjs tap operator: utility operator that returns an observable output that is identical to 
        the source observable but performs a side effect for every emission on the source observable.*/
        tap((resData) => {
          // + sign on resData.expiresIn converts the string to number, because by default Firebase API documentation, it is a string
          this.handleAuth(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  autoLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData') || '{}'); //gets the data from the local storage
    if (!userData) return;

    const currentUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if (currentUser.token) {
      this.user.next(currentUser); //this is our logged in user
      const expirationDuration =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  logout() {
    this.user.next(null); //setting the user to null (to the initial state)
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDuration: number) {
    console.log(expirationDuration);
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private handleAuth(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    //this gives us the expiration date in milliseconds and convert it back to a Date object
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user); //emits this as our now currently logged in user
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user)); //store the data in the local storage
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