import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        RouterLink,
        RouterLinkActive,
    ],
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  hasRoute = (route: string) => {
    return this.router.url !== route;
  };
}
