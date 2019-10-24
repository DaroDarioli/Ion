import { Component, OnInit } from '@angular/core';
import { User } from '../Modulos/User';
import { GeneralService } from '../Servicios/general.service';
import { UsuariosService } from '../Servicios/usuarios.service';


import * as firebase from 'firebase';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { ImplicitReceiver } from '@angular/compiler';

import { Router } from '@angular/router'

@Component({
  selector: 'app-test-ingresos',
  templateUrl: './test-ingresos.page.html',
  styleUrls: ['./test-ingresos.page.scss'],
})
export class TestIngresosPage implements OnInit {


  lista: Array<User> = new Array<User>();
  auxiliar: User;

  constructor(private servicio: GeneralService, private servicioUsuarios: UsuariosService, private router: Router) {

    this.lista = this.servicioUsuarios.Usuarios();

  }

  ngOnInit() {
  }

  Ingresar(evento) {
    let opcion = evento.toElement.id;

    switch (opcion) {
      case "1":
        this.IngresoFirebase(this.lista[0]);        
        break;
      case "2":
        this.IngresoFirebase(this.lista[1]);        
        break;
      case "3":
        this.IngresoFirebase(this.lista[2]);        
        break;
      case "4":
        this.IngresoFirebase(this.lista[3]);        
        break;
      case "5":
        this.IngresoFirebase(this.lista[4]);        
        break;
      default:
        console.log("Mi burro perdió el zapato");
        break;
        
    }
    this.router.navigateByUrl('opciones')
  }


  IngresoFirebase(user: User) {
    firebase.auth().signInWithEmailAndPassword(user.correo, user.clave)
      .then(() =>
      localStorage.setItem('usuario', user.perfil)        

      ).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  
  salir()
  {
    this.router.navigate(['ingreso']);
  }

}
