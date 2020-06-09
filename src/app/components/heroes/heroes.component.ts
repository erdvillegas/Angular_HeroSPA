import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HereoesService, Heroe } from '../../Services/heroes.services';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(
    private _heroesService: HereoesService,
    private _router: Router
  ) {


  }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe(idx: number) {
    this._router.navigate(['/heroe', idx]);
  }

}
