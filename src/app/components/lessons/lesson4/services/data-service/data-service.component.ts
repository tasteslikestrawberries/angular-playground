import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-data-service',
  templateUrl: './data-service.component.html',
  styleUrls: ['./data-service.component.css']
})
export class DataServiceComponent implements OnInit {
  peopleArr: any;

  constructor(private dataService: DataService) { }

  getPeople = () => {
    this.dataService.getData().subscribe(people => {
      this.peopleArr = people
    });
  }

  ngOnInit(): void {
    this.getPeople();
  }

}
