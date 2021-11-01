import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  myArr = [
    {type:'fruit', name:'apple', price:5 },
    {type:'vegetable', name:'tomato', price:4 },
    {type:'dairy', name:'milk', price:6 }
  ]
  
  addElementsToArray = () => {
    this.myArr.push( {type:'fruit', name:'apple', price:10 });
    console.log(this.myArr)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
