import { Component, OnInit } from '@angular/core';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-logging-service',
  templateUrl: './logging-service.component.html',
  styleUrls: ['./logging-service.component.css'],
  providers: [LoggingService], //providing the logging service to this component - not neccessary if service class is marked with @Injectable!
})
export class LoggingServiceComponent implements OnInit {
  constructor(private loggingService: LoggingService) {
    this.loggingService.log('Hello!');
  }

  ngOnInit(): void {}
}
