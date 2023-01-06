import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostresDulcesComponent } from './Components/postres/postres-dulces/postres-dulces.component';
import { PostresSaladosComponent } from './Components/postres/postres-salados/postres-salados.component';
import { CalculadoraComponent } from './Components/calculadora/calculadora.component';
import { PostresComponent } from './Components/postres/postres.component';
import { PersonasComponent } from './Components/personas/personas.component';
import { FormsModule } from '@angular/forms';
import { PedidosComponent } from './Components/postres/pedidos/pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    PostresComponent,
    PostresDulcesComponent,
    PostresSaladosComponent,
    CalculadoraComponent,
    PersonasComponent,
    PedidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
