import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { ShortenPipe } from '../../shared/custom-pipes/shorten.pipe';
import { SortPipe } from '../../shared/custom-pipes/sort.pipe';
import { ReversePipe } from '../../shared/custom-pipes/reverse.pipe';
import { IntersectionObserverComponent } from './intersection-observer/intersection-observer.component';
import { NgFor, DatePipe } from '@angular/common';

@Component({
    selector: 'app-playground',
    templateUrl: './playground.component.html',
    styleUrls: ['./playground.component.scss'],
    standalone: true,
    imports: [
        NgFor,
        IntersectionObserverComponent,
        FormsModule,
        ReactiveFormsModule,
        DatePipe,
        ReversePipe,
        SortPipe,
        ShortenPipe,
    ],
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
      .then((data) => console.log(data))
      .then(() => console.log('La-la-la'))
      .catch((err) => console.log(err))
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
