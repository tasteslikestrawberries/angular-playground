import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-header',
  templateUrl: './dynamic-header.component.html',
  styleUrls: ['./dynamic-header.component.css']
})
export class DynamicHeaderComponent implements OnInit {
  first = true;
  second = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeComponent() {
     this.first = !this.first;
     this.second = !this.second;
  }

}
