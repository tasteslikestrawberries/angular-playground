import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface IChildProps {
  date?: string;
  year?: string;
  season?: string;
}

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
})
export class HelloComponent {
  //input showcase
  //The @Input() decorator in a child component or directive signifies that the property can receive its value from its parent component.
  @Input() name = '';
  @Input() props?: IChildProps;

  //output showcase
  //The child component uses the @Output() property to raise an event to notify the parent of the change.
  //To raise an event, an @Output() must have the type of EventEmitter, which is a class in @angular/core that you use to emit custom events.
  @Output() newNameEvent = new EventEmitter<string>();

  //The addNewName() function uses the @Output(), newNameEvent, to raise an event with the value the user types into the <input>.
  addNewName(value: string) {
    this.newNameEvent.emit(value);
  }
}
