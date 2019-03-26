import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Alex';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  pi = Math.PI;
  a = 0.234;
  salary = 1234.5;
  heroe = {
    nombre: 'Logan',
    clave: 'Wolverin',
    edad: '500',
    address: {
      street: 'Primera',
      house: '19'
    }
  };

  valorDePromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Llego la data');
    }, 3500);
  });

  fecha = new Date();

  name = 'aleJandro cRuz vaLEra';

  video = 'Oi0sVRZ_49c';

  activar = true;
}
