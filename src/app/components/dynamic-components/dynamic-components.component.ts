import { Component, ComponentRef, OnInit, ViewChild } from '@angular/core';
import { DynamicLoaderDirective } from 'src/app/directives/dynamic-loader.directive';
import { BlueComponent } from './blue/blue.component';
import { RedComponent } from './red/red.component';
import { GreenComponent } from './green/green.component';

interface DynamicComponent {
type: any;
}

@Component({
  selector: 'app-dynamic-components',
  templateUrl: './dynamic-components.component.html',
  styleUrls: ['./dynamic-components.component.css'],
})

export class DynamicComponentsComponent implements OnInit {
  
  @ViewChild(DynamicLoaderDirective, { static: true }) dynamicLoader!: DynamicLoaderDirective;
  private interval: number|undefined;  
  private currentIndex = 1;  
  
  private messages: DynamicComponent[] = [  
    { type: BlueComponent },  
    { type: RedComponent },  
    { type: GreenComponent }  
  ];  
  
  public ngOnInit(): void {  
    this.loadComponent();  
    this.rotateMessages();  
  }  
  
  public ngOnDestroy(): void {  
    clearInterval(this.interval);  
  }  
  
  private loadComponent(): void {  
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
  }  
}