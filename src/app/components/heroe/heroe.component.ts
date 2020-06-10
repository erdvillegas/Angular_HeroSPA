import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HereoesService } from 'src/app/Services/heroes.services';
import { Heroe } from '../../Services/heroes.services';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: Heroe = undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroeServices: HereoesService,
    private router: Router
  ) {

    console.log("Estoy en heroe");
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this.heroeServices.getHeroe(params["id"]);
    });

    console.log(this.heroe);
  }
  
  regresarHeroes(){
    this.router.navigate(['/heroes']);
  }

}
