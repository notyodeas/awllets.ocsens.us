import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nottrims',
  standalone: true
})
export class NottrimsPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
      const adta = value.replace('/ +/g', '');
      return adta;
  }

}
