import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostresDulcesComponent } from './Components/postres/postres-dulces/postres-dulces.component';
import { PostresSaladosComponent } from './Components/postres/postres-salados/postres-salados.component';
import { CalculadoraComponent } from './Components/calculadora/calculadora.component';
import { PostresComponent } from './Components/postres/postres.component';

@NgModule({
  declarations: [
    AppComponent,
    PostresComponent,
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
