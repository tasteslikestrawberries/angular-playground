import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface IHeader {
  mainTitle?: string;
  title?: string;
  subtitle?: string;
}

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private subject = new BehaviorSubject<IHeader>({
    mainTitle: '',
    title: '',
    subtitle: '',
  });

  header$ = this.subject.asObservable();

  constructor() {}

  setHeader = (header: IHeader) => {
    this.subject.next(header)
  };
}
