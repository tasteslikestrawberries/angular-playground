import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css'],
})
export class SenderComponent {
  message: string = "";

  constructor(private messageService: MessageService) {}

  sendMessage = () => {
    // send message to subscribers via observable subject
    this.messageService.sendMessage(
      this.message
    );
    console.log('Sender Component sent: ' + this.message);
  }

  clearMessages(): void {
    // clear messages
    this.messageService.clearMessages();
  }
}
