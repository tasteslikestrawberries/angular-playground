import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
})
export class SecondComponent implements OnInit {
  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    this.headerService.setHeader({
      mainTitle: 'Beauty Tricks',
      title: 'Perfumes',
      subtitle: 'Salvador Dali Perfumes',
      isBeta: true,
    });
  }
}
