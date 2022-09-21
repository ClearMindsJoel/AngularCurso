import { Component, OnInit } from '@angular/core';
import {Personaje} from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{
  personajes: Personaje[]=[{nombre:'Goku',poder:15000},{nombre:'Vegeta',poder:14500}];


  cambiarNombre(event:any): void{
    console.log(event)
  }

  nuevo:Personaje={
    nombre: 'Maestro Joel',
    poder: 10000
  }

  agregarNuevoPersonaje(argumento: Personaje){
    this.personajes.push(argumento);
  }

}
