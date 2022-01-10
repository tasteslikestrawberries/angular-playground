import { Component, OnInit } from '@angular/core';
import { concat, from, Observable, of, timer } from 'rxjs';
import { filter, map, pluck, switchMap, take, takeWhile, tap } from 'rxjs/operators';

interface Person {
  name: string;
  age: number
}

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.css']
})
export class RxjsOperatorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const people: Person[] = [
      {
        name: 'Sara',
        age: 32
      },
      {
        name: 'Ana',
        age: 16
      },
      {
        name: 'Lara',
        age: 18
      },
      {
        name: 'Marco',
        age: 45
      }
    ]


    const people$: Observable<Person[]> = of(people); //of operator
    people$.subscribe({ next: data => console.log(data) });

    
    ////////////////////////////////////////

    const peoplePromise: Promise<Person[]> = Promise.resolve(people);
    const peoplePromise$: Observable<Person[]> = from(peoplePromise); //from operator
    peoplePromise$.subscribe({ next: data => console.log(data) });

    
    ////////////////////////////////////////
    const person$ = of('Laura');
    person$.pipe(
      map(data => data.toUpperCase()), //map operator
      tap(data => console.log(data))
    ).subscribe();

    const people2$: Observable<Person> = from(people) //notice the difference between of and from operators
    //of prints the whole array, but from prints elements one by one (for strings that would be letters)
    const filteredAges = people2$.pipe(
      filter(person => person.age >= 30) //filter operator
    ).subscribe(data => console.log(data))

    const proba$ = of(...people) //spreading the array into elements so map operator gets person not people!
    proba$.pipe(
      map(person => person)
    ).subscribe(data => console.log(data))

    ////////////////////////////////////////
    //pluck operator
    const names$ = from(people);
    names$.pipe(
      pluck('name')
    ).subscribe(data => console.log(data))

    
    ////////////////////////////////////////

    const values1 = [1, 2, 3];
    const values2 = [4, 5, 6];
    const values3 = [7, 8, 9];

    //concat operator - subscribes to subsequent stream when the previous one completes
    const values$ = concat(values1, values2, values3).subscribe(data => console.log(data))

    ////////////////////////////////////////

    const numbers1$ = of([1, 2, 3, 4, 5]);
    const numbers2$ = of([6, 7, 8, 9, 10]);

    const combinedNumbers$ = numbers1$.pipe(
      tap(numbers1$ => console.log(numbers1$)),
      switchMap(numbers1$ => numbers2$) //switchMap operator
    ).subscribe(data => console.log(data))


    ////////////////////////////////////////

    //take operator -> take only the first 5 values from a stream
    const myTimer$ = timer(0, 1000).pipe(take(5)).subscribe(data => console.log(data)) //rxjs timer

    //takeWhile operator -> take emitted values until a condition is met
    const myTimer2$ = timer(0, 1000).pipe(takeWhile(timer => timer < 3)).subscribe(data => console.log(data))


  }


}
