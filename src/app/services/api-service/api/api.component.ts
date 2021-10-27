import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-service';
import { Person } from '../person-model';

@Component({
  selector: 'app-api-component',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  people!:Person[];
  person = new Person();

  constructor(private apiService:ApiService) {}
 
  ngOnInit() {
    this.refreshPeople()
  }
 
  refreshPeople() {
    this.apiService.getPeople()
      .subscribe(data => {
        console.log(data)
        this.people=data;
      })      
 
  }
 
  addPerson() {
    this.apiService.addPerson(this.person)
      .subscribe(data => {
        console.log(data)
        this.refreshPeople();
      })      
  }

}
