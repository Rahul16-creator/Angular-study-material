import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string) {

    const array = [];
    if (value.length == 0 || filterString=='') return value;

    for (let i of value) {
      if (i[propName] === filterString) {
        array.push(i);
      }
    }
    return array;
  }

}
