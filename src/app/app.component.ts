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

  textButton : string = "Click para mostrar";
  

  transform(){
    this.open = !this.open;
    this.ocult = !this.ocult

    this.textButton = !this.ocult ? "Click para ocultar" : "Click para mostrar";
    
    // if(!this.ocult){
    //   this.textButton = "Click para ocultar";
    // }else{
    //   this.textButton = "Click para mostrar";
    // }
    
  }

  mostrarPostres(){
    this.postre = !this.postre;
  }

  mostrarCalculadora(){
    this.calculadora = !this.calculadora;
  }

  mostrarPersonas(){
    this.personas = !this.personas;
  }

  mostrarPresupuesto(){
    this.presupuesto = !this.presupuesto;
  }


}
