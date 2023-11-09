import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { JsonPipe } from '@angular/common';

@Component({
    selector: 'app-data-service',
    templateUrl: './data-service.component.html',
    styleUrls: ['./data-service.component.scss'],
    standalone: true,
    imports: [JsonPipe],
})
export class DataServiceComponent implements OnInit {
  peopleArr: any;

  constructor(private dataService: DataService) {}

  getPeople = () => {
    this.dataService.getData().subscribe(people => {
      this.peopleArr = people;
    });
  };

  ngOnInit(): void {
    this.getPeople();
  }
}
