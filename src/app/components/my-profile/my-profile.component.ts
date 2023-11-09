import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
})
export class MyProfileComponent implements OnInit {
  user: User | null = null;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      this.user = user;
    });
  }
}
