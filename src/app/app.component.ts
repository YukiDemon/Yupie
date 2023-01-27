import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  open : boolean = true;
  ocult : boolean = true;

  postre : boolean = false;
  calculadora : boolean = false;
  personas : boolean = false;
  presupuesto : boolean = false;

  transform(){
    this.open = !this.open;
    this.ocult = !this.ocult
  }

  mostrarPostres(){
    this.postre = true;
  }

  mostrarCalculadora(){
    this.calculadora = !this.calculadora;
  }

  mostrarPersonas(){
    this.personas =true;
  }

  mostrarPresupuesto(){
    this.presupuesto = !this.presupuesto;
  }


}
