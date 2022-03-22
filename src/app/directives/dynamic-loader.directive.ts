import { Directive, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicLoader]'
})
export class DynamicLoaderDirective {
  @Input() appDynamicLoader: any;

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    this.viewContainerRef.createComponent(this.appDynamicLoader)
  }

}
