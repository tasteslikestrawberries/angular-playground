import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css'],
})
export class PlaygroundComponent implements OnInit {
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
