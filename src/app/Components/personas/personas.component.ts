import { Component } from '@angular/core';
import { Persona } from 'src/app/Models/persona.model';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
  nombreInput : string= '';
  apellidoInput : string='';

  personas : Persona[] = [];

  

  Add(){
    let addpersona = new Persona(this.nombreInput , this.apellidoInput)
    this.personas.push(addpersona);
    this.nombreInput = '';
    this.apellidoInput = '';
  }
}
