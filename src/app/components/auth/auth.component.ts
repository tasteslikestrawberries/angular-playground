import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, IAuthResponseData } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error: any = null;

  constructor(private authService: AuthService, private router: Router) {}

  switchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<IAuthResponseData>;

    this.isLoading = true;
    //after this if statement, certainly at least one of this two observables will be stored in authObs
    /* we are actually reducing the code here, so we don't have to repeat the exact same code for signup and login subscribing, but rather
    doing it once below (authObs.subscribe)*/

    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }

    authObs.subscribe(
      (resData) => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/myprofile']); //making use of programmatical navigation (navigation from inside code)
      },
      (errorMsg) => {
        console.log(errorMsg);
        this.error = errorMsg;
        this.isLoading = false;
      }
    );

    form.reset();
  }

  ngOnInit(): void {}
}
