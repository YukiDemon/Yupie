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
  Ocult : boolean = false;
  spanOcult1 : boolean = false;
  spanOcult2 : boolean = false;

  A(event: Event){
    this.number1 = (<HTMLInputElement>event.target).value
  }

  B(event: Event){
    this.number2 = (<HTMLInputElement>event.target).value
  }


  Suma(){
      this.result = parseInt(this.number1) + parseInt(this.number2)
      this.Ocult = !this.Ocult
  }

  Resta(){
      this.result = parseInt(this.number1) - parseInt(this.number2)
      this.Ocult = !this.Ocult
  }

  Multiplicar(){
      this.result = parseInt(this.number1) * parseInt(this.number2)
      this.Ocult = !this.Ocult
  }

  Dividir(){
      this.result = parseInt(this.number1) / parseInt(this.number2)
      this.Ocult = !this.Ocult
  }

  SpanOcult(){
    if(this.number1 == ''){
      this.spanOcult1 = !this.spanOcult1
    }else {
      this.spanOcult1  == false;
    }
    
    if(this.number2 == ''){
      this.spanOcult2 = !this.spanOcult2
    }else{
      this.spanOcult2  == false;
    }
  }
  
}
