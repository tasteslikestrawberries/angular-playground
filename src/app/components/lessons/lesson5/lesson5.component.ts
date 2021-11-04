import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-lesson5',
  templateUrl: './lesson5.component.html',
  styleUrls: ['./lesson5.component.css'],
})
export class Lesson5Component implements OnInit, OnDestroy {
  private mySubscription: any;

  //he following example creates an observable of a stream of numbers 1, 2, 3, 4, 5
  //creating observable instance with observable constructor that takes observer as an argument
  //The variable myObservable is now of the type of observable.

  myObservable = new Observable((observer) => {
    console.log('Observable starts');
    setTimeout(() => {
      observer.next('1');
    }, 1000);
    setTimeout(() => {
      observer.next('2');
    }, 2000);
    setTimeout(() => {
      observer.next('3');
    }, 3000);
    setTimeout(() => {
      observer.next('4');
    }, 4000);
    setTimeout(() => {
      observer.next('5');
    }, 5000);
    setTimeout(() => {
      observer.complete();
    }, 6000); //sending complete event. observable stops here
    setTimeout(() => {
      observer.next('6');
    }, 7000); //this code is never called
  });
  
  //The above example declares the obs as the observable but does not instantiate it.
  //To make the observable to emit values, we need to subscribe to it.
  //We subscribe to the observable, by invoking the subscribe method on it.
  //We can, optionally, include the three callbacks next(), error() & complete() as shown below

  //We need to unsubscribe to close the observable when we no longer require it. If not it may lead to memory leak & Performance degradation.

  //To Unsubscribe from an observable, we need to call the Unsubscribe() method on the subscription.
  /* It will clean up all listeners and free up the memory. It is not necessary for all observables (on this one it is not, as it closes
  the observable after emitting the complete signal)*/

  constructor() {}

  ngOnInit(): void {
    this.mySubscription = this.myObservable.subscribe(
      (val) => {
        console.log(val);
      }, //next callback
      (error) => {
        console.log('error');
      }, //error callback
      () => {
        console.log('Completed');
      } //complete callback
    );
  }

  ngOnDestroy() {
    this.mySubscription.unsubscribe();
  }
}
