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
import { arregloPersonas } from './Services/arregloPersonas.services';
import { loginService } from './Services/loginService.service';
import { PresupuestoComponent } from './Components/presupuesto/presupuesto.component';
import { HeaderComponent } from './Components/presupuesto/header/header.component';
import { FormularioComponent } from './Components/presupuesto/formulario/formulario.component';
import { IngresosComponent } from './Components/presupuesto/ingresos/ingresos.component';
import { EgresosComponent } from './Components/presupuesto/egresos/egresos.component';

@NgModule({
  declarations: [
    AppComponent,
    PostresComponent,
    PostresDulcesComponent,
    PostresSaladosComponent,
    CalculadoraComponent,
    PersonasComponent,
    PedidosComponent,
    PresupuestoComponent,
    HeaderComponent,
    FormularioComponent,
    IngresosComponent,
    EgresosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [arregloPersonas,loginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
