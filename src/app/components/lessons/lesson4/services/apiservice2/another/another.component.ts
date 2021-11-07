import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUser, MyApiService } from '../my-api.service';

const setic = new Set();

@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.css'],
})
export class AnotherComponent implements OnInit, OnDestroy {
  users2: IUser[] = [];
  private subscription?: Subscription;

  constructor(private myApiService: MyApiService) {}

  ngOnInit(): void {}

  ngAfterViewChecked() {
    //console.log(this.users2)
    setic.add(this.subscription);
  }

  fetchUsers() {
    this.myApiService.fetchUser();
  }

  unsubscribe() {
    this.subscription?.unsubscribe();
    console.log(setic);
  }

  subscribe() {
    this.subscription = this.myApiService.getUsers().subscribe({
      next: (users) => {
        console.log(users);
        this.users2 = users;
      },
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
