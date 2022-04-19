import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface IHeader {
  mainTitle?: string;
  title?: string;
  subtitle?: string;
  isBeta?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private subject = new BehaviorSubject<IHeader>({
    mainTitle: '',
    title: '',
    subtitle: '',
    isBeta: false
  });

  header$ = this.subject.asObservable();

  constructor() {}

  setHeader = (header: IHeader) => {
    this.subject.next(header)
  };
}
