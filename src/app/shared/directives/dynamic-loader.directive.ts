import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dynamicLoader]',
})
export class DynamicLoaderDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
