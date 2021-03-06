import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header.service';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    this.headerService.setHeader({
      mainTitle: 'Cool Movies',
      title: 'New Movies',
      subtitle: 'Thrillers',
      isBeta: false
    });
  }
}
