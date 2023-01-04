import { ThisReceiver } from '@angular/compiler';
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

  transform(){
    this.open = !this.open;
    this.ocult = !this.ocult
  }

  mostrarpostres(){
    this.postre = true;
  }

  mostrarcalculadora(){
    this.calculadora = !this.calculadora;
  }

  mostrarpersonas(){
    this.personas =true;
  }

}
