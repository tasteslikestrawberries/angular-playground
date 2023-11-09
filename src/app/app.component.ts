import { Component, OnInit } from '@angular/core';
import { AuthService } from './components/auth/auth.service';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/navigation/sidebar/sidebar.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
        NavbarComponent,
        SidebarComponent,
        RouterOutlet,
    ],
})
export class AppComponent implements OnInit {
  title = 'angular-playground';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.autoLogin();
  }
}
