import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appExample]',
  standalone: true,
})
export class ExampleDirective {
  numberOfClicks = 0;

  private renderer = inject(Renderer2);
  private elementRef = inject(ElementRef);

  ngOnInit() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      '#ff00e0',
    );
  }

  //@Hostlistener (listening to events on element; click is the event here) showcase 1
  //We decorate a class method with @HostListener configuring it to call the function on every click event
  @HostListener('click', ['$event.target'])
  onClick(btn: any) {
    console.log('Number of clicks:', this.numberOfClicks++);
  }
}
