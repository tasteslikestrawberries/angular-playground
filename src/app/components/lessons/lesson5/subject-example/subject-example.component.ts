import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject-example',
  templateUrl: './subject-example.component.html',
  styleUrls: ['./subject-example.component.css'],
})
export class SubjectExampleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let subject = new Subject<string>();

    // We subscribe to the subject
    subject.subscribe((data) => {
      console.log('SUBJECT COMPONENT>>>> Subscriber got data: ' + data);
    });

    // We use the subject to emit data
    subject.next('Cool!');
  }
}
