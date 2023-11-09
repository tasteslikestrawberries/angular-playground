import { Component, ComponentRef, OnInit, ViewChild } from '@angular/core';
import { DynamicLoaderDirective } from 'src/app/shared/directives/dynamic-loader.directive';
import { BlueComponent } from './blue/blue.component';
import { RedComponent } from './red/red.component';
import { GreenComponent } from './green/green.component';

interface DynamicComponent {
  type: any;
}

@Component({
  selector: 'app-view-container-ref',
  templateUrl: './view-container-ref.component.html',
  styleUrls: ['./view-container-ref.component.scss'],
})
export class ViewContainerRefComponent implements OnInit {
  @ViewChild(DynamicLoaderDirective, { static: true })
  dynamicLoader!: DynamicLoaderDirective;
  //private interval: number|undefined;
  private currentIndex = 0;

  private components: DynamicComponent[] = [
    { type: BlueComponent },
    { type: RedComponent },
    { type: GreenComponent },
  ];

  public ngOnInit(): void {
    this.loadComponent();
    /*this.loadComponent();  
    this.rotateMessages(); */
  }

  public ngOnDestroy(): void {
    //clearInterval(this.interval);
  }

  /*private loadComponent(): void {  
    if (this.messages.length === 0) return;  
    this.currentIndex = (this.currentIndex + 1) % this.messages.length;  
    const message = this.messages[this.currentIndex];  
  
    const viewContainerRef = this.dynamicLoader.viewContainerRef;  
    viewContainerRef.clear();  //removes the old component, so new one can take its place
  
    const componentRef = viewContainerRef.createComponent<any>(message.type);  
  }  
  
  private rotateMessages(): void {  
    this.interval = window.setInterval(() => {  
      this.loadComponent();  
    }, 2000);  
  }  */

  loadComponent() {
    if (this.components.length === 0) return;

    this.currentIndex = this.currentIndex + 1;

    if (this.currentIndex >= this.components.length) {
      this.currentIndex = 0;
    }

    const component = this.components[this.currentIndex];
    const viewContainerRef = this.dynamicLoader.viewContainerRef;

    //removes the previous component view, so new one can take its place, not neccessary if all components should be displayed
    viewContainerRef.clear();

    viewContainerRef.createComponent<DynamicComponent>(component.type);
  }
}
