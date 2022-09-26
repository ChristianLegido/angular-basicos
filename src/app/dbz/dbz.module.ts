//Importaciones de Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Importaciones de Terceros
import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from './services/dbz.service';

//Importaciones Creadas por Nosotros


@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  exports: [ //QUE NO SE TE OLVIDE EXPORTAR!!
    MainPageComponent
  ],
  imports: [
    //Los modulos van en los imports
    CommonModule,
    FormsModule
  ],
  providers: [ //Aqui Ponemos los servicios que vayamos a usar
    DbzService
  ]
})
export class DbzModule { }
