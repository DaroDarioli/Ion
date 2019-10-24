import { Injectable } from '@angular/core';

import * as firebase from 'firebase';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { User } from '../Modulos/User';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private router: Router) { }

  // IngresoFirebase(user: User):any {
  //   firebase.auth().signInWithEmailAndPassword(user.correo, user.clave)
  //     .then(function (resultado) {
  //       this.router.navigateByUrl('opciones')
  //       return resultado;
  //     }      

  //     ).catch(function (error) {
  //       var errorCode = error.code;
  //       var errorMessage = error.message;
  //       console.log(errorMessage);
  //       return error;
  //     });
     
  //}

}
