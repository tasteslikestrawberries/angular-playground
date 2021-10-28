import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.css'],
})
export class Lesson2Component implements OnInit {
  color: string = '';
  condition: boolean = true;

  updateColor(event: Event) {
    this.color = (<HTMLInputElement>event.target).value;
  }

  getColor = () => {
    return this.color === 'green' ? 'green' : 'blue';
  };

  changeCondition = () => {
    this.condition = !this.condition;
  };

  constructor() {}

  ngOnInit(): void {}
}
