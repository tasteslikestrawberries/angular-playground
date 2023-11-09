import { Component, OnInit } from '@angular/core';
import { LoggingService } from './logging.service';

@Component({
    selector: 'app-logging-service',
    templateUrl: './logging-service.component.html',
    styleUrls: ['./logging-service.component.scss'],
    providers: [LoggingService],
    standalone: true,
})
export class LoggingServiceComponent implements OnInit {
  constructor(private loggingService: LoggingService) {
    this.loggingService.log('Hello!');
  }

  ngOnInit(): void {}
}
