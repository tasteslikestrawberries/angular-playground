import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './components/auth/auth.service';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { SidebarComponent } from './components/navigation/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, RouterOutlet],
})
export class AppComponent implements OnInit {
  title = 'angular-playground';

  private authService = inject(AuthService);

  ngOnInit() {
    this.authService.autoLogin();
  }
}
