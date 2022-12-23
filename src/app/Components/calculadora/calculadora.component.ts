import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  number1= '';
  number2= '';
  result:number = 0;

  A(event: Event){
    this.number1 = (<HTMLInputElement>event.target).value
  }

  B(event: Event){
    this.number2 = (<HTMLInputElement>event.target).value
  }


  Operation(){
    this.result = parseInt(this.number1) + parseInt(this.number2)
    console.log()
  }

  
}
