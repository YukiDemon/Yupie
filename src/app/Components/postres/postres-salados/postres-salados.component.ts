import { Component } from '@angular/core';

@Component({
  selector: 'app-postres-salados',
  templateUrl: './postres-salados.component.html',
  styleUrls: ['./postres-salados.component.css']
})
export class PostresSaladosComponent {
  SaltyDessert : Array<any> = [
    { nombre:'Tequeños de Jamon y Queso', precio: 25 + ' ' + 'soles'},
    {nombre:'Tequeños de Aji de gallina', precio: 30 + ' ' + 'soles'},
    {nombre:'Tequeños de Lomo saltado', precio: 35 + ' ' + 'soles'}];
}
