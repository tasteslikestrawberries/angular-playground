import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css'],
})
export class PlaygroundComponent {
  date = new Date();
  myArr = [
    { type: 'fruit', name: 'apple', price: 5 },
    { type: 'vegetable', name: 'tomato', price: 4 },
    { type: 'dairy', name: 'milk', price: 6 },
  ];

  //data: any = [];

  private formBuilder = inject(FormBuilder);
  cvaTestForm: FormGroup;

  constructor(private http: HttpClient) {
    this.cvaTestForm = this.formBuilder.group({
      name: ['initialValue', Validators.required],
    });
  }

  addElementsToArray = () => {
    this.myArr.push({ type: 'fruit', name: 'apple', price: 10 });
  };

  /*postData() {
    this.http.post('someurl.com/posts.json', postData).subscribe((data) => {
      console.log(data);
    });
  }*/

  /*getData() {
    this.http.get('https://randomuser.me/api').subscribe((data) => {
      console.log(data);
    });
  }*/

  //test callbacks
  //a function that is passed to another function as a parameter is a callback function
  /*myMessage() {
    console.log('This message is shown after 2 seconds');
  }*/

  /*testCallbacks = (cb: () => void) => {
    //we give the function to the setTimeout, and setTimeout then calls it, so we don't explicitly have to call the myMessage function
    setTimeout(cb, 2000); 
  }*/

  //or

  testCallbacks() {
    setTimeout(() => {
      console.log('Test Callbacks: callback works!');
    }, 2000);
  }

  //test promises
  newPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Test Promises: promise works!');
      }, 2000); //WORKS
    });
  }

  testPromises() {
    this.newPromise()
      //then() method returns a Promise. It takes up to two arguments: callback functions for the success and failure cases of the Promise
      .then((data) => console.log(data))
      .then(() => console.log('La-la-la'))
      //catch() method returns a Promise and deals with rejected cases only
      .catch((err) => console.log(err))
      //The finally() method returns a Promise. When the promise is settled, i.e either fulfilled or rejected,
      // the specified callback function is executed. This provides a way for code to be run whether
      // the promise was fulfilled successfully or rejected once the Promise has been dealt with.
      .finally(() => console.log('Promise Experiment completed'));
  }

  //test async/await (internally promises)
  timeout(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async testAsyncAwait() {
    await this.timeout(2000);
    return console.log('Test AsyncAwait: async/await works!');
  }

  //test rxjs observables
  asyncObservable() {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next('Test Observable: observable works!');
      }, 2000);
    });
  }
  testObservables() {
    this.asyncObservable().subscribe((data) => {
      console.log(data);
    });
  }
}
