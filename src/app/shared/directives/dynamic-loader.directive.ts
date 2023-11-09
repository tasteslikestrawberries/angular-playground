import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[dynamicLoader]',
    standalone: true,
})
export class DynamicLoaderDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
