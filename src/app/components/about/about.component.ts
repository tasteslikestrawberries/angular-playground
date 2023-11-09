import { Component } from '@angular/core';

//icons
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { NgStyle } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    standalone: true,
    imports: [FontAwesomeModule, NgStyle],
})
export class AboutComponent {
  faGithubAlt = faGithubAlt;
}
