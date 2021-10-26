import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  count: number = 10;

  getCount = () => {
    return this.count;
  }

  functionOnClick = () => {
    console.log('Button clicked')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
