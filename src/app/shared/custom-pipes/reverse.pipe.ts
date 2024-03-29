import { Pipe, PipeTransform } from '@angular/core';

//a custom pipe to reverse a string
@Pipe({
    name: 'reverse',
    standalone: true,
})
export class ReversePipe implements PipeTransform {
  transform(value: any): any {
    return value.split('').reverse().join('');
  }
}
