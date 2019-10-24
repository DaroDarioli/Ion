import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {ComponentsModule} from '../components.module';


import {  CUSTOM_ELEMENTS_SCHEMA,   NO_ERRORS_SCHEMA } from '@angular/core';

import { IonicModule } from '@ionic/angular';


import { Component, OnInit, Input } from '@angular/core';

import { Imagen } from '../Modulos/Imagen';

@Component({
  selector: 'app-generica',
  templateUrl: './generica.component.html',
  styleUrls: ['./generica.component.scss'],
})

  
@NgModule({  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA,   NO_ERRORS_SCHEMA ],
})


export class GenericaComponent implements OnInit {



  @Input() imagenes:Imagen[];

  constructor() { }

  ngOnInit() {}

}
