import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observer, PartialObserver, Subject } from 'rxjs';

export interface IUser {
  name: string;
  lastName: string;
  thumbnail: string;
}

@Injectable({
  providedIn: 'root'
})
export class MyApiServiceService {
  //private users: IUser[] = [];
  private users: IUser[] = []; 
  private subject = new Subject<IUser[]>();
  private url = 'https://randomuser.me/api';

  constructor(private httpClient: HttpClient) {

   }

  /*fetchUser() {
    this.httpClient.get(this.url).toPromise()
      .then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    });
  }*/

  
  fetchUser() { //each call to this method sends a new get request
    this.httpClient.get(this.url).subscribe({ // angular uses observable pattern instead of promises.
      // to subscribe to an observable/subject you have to pass an observer.
      // observer is an object with methods: next, complete, error
      // http.subscribe(observer)
      // when http request is completed, its observable will call observer methods
      // in case of successfull completition, it calls observer.next()
      next: (data: any) => {
        const user = data.results[0] // data has a structure: {info, results}. Results is an array of users. By default only one user is fetched
        this.users.push({
          name: user.name.first,
          lastName: user.name.last,
          thumbnail: user.picture.thumbnail
        })
        this.subject.next(this.users) // informs subscribers that new user has arrived and passes users array to them
      } 
    })
  }

  getUsers() {
    return this.subject.asObservable(); // returns a subscription instead of subject.asObserver()
  }
} 