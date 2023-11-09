import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-data-binding',
    templateUrl: './data-binding.component.html',
    styleUrls: ['./data-binding.component.scss'],
    standalone: true,
    imports: [FormsModule],
})
export class DataBindingComponent {
  firstPokemon = 'Pikachu';
  secondPokemon = 'Jigglypuff';
  buttonDisabled = false;
  inputName = '';
  initialName = 'Initial Name';

  getPokemon = () => {
    return this.secondPokemon;
  };

  onClick = () => {
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
