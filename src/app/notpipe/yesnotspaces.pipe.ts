import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesnotspaces',
  standalone: true
})
export class YesnotspacesPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const adta = value.replace(/\s/g, "");
    return adta;
    0
  }

}
