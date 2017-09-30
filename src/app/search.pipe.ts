import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value, args): any {
    for (var i=0; i < JSON.parse(value).length; i++) {
        if (JSON.parse(value)[i].name === args) {
            return JSON.stringify(JSON.parse(value)[i]);
        }
    }
  }

}
