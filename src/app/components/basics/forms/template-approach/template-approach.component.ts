import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-approach',
  templateUrl: './template-approach.component.html',
  styleUrls: ['./template-approach.component.scss'],
  standalone: true,
  imports: [FormsModule],
})
export class TemplateApproachComponent implements OnInit {
  @ViewChild('f') signupForm?: NgForm;

  username = 'Default Username';
  defaultQuestion = 'teacher';
  answer = '';
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };
  submitted = false;

  constructor() {}

  onSubmit() {
    this.submitted = true;
    this.user.username = this.signupForm?.value.username;
    this.user.email = this.signupForm?.value.email;
    this.user.secretQuestion = this.signupForm?.value.secretQuestion;
    this.user.answer = this.signupForm?.value.answer;
    this.user.gender = this.signupForm?.value.gender;

    //resets the form and its properties and state (like touched,dirty etc.)
    this.signupForm?.reset();
  }

  ngOnInit(): void {}
}
