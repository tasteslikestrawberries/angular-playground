import { Component, OnInit } from '@angular/core';
import { MediaQueryService } from 'src/app/shared/services/mediaquery-service/mediaquery.service';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-header-reusable',
  templateUrl: './header-reusable.component.html',
  styleUrls: ['./header-reusable.component.scss'],
})
export class HeaderReusableComponent implements OnInit {
  mainTitle?: string;
  title?: string;
  subtitle?: string;
  isBeta?: boolean;

  constructor(
    public headerService: HeaderService,
    public mediaQueryService: MediaQueryService
  ) {}

  ngOnInit(): void {}
}
