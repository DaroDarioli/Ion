import { Component, OnInit } from '@angular/core';

import { Imagen } from '../Modulos/Imagen';
import * as firebase from 'firebase';

import { Router } from '@angular/router'

@Component({
  selector: 'app-galeria-mis-malas',
  templateUrl: './galeria-mis-malas.page.html',
  styleUrls: ['./galeria-mis-malas.page.scss'],
})
export class GaleriaMisMalasPage implements OnInit {

  public imagenes = new Array<Imagen>();
  public fotoCargada: boolean = false;
  mostrarSpinner: boolean = true;
  private usuarioActual: string = "";
  mostrar: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.usuarioActual = localStorage.getItem('usuario');
   
    this.traerImagenes();
  }


  traerImagenes() {

    var messagesRef = firebase.database().ref().child("buenas");
    messagesRef.on("value", (snap) => {
      var data = snap.val();

      for (var key in data) {

        console.log("En mis malas traer imagenes")
        console.log(data[key].usuario)
        console.log(this.usuarioActual);

        if (data[key].usuario == this.usuarioActual) {
          this.imagenes.push(data[key]);
        }
      }
      this.mostrar = false;      
    });
  }

  salir()
  {
    this.router.navigate(['ingreso']);
  }


  async freno(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("fired"));
  }


}
