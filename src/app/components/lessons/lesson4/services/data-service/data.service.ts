import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // the service will return an observable that the component can subscribe to

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getData(): Observable<any> {
    const peopleArr = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 32,
      },
      {
        firstName: 'Anna',
        lastName: 'Leap',
        age: 23,
      },
      {
        firstName: 'Theo',
        lastName: 'Salvador',
        age: 43,
      },
      {
        firstName: 'Monica',
        lastName: 'Lorry',
        age: 40,
      },
      { firstName: 'Frank', lastName: 'Sool', age: 21 },
    ];

    return of(peopleArr); //https://stackoverflow.com/questions/47889210/why-we-should-use-rxjs-of-function
  }
}
