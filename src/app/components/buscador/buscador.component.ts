import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HereoesService } from '../../Services/heroes.services';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent implements OnInit {

  /**
   * Arreglo de heroes que coinciden con la búsqueda
   */
  heroes: Heroe[] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute, private hereoesService: HereoesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this.hereoesService.buscarHeroes(this.termino);
    });
  }

}
