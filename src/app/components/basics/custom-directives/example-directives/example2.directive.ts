import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appExample2]',
})
export class Example2Directive {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  //@Hostlistener example 2 (div element)
  @HostListener('mouseover') onMouseOver() {
    let quote = this.elementRef.nativeElement.querySelector('.secretParagraph');
    this.renderer.setStyle(quote, 'display', 'block');
  }

  @HostListener('mouseleave') onMouseLeave() {
    let quote = this.elementRef.nativeElement.querySelector('.secretParagraph');
    this.renderer.setStyle(quote, 'display', 'none');
  }
}
