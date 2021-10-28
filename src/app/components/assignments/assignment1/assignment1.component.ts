import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {
  username = '';

  isButtonDisabled = () => {
    if (this.username != '') return false;
    return true;
  };

  resetUsername = () => {
    return (this.username = '');
  };

  constructor() { }

  ngOnInit(): void {
  }

}
