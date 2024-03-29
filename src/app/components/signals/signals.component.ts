import {
  Component,
  OnInit,
  computed,
  effect,
  signal,
  untracked,
} from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.scss'],
  standalone: true,
})
export class SignalsComponent implements OnInit {
  users = signal([
    { firstName: 'Lu', active: false },
    { firstName: 'Rea', active: false },
  ]);
  animals = signal([{ species: 'dog' }, { species: 'cat' }]);
  counter = signal(0);
  isCounterEven = computed(() => this.counter() % 2 === 0);

  constructor() {
    effect(() => console.log(untracked(this.animals)));
  }

  ngOnInit() {
    this.users.update((val) => [
      { firstName: val[0].firstName + 'Test', active: false },
    ]);

    this.animals.set([{ species: 'bird' }]);
  }

  increaseCount() {
    this.counter.update((count) => count + 1);
  }
}
