import { Component, Input } from '@angular/core';
import { Postre } from 'src/app/Models/postre.model';

@Component({
  selector: 'app-postres-dulces',
  templateUrl: './postres-dulces.component.html',
  styleUrls: ['./postres-dulces.component.css']
})
export class PostresDulcesComponent {
  @Input() sweet : Postre;
}
