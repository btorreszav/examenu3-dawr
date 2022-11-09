import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  array: any = [
    {
      i: 0,
      a: 'Gatos',
      b: 'https://static.dw.com/image/58956274_303.jpg',
    },
    {
      i: 1,
      a: 'Perros',
      b: 'https://www.fundacion-affinity.org/sites/default/files/los-10-sonidos-principales-del-perro.jpg',
    },
    {
      i: 2,
      a: 'Pinguinos',
      b: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/15C01/production/_106598098_gettyi33758.jpg',
    },
  ];
  tabRender = this.array[0].i;
  desplegar(i: number) {
    this.tabRender = i;
  }
}
