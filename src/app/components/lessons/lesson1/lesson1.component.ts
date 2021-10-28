import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.css']
})
export class Lesson1Component implements OnInit {
  firstPokemon: string = 'Pikachu';
  secondPokemon: string = 'Jigglypuff';
  buttonDisabled = false;
  inputName = '';
  initialName = 'Initial Name';

  getPokemon = () => {
    return this.secondPokemon;
  };

  functionOnClick = () => {
    console.log('Button clicked');
  };

  onUpdateInputName(event: Event) {
    this.inputName = (<HTMLInputElement>event.target).value;
    console.log(event);
  }

  checkVariableName = () => {
    console.log(this.initialName);
  };
  constructor() {}

  ngOnInit(): void {}
}