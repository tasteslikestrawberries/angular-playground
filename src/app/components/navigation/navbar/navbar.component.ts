import { Component, OnDestroy, OnInit } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgIf, NgStyle } from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    standalone: true,
    imports: [
        RouterLink,
        NgIf,
        RouterLinkActive,
        FontAwesomeModule,
        NgStyle,
    ],
})
export class NavbarComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub?: Subscription;

  show = false;
  faBars = faBars;
  faTimes = faTimes;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  toggle = () => {
    this.show = !this.show;
  };

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !user ? false : true; //we can shorten this to !!user
    });
  }

  ngOnDestroy() {
    this.userSub?.unsubscribe();
  }
}
