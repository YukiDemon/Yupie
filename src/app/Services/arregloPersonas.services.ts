import { EventEmitter, Injectable } from "@angular/core";
import { Persona } from "../Models/persona.model";
import { loginService } from "./loginService.service";

@Injectable()
export class arregloPersonas{
    personas : Persona[] = [ 
        new Persona("Guillermo","Campos"),
        new Persona("Hilary","Gálvez"),
        new Persona("Antoine","Campos")
    ]; 

    saludar = new EventEmitter<string>();

    constructor(private loginService:loginService){
                    this.saludar.subscribe((nombreInput:string) => alert("Se editará este usuario"));
                }

    agregarPersonas(persona: Persona){
        this.loginService.enviaMensaje("Agregamos persona " + persona.nombre + " " + persona.apellido)
        this.personas.push(persona)
    }
}