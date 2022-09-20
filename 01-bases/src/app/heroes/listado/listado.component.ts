import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent{

  heroes: string[]= ['Spiderman','Ironman']
  heroeBorrado?: string;
  marcaBorrado: boolean=false;
  borrarHeroe(): void{
    
    this.heroeBorrado=this.heroes.shift();
  (!this.heroeBorrado)?
      this.marcaBorrado= false
    :
    this.marcaBorrado=true;
  }
}
