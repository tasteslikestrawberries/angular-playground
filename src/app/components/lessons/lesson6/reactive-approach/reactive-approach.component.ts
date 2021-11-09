import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

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
    this.signupForm = new FormGroup({
      //here we get the access to the form so we don't have to use @ViewChild
      //here we declare our form controls that show up as values when console logging our form element (this.signupForm)
      //we pass 2 arguments in every FormControl ( , )
      //the first one is the initial state, the initial value of the form
      //the second is a single validator or an array of validators
      //the third will be potential asynchronous validators
      //we don't call the Validators.required method, we are just passing a reference to it
      //Angular will execute this Validators.required method whenever it detects that input of that FormControl changed
      userData: new FormGroup({
        //nesting form-controls in the userData formgroup
        username: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]), //array of form controls
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }
}
