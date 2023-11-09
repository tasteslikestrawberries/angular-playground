import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appExample]',
})
export class ExampleDirective {
  numberOfClicks = 0;

  //renderer showcase
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    renderer.setStyle(elementRef.nativeElement, 'backgroundColor', '#ff00e0');
  }

  //@Hostlistener (listening to events on element; click is the event here) showcase 1
  //We decorate a class method with @HostListener configuring it to call the function on every click event
  @HostListener('click', ['$event.target'])
  onClick(btn: any) {
    console.log('Number of clicks:', this.numberOfClicks++);
  }
}
