import { Component, OnInit } from '@angular/core';

//agregados

import { User } from '../Modulos/user';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { FormsModule, FormBuilder, FormControl, Validators, AbstractControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import * as firebase from 'firebase';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  user = {} as User;

  formgroup: FormGroup;
  email: AbstractControl;
  password: AbstractControl;
  usr: AbstractControl;

  constructor(private router: Router, private afAuth: AngularFireAuth) {

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
      'usr': new FormControl('', [
        Validators.required,
        Validators.minLength(5)]
      )
    })
    this.email = this.formgroup.controls['email'];
    this.password = this.formgroup.controls['password'];
    this.usr = this.formgroup.controls['usr'];
  }

  ngOnInit() {

  }

  async registrarse(usuario: User) {
    
    if (this.user.user == "") {

      this.usr.markAsTouched();
    }
    else if (this.user.correo == "") {

      this.email.markAsTouched();
    }
    else if (this.user.clave == "") {
      console.log("Contraseña vacía")

      this.password.markAsTouched();
    }    
    else {

      try {
        const result = await this.afAuth.auth.createUserWithEmailAndPassword(usuario.correo, usuario.clave);
        this.guardarUsuario(usuario);
      }
      catch (e) {
        console.error(e);
        this.informarError(e);
      }

    }
  }

  informarError(error: any): any {
    this.router.navigate(['error-logueo']);
  }

  guardarUsuario(usuario: User) {
    var usuariosRef = firebase.database().ref().child("usuarios");
    usuariosRef.push({ user: usuario.user, email: usuario.correo, password: usuario.clave }).then(() => {
      this.salir();
    });
  }

  salir() {
    this.router.navigate(['ingreso']);
  }

}

