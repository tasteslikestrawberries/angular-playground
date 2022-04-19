import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-header-reusable',
  templateUrl: './header-reusable.component.html',
  styleUrls: ['./header-reusable.component.css'],
})
export class HeaderReusableComponent implements OnInit {
  mainTitle?: string;
  title?: string;
  subtitle?: string;

  constructor(public headerService: HeaderService) {}

  ngOnInit(): void {}
}
