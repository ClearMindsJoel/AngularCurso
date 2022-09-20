import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { ContadorModule } from '../contador/contador.module';
@NgModule({
    //componentes
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    //Los campos visibles
    exports:[
        ListadoComponent
    ],
    imports:[
        //Sirve para usar directivas
        CommonModule,
        ContadorModule
    ]
})

export class HeroeModule{

}