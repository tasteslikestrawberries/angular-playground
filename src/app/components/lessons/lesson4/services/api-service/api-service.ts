//start json server in terminal: json-server --watch db.json

import { HttpClient } from '@angular/common/http';
import { Person } from './person-model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; //The HTTP module uses observables to handle AJAX requests and responses.

@Injectable({providedIn:'root'}) 
export class ApiService {
 
  baseURL: string = "http://localhost:3000/"; //change this to real server
 
  constructor(private http: HttpClient) {
  }
 
  getPeople(): Observable<Person[]> {
    console.log('getPeople '+this.baseURL + 'people')
    return this.http.get<Person[]>(this.baseURL + 'people') //returns Person data (http://localhost:3000/people)
  }
 
  addPerson(person:Person): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body = JSON.stringify(person); //converts javascript object to a JSON string
    console.log(body)
    return this.http.post(this.baseURL + 'people', body,{'headers':headers})
  }
 
}
