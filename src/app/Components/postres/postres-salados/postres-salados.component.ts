import { Component, Input } from '@angular/core';
import { Postre } from 'src/app/Models/postre.model';

@Component({
  selector: 'app-postres-salados',
  templateUrl: './postres-salados.component.html',
  styleUrls: ['./postres-salados.component.css']
})
export class PostresSaladosComponent {
  @Input() salty : Postre;
}
