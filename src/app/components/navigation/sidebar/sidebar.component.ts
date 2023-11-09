import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
})
export class SidebarComponent implements OnInit {
  private router = inject(Router);

  ngOnInit(): void {}

  hasRoute = (route: string) => {
    return this.router.url !== route;
  };
}
