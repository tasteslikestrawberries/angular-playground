import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  user: User | null = null

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.authService.user.subscribe((user) => {
      this.user = user;
    })
  }

}
