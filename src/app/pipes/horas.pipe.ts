import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'horas',
  standalone: true
})
export class HorasPipe implements PipeTransform {

   transform(value: number): string {
    if (!value) return '';
    return value === 1 ? '1 hora' : `${value} horas`;
  }

}
