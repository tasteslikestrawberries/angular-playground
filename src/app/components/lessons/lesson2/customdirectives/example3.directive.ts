import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appExample3]',
})
export class Example3Directive {
  //@HostBinding showcase
  @HostBinding('style.backgroundColor') backgroundColor: string = 'pink';
  constructor() {}
}
