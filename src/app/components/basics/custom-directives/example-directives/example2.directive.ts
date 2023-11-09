import { Directive, ElementRef, HostListener, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[appExample2]',
  standalone: true,
})
export class Example2Directive {
  private renderer = inject(Renderer2);
  private elementRef = inject(ElementRef);

  //@Hostlistener example 2 (div element)
  @HostListener('mouseover') onMouseOver() {
    const quote =
      this.elementRef.nativeElement.querySelector('.secretParagraph');
    this.renderer.setStyle(quote, 'display', 'block');
  }

  @HostListener('mouseleave') onMouseLeave() {
    const quote =
      this.elementRef.nativeElement.querySelector('.secretParagraph');
    this.renderer.setStyle(quote, 'display', 'none');
  }
}
