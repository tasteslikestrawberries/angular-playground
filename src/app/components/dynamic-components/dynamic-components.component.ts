import { Component, OnInit } from '@angular/core';
import { PlaygroundComponent } from '../playground/playground.component';

@Component({
  selector: 'app-dynamic-components',
  templateUrl: './dynamic-components.component.html',
  styleUrls: ['./dynamic-components.component.css']
})
export class DynamicComponentsComponent implements OnInit {

component = PlaygroundComponent;
  
constructor() { }

  ngOnInit(): void {
  }

}
