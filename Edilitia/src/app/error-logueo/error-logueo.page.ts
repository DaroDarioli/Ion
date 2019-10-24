import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-logueo',
  templateUrl: './error-logueo.page.html',
  styleUrls: ['./error-logueo.page.scss'],
})
export class ErrorLogueoPage implements OnInit {

  mostrar:boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.mostrar = false;
  }

  volverALogueo(){
    this.router.navigate(['ingreso']);
  }


  registrarse(){
    this.router.navigate(['registro']);
  }

  salir()
  {
    this.router.navigate(['ingreso']);
  }
   

}
