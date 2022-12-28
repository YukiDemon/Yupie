import { Component } from '@angular/core';
import { Persona } from 'src/app/Models/persona.model';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
  personas : Persona[] = [];
}
