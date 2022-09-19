import {Component} from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{title}}</h1>

    <h3>La base es : <strong></strong></h3>

    <button (click)="acumular(-1)"> -{{base}} </button>
    <span>{{numero}}</span>
    <button (click)="acumular(1)"> +{{base}} </button>


    
    `
})

export class ContadorComponent{
    public title: string = 'bases';
    public numero: number=  10;
    public base: number = 5;
    acumular(valor: number){
      
      this.numero += (((valor)*this.base));
  
    }
}