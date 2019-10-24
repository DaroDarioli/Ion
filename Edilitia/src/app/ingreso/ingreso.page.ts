import { Component, OnInit } from '@angular/core';

import { User } from '../Modulos/User';
import { Router } from '@angular/router'


import * as firebase from 'firebase';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { GeneralService } from '../Servicios/general.service';

import { FormsModule, FormBuilder, FormControl, Validators, AbstractControl, FormGroup, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {

  user: User;
  mostrar:boolean = true;
  formgroup: FormGroup;
  email: AbstractControl;
  password: AbstractControl;

  constructor(private router: Router, private servicio: GeneralService, ) {
    this.user = new User("", "", "", "", "");

    this.formgroup = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.email
      ]),

      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(6)]       
      ),
    })
    this.email = this.formgroup.controls['email'];
    this.password = this.formgroup.controls['password'];

    this.mostrar = false;
    //localStorage.clear();
  }

  ngOnInit() {
    localStorage.clear();
  }

  Registrarse() {
    this.router.navigate(['registro']);
  }

  Testeo() {
    this.router.navigateByUrl('test-ingresos');
  }

  async Ingresar(usuario: User) {

    if (this.user.correo == "") {
     
      this.email.markAsTouched();
    }
    else if (this.user.clave == "")
    {    
      this.password.markAsTouched();
    }
    else {
      this.traerUsuario(usuario.correo)

      firebase.auth().signInWithEmailAndPassword(usuario.correo, usuario.clave)
        .then((firebaseUser) => {
          if (firebaseUser) {
            this.paginaPrincipal();
          }

        }).catch((error) => {

          this.informarError(error)

          if (error.message.length > 0) {
            this.informarError(error)
          }
        });
    }

  }

  informarError(error: any): any {
    this.router.navigate(['error-logueo']);
  }

  paginaPrincipal(): any {
    this.router.navigate(['opciones']);
  }

  traerUsuario(mailActual: string): string {
    var usuariosRef = firebase.database().ref().child("usuarios");
    usuariosRef.on("value", (snap) => {
      var data = snap.val();

      for (var key in data) {
        if (mailActual === (data[key]).email) {
          localStorage.setItem("usuarioActual", (data[key].user));
        }
      }
    });
    return "";

  }

  async freno(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("fired"));
  }


}
