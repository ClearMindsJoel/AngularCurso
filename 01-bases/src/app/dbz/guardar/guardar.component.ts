import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.component.html',
  styleUrls: ['./guardar.component.css']
})
export class GuardarComponent{
  @Input() personajes :any[]=[];
  @Input() nuevo: Personaje={}
  @Output() onNuevoPersonaje: EventEmitter<Personaje>=  new EventEmitter<Personaje>();

  agregar():void{
    if(this.nuevo.nombre?.trim().length===0){
      return;
    }
    this.onNuevoPersonaje.emit(this.nuevo);
   
    this.nuevo={
    }
    
  }

}
