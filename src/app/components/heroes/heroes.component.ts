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
    private heroesService: HereoesService,
    private router: Router
  ) {


  }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }

}
