import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-approach',
  templateUrl: './reactive-approach.component.html',
  styleUrls: ['./reactive-approach.component.css'],
})
export class ReactiveApproachComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm!: FormGroup; //form is just a group of controls in Angular

  constructor() {}

  //form should be initialized here, before the template is rendered
  ngOnInit(): void {
    //we pass 2 arguments
    //the first one is the initial state, the initial value of the form
    //the second is a single validator or an array of validators
    //the third will be potential asynchronous validators
    this.signupForm = new FormGroup({
      username: new FormControl(null),
      email: new FormControl(null),
      gender: new FormControl('male'),
    });
  }
}
