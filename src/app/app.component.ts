import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postre : boolean = false;
  calculadora : boolean = false;

  mostrarpostres(){
    this.postre = !this.postre;
  }

  mostrarcalculadora(){
    this.calculadora = !this.calculadora;
  }

  // mostrarpersonas(){}
}
