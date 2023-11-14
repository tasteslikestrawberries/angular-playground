import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, signal } from '@angular/core';
import { LoadingSkeletonComponent } from './loading-skeleton/loading-skeleton.component';
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-lazy-loading',
  standalone: true,
  imports: [CommonModule, LoadingSkeletonComponent, ItemComponent],
  templateUrl: './lazy-loading.component.html',
  styleUrl: './lazy-loading.component.scss',
})
export class LazyLoadingComponent implements AfterViewInit {
  data = signal([1, 2, 3, 4, 5, 6, 7, 8]);

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.data.update((data) => [...data, 9, 10, 11, 12, 13, 14, 15]);
    }, 2000);
  }
}
