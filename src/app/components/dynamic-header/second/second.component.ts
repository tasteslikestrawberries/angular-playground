import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header.service';
import { HeaderReusableComponent } from '../header-reusable/header-reusable.component';

@Component({
    selector: 'app-second',
    templateUrl: './second.component.html',
    styleUrls: ['./second.component.scss'],
    standalone: true,
    imports: [HeaderReusableComponent],
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
