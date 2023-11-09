import { Component, OnInit, inject } from '@angular/core';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-logging-service',
  templateUrl: './logging-service.component.html',
  styleUrls: ['./logging-service.component.scss'],
  providers: [LoggingService],
  standalone: true,
})
export class LoggingServiceComponent implements OnInit {
  private loggingService = inject(LoggingService);

  ngOnInit(): void {
    this.loggingService.log('Hello!');
  }
}
