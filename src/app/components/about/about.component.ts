import { Component } from '@angular/core';

//icons
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  faGithubAlt = faGithubAlt;
}
