import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { HelloComponent } from './hello/hello.component';
import { IChildProps } from './hello/hello.component';
@Component({
  selector: 'app-lesson3',
  templateUrl: './lesson3.component.html',
  styleUrls: ['./lesson3.component.css']
})

//this is the parent of <app-hello></app-hello> component
export class Lesson3Component implements AfterViewInit {

  //input showcase
  currentName = 'Wall-e';

  //multiple inputs with interface showcase
  childProps: IChildProps = {
    date: '31.3.2022',
    year: '2022',
    season: 'spring'
  };

  //output showcase
  names: string[] = [];

  addToNames(newName: string) {
    this.names.push(newName);
  }

  //Using @ViewChild to inject a reference to a component
  @ViewChild(HelloComponent)
  child?: HelloComponent;

  //Using @ViewChild to inject a reference to the DOM element of a component
  @ViewChild("myButton", { static: false }) myButton?: ElementRef;

  constructor() { }

  //must use ngAfterViewInit for @ViewChild to work - we must wait for the view to be initialized before we can access @ViewChild
  ngAfterViewInit() {
    console.log('Values on ngAfterViewInit():'); //reference to a component
    console.log("child:", this.child); //reference to a component
    console.log("The referenced element:", this.myButton?.nativeElement);//reference to the DOM element
  }  

}
