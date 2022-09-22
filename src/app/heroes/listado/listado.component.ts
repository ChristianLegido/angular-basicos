import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})


export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Batman', 'Hulk', 'Thor']

  heroeBorrado: string = '';

  borrarPrimerHeroe() {
    console.log('Borrando primer heroe...')
    this.heroeBorrado = this.heroes.shift() || '';
  }

  borrarUltimoHeroe(){
    console.log('Borrando ultimo heroe...')
    this.heroeBorrado = this.heroes.pop() || '';
  }
  
  

}


