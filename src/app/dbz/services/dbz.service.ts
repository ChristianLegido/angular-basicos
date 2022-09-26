import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";



@Injectable()
export class DbzService {


    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 7000
        }
      ];

      //Para tener acceso a los personajes de manera indirecta
      get personajes(): Personaje[]{
        return [...this._personajes];//Estamos indicando que es un arreglo de personajes
      }

    constructor(){
    }

    //Definir nuevo metodo para agregar personajes
    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }

    

}