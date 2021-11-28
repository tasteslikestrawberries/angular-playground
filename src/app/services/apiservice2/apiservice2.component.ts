import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUser, MyApiService } from './my-api.service';

@Component({
  selector: 'app-apiservice2',
  templateUrl: './apiservice2.component.html',
  styleUrls: ['./apiservice2.component.css'],
})
export class Apiservice2Component implements OnInit, OnDestroy {
  users: IUser[] = [];
  private subscription?: Subscription;

  constructor(private myApiService: MyApiService) {}

  ngOnInit(): void {
    this.subscription = this.myApiService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
      },
    });
  }

  fetchUsers() {
    this.myApiService.fetchUser();
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
