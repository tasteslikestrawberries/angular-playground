import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css'],
})
export class PlaygroundComponent implements OnInit {
  firstPokemon: string = 'Pikachu';
  secondPokemon: string = 'Jigglypuff';
  inputName = '';

  getPokemon = () => {
    return this.secondPokemon
  };

  functionOnClick = () => {
    console.log('Button clicked');
  };

  onUpdateInputName(event: Event) {
    this.inputName = (<HTMLInputElement>event.target).value;
    console.log(event)
  }

  constructor() {}

  ngOnInit(): void {}
}
