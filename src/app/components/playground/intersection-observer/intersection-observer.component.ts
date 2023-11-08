import { Component, OnInit, ViewChild, ElementRef, OnDestroy, ViewChildren } from '@angular/core';
import { IntersectionUtility } from './intersection-utility';
import { interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators'


@Component({
  selector: 'app-intersection-observer',
  templateUrl: './intersection-observer.component.html',
  styleUrls: ['./intersection-observer.component.css']
})
export class IntersectionObserverComponent implements OnInit, OnDestroy {
  subscription = new Subscription;
  time = 100;
  stat: any;

  @ViewChild('lazy')
  lazy?: ElementRef<HTMLDivElement>;
  @ViewChildren('lazyquotes')
  lazy2?: ElementRef<HTMLDivElement>[];


  constructor() { }

  ngOnInit(): void {
    this.startStats()
  }

  //count up to number animation with rxjs interval
  startStats = () => {
    const interval$ = interval(1000).pipe(take(this.time));
    this.subscription = interval$.subscribe(value =>
      this.stat = value);
  }

  //intersection observer
  ngAfterViewInit() {
    IntersectionUtility.createLazyElements(this.lazy ? [this.lazy] : [], {})
    IntersectionUtility.createLazyElements(this.lazy2 ?? [], { threshold: 1 })

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

