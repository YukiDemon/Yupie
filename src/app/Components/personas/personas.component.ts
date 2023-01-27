import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Models/persona.model';
import { arregloPersonas } from 'src/app/Services/arregloPersonas.services';
import { loginService } from 'src/app/Services/loginService.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent implements OnInit {
  nombreInput : string= '';
  apellidoInput : string='';

  personas : Persona[] = [];

  constructor(private arregloPersonas:arregloPersonas){ } 

  ngOnInit(): void {
    this.personas = this.arregloPersonas.personas
  }

  Add(){
    let addpersona = new Persona(this.nombreInput , this.apellidoInput)
    this.nombreInput = '';
    this.apellidoInput = '';
    this.arregloPersonas.agregarPersonas(addpersona)
  }
  
  Edit(){
    this.arregloPersonas.saludar.emit(this.nombreInput)
  }
}
