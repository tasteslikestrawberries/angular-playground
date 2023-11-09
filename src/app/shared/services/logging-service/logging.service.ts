import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  log(msg: any) {
    console.log('Logging Service: ' + msg);
  }
  error(msg: any) {
    console.error('Logging Service: ' + msg);
  }
  warn(msg: any) {
    console.warn('Logging Service: ' + msg);
  }
}
