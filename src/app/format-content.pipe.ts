import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatContent'
})
export class FormatContentPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace(/(?:\r\n|\r|\n)/g, '<br />');
  }

}
