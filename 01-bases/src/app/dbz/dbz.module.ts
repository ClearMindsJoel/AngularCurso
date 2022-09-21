//Importacion de angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//Importacion de terceros

//Importaciones creadas
import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { GuardarComponent } from './guardar/guardar.component';

@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    GuardarComponent
    
  ],
  exports:[
    MainPageComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
