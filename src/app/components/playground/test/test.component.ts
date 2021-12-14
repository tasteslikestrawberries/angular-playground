import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators'


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnDestroy {
  subscription = new Subscription;
  time = 100;
  stat: any;

  @ViewChild('lazy')
  lazy?: ElementRef<HTMLDivElement>;


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
    const ioCallback: IntersectionObserverCallback = (entries, observer) => {
      if (entries[0].isIntersecting) {
        observer.unobserve(this.lazy!.nativeElement);

        const lazyElements =
          this.lazy!.nativeElement.querySelectorAll('[data-lazy]');

        lazyElements.forEach((el: any) => {
          el.classList.add(el.dataset.lazy);
          delete el.dataset.lazy;
        });
        console.log(lazyElements);
      }
    };
    const ioOptions: IntersectionObserverInit = {
      threshold: 0.3,
      rootMargin: '0px 0px -20px 0px',
    }; //A threshold of 1.0 means that when 100% of the target is visible within the element specified by the root option, the callback is invoked.
    const intersectionObserver = new IntersectionObserver(
      ioCallback,
      ioOptions
    ); //Creating the intersection observer by calling its constructor and passing it a callback function to be run whenever a threshold is crossed in one direction or the other
    intersectionObserver.observe(this.lazy!.nativeElement);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }



}
