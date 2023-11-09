import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appExample3]',
  standalone: true,
})
export class Example3Directive {
  //@HostBinding showcase
  @HostBinding('style.backgroundColor') backgroundColor = 'pink';
}
