import { Component, OnInit } from '@angular/core';

import { storage } from 'firebase';
import * as firebase from 'firebase';

import { Imagen } from '../Modulos/Imagen';
import { Like } from '../Modulos/Like';
import { Router } from '@angular/router'
import { forEach } from '@angular/router/src/utils/collection';


//motion
import { DeviceMotion } from '@ionic-native/device-motion';
import { DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion/ngx';


@Component({
  selector: 'app-galeria-buenas',
  templateUrl: './galeria-buenas.page.html',
  styleUrls: ['./galeria-buenas.page.scss'],
})
export class GaleriaBuenasPage implements OnInit {

  public imagenes:Array<Imagen>;
  public imagenActual:Imagen;
  public valorX:number = 0;
  public likes: Array<Like>;
  public imgUrl: string = "";
  public mostrar = true;
  public usuarioActual: string;
  public caminoFoto:string;
  public imagenCargada:boolean = false;
  public indiceFoto:number = 0;



  data: any;
  suscription: any;
  //en lugar de un array le paso una imagenActual
  //al inclinar el cel pasar la imagen

  constructor(private router: Router) { }

  ngOnInit() {
    this.usuarioActual = localStorage.getItem('usuario');
    this.traerLikes();
    this.traerImagenes();
    this.observar();
  }

  traerImagenes() {

    this.imagenes = new Array<Imagen>();

    var messagesRef = firebase.database().ref().child("buenas");
    messagesRef.on("value", (snap) => {
      var data = snap.val();

      for (var key in data) {
        this.imagenes.push(data[key]);
      }

      this.imagenes.reverse();


      for (var key in this.imagenes) {
        this.imagenes[key].likes = this.likesPorFoto(this.imagenes[key].referencia);
      }
      this.cargarImagenActual();
    });
    
  }

  cargarImagenActual()
  {
    this.imagenActual = this.imagenes[this.indiceFoto];
    this.mostrar = false;  
  }

  observar() {

    var opciones: DeviceMotionAccelerometerOptions = {
      frequency: 500
    }

    this.suscription = DeviceMotion.watchAcceleration(opciones).subscribe((acceleration: DeviceMotionAccelerationData) => {
      this.data = acceleration;

      this.valorX = acceleration.x;

      if (this.valorX < 0) {

        
        //sentido horario
        //una más
        if (this.indiceFoto < this.imagenes.length) {
          this.indiceFoto = this.indiceFoto + 1;
          this.cargarImagenActual();
        }

      }

      if (this.valorX < (acceleration.x - 1)) {

        
        //sentido horario
        //una más
        if (this.indiceFoto < this.imagenes.length) {
          this.indiceFoto = this.indiceFoto + 1;
          this.cargarImagenActual();
        }

      }



      if (this.valorX > 0) {


        if (this.indiceFoto >= 1) {
          this.indiceFoto = this.indiceFoto - 1;
          this.cargarImagenActual();
        }

      }

      if (this.valorX > (acceleration.x + 1)) {


        if (this.indiceFoto >= 1) {
          this.indiceFoto = this.indiceFoto - 1;
          this.cargarImagenActual();
        }

      }

      
    });
  }



  like(imagen: Imagen) {
    
    let fechaActual = Date.now();
    var usuariosRef = firebase.database().ref().child("likes");
    usuariosRef.push({ referencia: imagen.referencia, usuario: this.usuarioActual, fecha: fechaActual }).then(() => {
      this.mostrar = true;
      this.traerLikes();
      this.traerImagenes();
    });
  }

  puedeDarleLike(imagen: Imagen): boolean {

    for (var key in this.likes) {
      if (this.likes[key].referencia == imagen.referencia) {
        if (this.likes[key].usuario == this.usuarioActual) {
          return false;
        }
      }
    }
    return true;
  }

  likesPorFoto(pReferencia: string): number {

    let contador = 0;
    for (var key in this.likes) {
      if (this.likes[key].referencia == pReferencia) {
        contador += 1;
      }
    }
    return contador;
  }

  traerLikes() {

    this.likes = new Array<Like>();
    var messagesRef = firebase.database().ref().child("likes");
    messagesRef.on("value", (snap) => {
      var data = snap.val();
      for (var key in data) {
        this.likes.push(data[key]);
      }
  
    });

  }

  async freno(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("fired"));
  }

  salir() {
    this.router.navigate(['ingreso']);
  }

}
