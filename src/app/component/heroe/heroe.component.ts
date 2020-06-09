import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HereoesService } from '../../Services/heroes.services';




@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {};

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroeServices: HereoesService
  ) {

    //TODO: No se reciben los valores
    this._activatedRoute.params.subscribe(params => {
      this.heroe = this._heroeServices.getHeroe(params['id']);
    });

    console.log(this.heroe);
  }


}
