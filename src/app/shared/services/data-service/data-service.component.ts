import { JsonPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-data-service',
  templateUrl: './data-service.component.html',
  styleUrls: ['./data-service.component.scss'],
  standalone: true,
  imports: [JsonPipe],
})
export class DataServiceComponent implements OnInit {
  peopleArr: any;

  private dataService = inject(DataService);

  getPeople = () => {
    this.dataService.getData().subscribe((people) => {
      this.peopleArr = people;
    });
  };

  ngOnInit(): void {
    this.getPeople();
  }
}
