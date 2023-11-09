import { Pipe, PipeTransform } from '@angular/core';

//a custom pipe to sort an array
@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: any, propName: string): any {
    return value.sort((a: any, b: any) => {
      if (a[propName] > b[propName]) {
        return 1;
      } else {
        return -1;
      }
    });
  }
}
