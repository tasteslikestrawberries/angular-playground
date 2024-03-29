import { NgStyle } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FontAwesomeModule, NgStyle],
})
export class NavbarComponent implements OnInit, OnDestroy {
  private userSub?: Subscription;
  private authService = inject(AuthService);
  private router = inject(Router);

  isAuthenticated = false;
  show = false;
  faBars = faBars;
  faTimes = faTimes;
  toggle = () => {
    this.show = !this.show;
  };

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !user ? false : true; //we can shorten this to !!user
    });
  }

  ngOnDestroy() {
    this.userSub?.unsubscribe();
  }
}
