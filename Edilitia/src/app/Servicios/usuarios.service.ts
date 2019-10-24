import { Injectable } from '@angular/core';

import { User } from '../Modulos/User';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  admin: User = new User("1", "admin@gmail.com", "111111", "admin", "femenino");
  invitado: User = new User("2", "invitado@gmail.com", "222222", "invitado", "femenino");
  usuario: User = new User("3", "usuario@gmail.com", "333333", "usuario", "masculino");
  anonimo: User = new User("4", "anonimo@gmail.com", "444444", "usuario", "masculino");
  tester: User = new User("5", "tester@gmail.com", "555555", "tester", "femenino");

  constructor() { }

  public Usuarios(): Array<User> {

    let lista = new Array<User>();
    lista.push(this.admin);
    lista.push(this.invitado);
    lista.push(this.usuario);
    lista.push(this.anonimo);
    lista.push(this.tester);

    return lista;
  }
}
