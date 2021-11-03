import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.css'],
})


export class Lesson2Component implements OnInit {
  color: string = '';
  isSpecial: boolean = true;
  condition: boolean = true;

  hero:string = "";
  heroes : string[] = [];
  
  num: number= 0;

  
  updateColor(event: Event) {
    this.color = (<HTMLInputElement>event.target).value;
  }

  getColor = () => {
    return this.color === 'green' ? 'green' : 'blue';
  };

  changeClass = () => {
    this.isSpecial = !this.isSpecial;
  }

  changeCondition = () => {
    this.condition = !this.condition;
  };

  onSubmit() {
    this.heroes.push(this.hero)
    console.log(this.heroes);
    console.log(this.heroes.length);
    this.hero = '';
  }

  constructor() {}

  ngOnInit(): void {}
}
