import { Component, OnInit } from '@angular/core';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-dynamic-header',
    templateUrl: './dynamic-header.component.html',
    styleUrls: ['./dynamic-header.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        FirstComponent,
        SecondComponent,
    ],
})
export class DynamicHeaderComponent implements OnInit {
  first = true;
  second = false;

  constructor() {}

  ngOnInit(): void {}

  changeComponent() {
    this.first = !this.first;
    this.second = !this.second;
  }
}
