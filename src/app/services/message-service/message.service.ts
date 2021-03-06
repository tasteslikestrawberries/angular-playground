/*With the message service you can subscribe to new messages in any component with onMessage() method,
 send messages from any component with the sendMessage(message: string) method, and clear messages from 
 any component with the clearMessages() method.*/

import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

//BehaviorSubject requires an initial value and emits the current value to new subscribers

@Injectable({ providedIn: 'root' })
export class MessageService {
  private mySubject = new BehaviorSubject<any>('initialValue');

  sendMessage(message: any) {
    this.mySubject.next({ text: message });
  }

  /*The clearMessages() method actually just sends an empty message 
  by calling this.subject.next() without any arguments, the logic to 
  clear the messages when an empty message is received is in the component*/
  clearMessages() {
    this.mySubject.next('NextValue');
  }

  getMessage(): Observable<any> {
    return this.mySubject.asObservable(); //don'texpose the Subject object directly to your components, return Observable version of it
  }
}
