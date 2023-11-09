import { Component } from '@angular/core';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

@Component({
  selector: 'app-dynamic-header',
  templateUrl: './dynamic-header.component.html',
  styleUrls: ['./dynamic-header.component.scss'],
  standalone: true,
  imports: [FirstComponent, SecondComponent],
})
export class DynamicHeaderComponent {
  first = true;
  second = false;

  changeComponent() {
    this.first = !this.first;
    this.second = !this.second;
  }
}
