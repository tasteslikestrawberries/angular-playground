import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
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

}