import {
  ElementRef,
} from '@angular/core';


export class IntersectionUtility {

  /**
  * 
  * @param elements 
  * @param intersectionObserverInit 
  * * root - viewport by default. 
  * * threshold - how much of the element is the viewport. 
  * * rootMargin 
  */
  static createLazyElements(elements: ElementRef<HTMLDivElement>[], intersectionObserverInit?: IntersectionObserverInit) {

    const ioCallback: IntersectionObserverCallback = (entries, observer) => {
      for (const entry of entries) {
        //console.log(entry);

        if (!entry.isIntersecting) {
          continue //  if entry(element) is not intersecting (not visible) then go to the next entry
        }

        observer.unobserve(entry.target);

        //console.dir(entry.target)

        const lazyElements = Array.from(entry.target.querySelectorAll('[data-lazy]'));
        if ((entry.target as HTMLDivElement).dataset.lazy) {
          lazyElements.push(entry.target)
        }

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
    ioOptions = { ...ioOptions, ...intersectionObserverInit }
    const intersectionObserver = new IntersectionObserver(ioCallback, ioOptions); //Creating the intersection observer by calling its constructor and passing it a callback function to be run whenever a threshold is crossed in one direction or the other
    for (let element of elements) { intersectionObserver.observe(element.nativeElement) }

  }
}



/*

 * 
 * @param elements 
 * @param intersectionObserverInit 
 * * root - viewport by default. 
 * * threshold - how much of the element is the viewport. 
 * * rootMargin 
 
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

*/
