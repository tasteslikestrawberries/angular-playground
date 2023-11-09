import { Component, OnInit, inject } from '@angular/core';
import { HeaderReusableComponent } from '../header-reusable/header-reusable.component';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
  standalone: true,
  imports: [HeaderReusableComponent],
})
export class SecondComponent implements OnInit {
  private headerService = inject(HeaderService);

  ngOnInit(): void {
    this.headerService.setHeader({
      mainTitle: 'Beauty Tricks',
      title: 'Perfumes',
      subtitle: 'Salvador Dali Perfumes',
      isBeta: true,
    });
  }
}
