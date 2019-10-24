import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.page.html',
  styleUrls: ['./opciones.page.scss'],
})
export class OpcionesPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  clickBuenas(){
    this.router.navigateByUrl('buenas')

  }

  clickMalas(){
    this.router.navigateByUrl('malas')
  }

  galeriaBuenas(){
    this.router.navigateByUrl('galeria-buenas');
  }

  galeriaMalas(){
    this.router.navigateByUrl('galeria-malas');
  }

  galeriaMisMalas(){
    this.router.navigateByUrl('galeria-mis-malas');
  }

  galeriaMisBuenas(){
    this.router.navigateByUrl('galeria-mis-buenas');
  }

  salir()
  {
    this.router.navigate(['ingreso']);
  }
}
