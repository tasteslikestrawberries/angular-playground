import { Directive, ViewContainerRef, inject } from '@angular/core';

@Directive({
  selector: '[dynamicLoader]',
  standalone: true,
})
export class DynamicLoaderDirective {
  viewContainerRef = inject(ViewContainerRef);
}
