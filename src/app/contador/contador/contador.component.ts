import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
    <h1>Hola Mundo!</h1>
    <h1>{{title}}</h1>

    <h1>-----------------------------------------------------------</h1>

    <h1>Tarea 1: "Incializamos en 5"</h1>
    <h3>La base es: <strong>{{base}}</strong></h3>

    <button (click)= acumular(0)> +5 </button>

    <span>{{numero}}</span>

    <button (click)= eliminar(0)> -5 </button>
    
    `
})

export class ContadorComponent{

  title: string = 'Contador APP';
  numero: number = 10;
  base: number = 5

  /*sumar(){
    this.numero += 1
  }
  restar(){
    this.numero -= 1
  }*/

  acumular(base: number){
    this.numero += base + 5;
  }

  eliminar(base: number){
    this.numero -= base + 5;
  }

}