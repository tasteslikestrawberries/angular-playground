import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { HelloComponent } from './children/hello/hello.component';
import { IChildProps } from './children/hello/hello.component';
import { BtnComponent } from './children/btn/btn.component';
import { NgFor } from '@angular/common';
@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.scss'],
    standalone: true,
    imports: [
        HelloComponent,
        NgFor,
        BtnComponent,
    ],
})

//this is the parent of <app-hello></app-hello> component
export class ParentComponent implements AfterViewInit {
  //Using @ViewChild to inject a reference to a component
  @ViewChild(HelloComponent) child?: HelloComponent;
  //Using @ViewChild to inject a reference to the DOM element of a component
  @ViewChild('myButton', { static: false })
  myButton?: ElementRef<HTMLButtonElement>;
  currentName = 'Wall-e';
  childProps: IChildProps = {
    date: '31.3.2022',
    year: '2022',
    season: 'spring',
  };
  names: string[] = [];

  addToNames(newName: string) {
    this.names.push(newName);
  }

  //must use ngAfterViewInit for @ViewChild to work - wait for the view to be initialized
  ngAfterViewInit() {
    console.log('Values on ngAfterViewInit():'); //reference to a component
    console.log('child:', this.child); //reference to a component
    console.log('The referenced element:', this.myButton?.nativeElement); //reference to the DOM element
  }
}
