import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { ShortenPipe } from 'src/app/shared/custom-pipes/shorten.pipe';
import { MediaQueryService } from 'src/app/shared/services/mediaquery-service/mediaquery.service';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ShortenPipe],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  faBars = faBars;
  text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Curabitur pharetra interdum velit, nec accumsan justo volutpat in. 
  Nullam feugiat tristique ante vel laoreet. Ut vitae convallis ligula, 
  a facilisis nisl. Suspendisse interdum nisl sit amet faucibus suscipit. 
  Cras fermentum molestie diam vitae suscipit. Cras eget massa quam. 
  Fusce aliquet viverra urna in laoreet. Vestibulum vel mauris a odio hendrerit congue. 
  Etiam orci arcu, mollis vel pellentesque ut, dapibus eget nulla. Sed facilisis, 
  lacus eu egestas ullamcorper, risus neque lobortis lacus, ut lobortis erat urna 
  in nulla. Aliquam ut elit viverra orci lacinia scelerisque ac eu orci. 
  Nulla facilisi. Ut ut ornare ipsum. Praesent in rutrum erat.`;

  mediaQueryService = inject(MediaQueryService);
}
