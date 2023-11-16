import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { LoadingSkeletonComponent } from './loading-skeleton/loading-skeleton.component';

@Component({
  selector: 'app-lazy-loading',
  standalone: true,
  imports: [CommonModule, LoadingSkeletonComponent, ItemComponent],
  templateUrl: './lazy-loading.component.html',
  styleUrl: './lazy-loading.component.scss',
})
export class LazyLoadingComponent {
  data = signal([1, 2, 3, 4, 5, 6, 7, 8]);
}
