import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appExample]',
})
export class ExampleDirective {
  constructor(elementRef: ElementRef, renderer: Renderer2) {
    renderer.setStyle(elementRef.nativeElement, 'backgroundColor', '#ff00e0')
  }
}