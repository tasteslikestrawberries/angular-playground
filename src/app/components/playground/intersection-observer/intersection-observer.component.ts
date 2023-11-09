import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { IntersectionUtility } from './intersection-utility';

@Component({
  selector: 'app-intersection-observer',
  templateUrl: './intersection-observer.component.html',
  styleUrls: ['./intersection-observer.component.scss'],
  standalone: true,
})
export class IntersectionObserverComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  time = 100;
  stat: any;

  @ViewChild('lazy')
  lazy?: ElementRef<HTMLDivElement>;
  @ViewChildren('lazyquotes')
  lazy2?: ElementRef<HTMLDivElement>[];

  ngOnInit(): void {
    this.startStats();
  }

  //count up to number animation with rxjs interval
  startStats = () => {
    const interval$ = interval(1000).pipe(take(this.time));
    this.subscription = interval$.subscribe((value) => (this.stat = value));
  };

  //intersection observer
  ngAfterViewInit() {
    IntersectionUtility.createLazyElements(this.lazy ? [this.lazy] : [], {});
    IntersectionUtility.createLazyElements(this.lazy2 ?? [], { threshold: 1 });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
