import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css'],
})
export class SenderComponent {
  
  message: any = 'Message from Sender Component to Receiver Component!';

  constructor(private messageService: MessageService) {
  }

  sendMessage(): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage(
      this.message
    );
    console.log('Receiver Component: ' + this.message)
  }

  clearMessages(): void {
    // clear messages
    this.messageService.clearMessages();
  }
}
