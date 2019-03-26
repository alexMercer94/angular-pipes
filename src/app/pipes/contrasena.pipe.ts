import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {
  transform(value: any, activar: boolean = true): any {
    let cadena = '';
    if (activar) {
      for (let i = 0; i < value.length; i++) {
        cadena += '*';
      }
      return cadena;
    } else {
      return value;
    }
  }
}
