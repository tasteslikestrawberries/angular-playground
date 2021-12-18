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
  @ViewChild('lazy2')
  lazy2?: ElementRef<HTMLDivElement>;


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
    createLazyElement([this.lazy!.nativeElement, this.lazy2!.nativeElement], {})
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

/**
 * 
 * @param elements 
 * @param intersectionObserverInit 
 * * root - viewport by default. 
 * * threshold - how much of the element is the viewport. 
 * * rootMargin 
 */
function createLazyElement(elements: Element[], intersectionObserverInit?: IntersectionObserverInit) {
  const ioCallback: IntersectionObserverCallback = (entries, observer) => {
    for (const entry of entries) {
      console.log(entry)
      if (!entry.isIntersecting) {
        continue; //  if entry(element) is not intersecting (not visible) then go to the next entry
      }

      observer.unobserve(entry.target);

      const lazyElements =
      entry.target.querySelectorAll('[data-lazy]');

      lazyElements.forEach((el: any) => {
        el.classList.add(el.dataset.lazy);
        delete el.dataset.lazy;
      });
      //console.log(lazyElements);
    }
  };
  let ioOptions: IntersectionObserverInit = {
    threshold: 0.3,
  }; //A threshold of 1.0 means that when 100% of the target is visible within the element specified by the root option, the callback is invoked.
  ioOptions = {...ioOptions, ...intersectionObserverInit}
  const intersectionObserver = new IntersectionObserver(
    ioCallback,
    ioOptions
  ); //Creating the intersection observer by calling its constructor and passing it a callback function to be run whenever a threshold is crossed in one direction or the other
  elements.forEach((element) => intersectionObserver.observe(element))

}
