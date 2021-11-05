import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css'],
})
export class ReceiverComponent implements OnDestroy {
  messages: any[] = [];
  subscription?: Subscription;

  constructor(private messageService: MessageService) {}

  checkMessages() {
    //subscribe to messages
    this.subscription = this.messageService
      .getMessage()
      .subscribe((message) => {
        if (message) {
          this.messages.push(message);
          console.log('Receiver component received: ' + message.text);
        } else {
          //clear messages when empty message received
          this.messages = [];
        }
      });
  }

  ngOnDestroy() {
    //unsubscribe to ensure no memory leaks
    this.subscription?.unsubscribe();
  }
}
