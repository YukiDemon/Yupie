import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Yuppie';
  
  showHideSweetDessert : boolean = false;
  SweetText: string = 'POSTRES DULCES';
  SweetDisabled = false;

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

  showHideSaltyDessert : boolean = false;
  SaltyText: string = 'POSTRES SALADOS'
  SaltyDisabled = false;

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
}
