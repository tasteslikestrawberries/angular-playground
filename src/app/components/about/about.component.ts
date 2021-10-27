import { Component, OnInit } from '@angular/core';

//icons
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  faGithubAlt = faGithubAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
