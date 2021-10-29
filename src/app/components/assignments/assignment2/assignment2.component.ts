import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {
  show: boolean = false;
  logArr: number[] = [];

  logger = () => {
    this.show = !this.show;
    this.logArr.push(this.logArr.length + 1)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
