import { Component } from '@angular/core';

@Component({
  selector: 'app-postres-dulces',
  templateUrl: './postres-dulces.component.html',
  styleUrls: ['./postres-dulces.component.css']
})
export class PostresDulcesComponent {


  sweetDessert : Array<any> = [
    {nombre:'Pie de Manzana', precio: 25 + ' ' + 'soles'},
    {nombre:'Pie de Piña', precio: 30 + ' ' + 'soles'},
    {nombre:'Pie de Manzana', precio: 35 + ' ' + 'soles'}];
}
