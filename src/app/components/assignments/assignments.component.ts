import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'],
})
export class AssignmentsComponent implements OnInit {
  username = '';

  isButtonDisabled = () => {
    if (this.username != '') return false;
    return true;
  };

  resetUsername = () => {
    return (this.username = '');
  };

  constructor() {}

  ngOnInit(): void {}
}
