import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson3',
  templateUrl: './lesson3.component.html',
  styleUrls: ['./lesson3.component.css']
})

//this is the parent of <app-hello></app-hello> component
export class Lesson3Component implements OnInit {
  currentName = 'Wall-e';

  names: string[] = [];

  addToNames(newName: string) {
    this.names.push(newName);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
