import { Component, OnInit, inject } from '@angular/core';
import { HeaderService } from '../header.service';
import { HeaderReusableComponent } from '../header-reusable/header-reusable.component';
@Component({
    selector: 'app-first',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.scss'],
    standalone: true,
    imports: [HeaderReusableComponent],
})
export class FirstComponent implements OnInit {
  private headerService = inject(HeaderService);

  ngOnInit(): void {
    this.headerService.setHeader({
      mainTitle: 'Cool Movies',
      title: 'New Movies',
      subtitle: 'Thrillers',
      isBeta: false,
    });
  }
}
