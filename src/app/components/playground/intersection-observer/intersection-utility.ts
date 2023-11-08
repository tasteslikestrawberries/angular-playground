import { ElementRef } from '@angular/core';

export class IntersectionUtility {
  /**
   *
   * @param elements
   * @param intersectionObserverInit
   * * root - viewport by default.
   * * threshold - how much of the element is the viewport.
   * * rootMargin
   */
  static createLazyElements(
    elements: ElementRef<HTMLDivElement>[],
    intersectionObserverInit?: IntersectionObserverInit
  ) {
    const ioCallback: IntersectionObserverCallback = (entries, observer) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          continue; 
        }

        observer.unobserve(entry.target);

        const lazyElements = Array.from(
          entry.target.querySelectorAll('[data-lazy]')
        );
        if ((entry.target as HTMLDivElement).dataset.lazy) {
          lazyElements.push(entry.target);
        }

        lazyElements.forEach((el: any) => {
          el.classList.add(el.dataset.lazy);
          delete el.dataset.lazy;
        });
      }
    };

    //A threshold of 1.0 means that when 100% of the target is visible within the element specified by the root option, the callback is invoked.
    let ioOptions: IntersectionObserverInit = {
      threshold: 0.3,
    };
    ioOptions = { ...ioOptions, ...intersectionObserverInit };

    //Creating the intersection observer by calling its constructor and passing it a callback function to be run whenever a threshold is crossed in one direction or the other
    const intersectionObserver = new IntersectionObserver(
      ioCallback,
      ioOptions
    );
    for (let element of elements) {
      intersectionObserver.observe(element.nativeElement);
    }
  }
}

