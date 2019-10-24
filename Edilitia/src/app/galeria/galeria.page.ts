import { Component, OnInit, Input } from '@angular/core';
import { Imagen } from '../Modulos/Imagen';


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {

  @Input() imagenes:Imagen[];

  constructor() { }

  ngOnInit() {
  }

}
