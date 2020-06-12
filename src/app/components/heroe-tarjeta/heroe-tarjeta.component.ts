import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from '../../Services/heroes.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: Heroe;
  @Input() index: number;

  /**
   * Evento que se utiliza para enviar el evento al hijo
   */
  @Output() heroeSeleccionado: EventEmitter<number>;


  constructor(private router: Router) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(){
    this.heroeSeleccionado.emit( this.index );
  }
}
