import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostresDulcesComponent } from './Components/Postres/postres-dulces/postres-dulces.component';
import { PostresSaladosComponent } from './Components/Postres/postres-salados/postres-salados.component';
import { CalculadoraComponent } from './Components/calculadora/calculadora.component';

@NgModule({
  declarations: [
    AppComponent,
    PostresDulcesComponent,
    PostresSaladosComponent,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
