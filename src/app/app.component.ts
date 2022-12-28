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
  personas : boolean = false;

  mostrarpostres(){
    this.postre = !this.postre;
    if(this.postre = !this.postre){
      this.calculadora = false
    }
  }

  mostrarcalculadora(){
    this.calculadora = !this.calculadora;
    if(this.calculadora = !this.calculadora){

    }
  }

  mostrarpersonas(){
    this.personas = !this.personas;
    if(this.personas = !this.personas){

    }
  }
}
