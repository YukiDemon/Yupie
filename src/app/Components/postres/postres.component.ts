import { Component } from '@angular/core';
import { Postre } from 'src/app/Models/postre.model';

@Component({
  selector: 'app-postres',
  templateUrl: './postres.component.html',
  styleUrls: ['./postres.component.css']
})
export class PostresComponent {
  title = 'Yuppie';
  
  showOrder : boolean = false;

  showHideSaltyDessert : boolean = false;
  SaltyText: string = 'POSTRES SALADOS'
  SaltyDisabled = false;
  
  showHideSweetDessert : boolean = false;
  SweetText: string = 'POSTRES DULCES';
  SweetDisabled = false;

  
  showHideOrder(){
    this.showOrder = !this.showOrder 
  }

  sweetHide(){
    this.showHideSweetDessert = !this.showHideSweetDessert

    if(this.showHideSweetDessert){
      this.SweetText  = "REGRESAR";
      this.SaltyDisabled = true;
    }
    else {
      this.SweetText  = "POSTRES DULCES";
      this.SaltyDisabled = false;
    }
  };

  saltyHide(){
    this.showHideSaltyDessert = !this.showHideSaltyDessert
    if(this.showHideSaltyDessert){
      this.SaltyText  = "REGRESAR";
      this.SweetDisabled = true;
    }
    else{
      this.SaltyText  = "POSTRES SALADOS";
      this.SweetDisabled = false;
    }
  }

  sweetDessert : Postre[] = [
    {nombre:'Pie de Manzana', precio: 25},
    {nombre:'Pie de Piña', precio: 30},
    {nombre:'Pie de Limón', precio: 35}];
  
  saltyDessert : Postre[] = [
    {nombre:'Tequeños de Jamon y Queso', precio: 25},
    {nombre:'Tequeños de Aji de gallina', precio: 30},
    {nombre:'Tequeños de Lomo saltado', precio: 35}];

  
}