import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  template: `
    <p>
      listado works!
    </p>
  `,
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  constructor( private heroesService: HeroesService) { }


  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe( resp => {
      console.log(resp);
    });
  }


}
