import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GaleriaBuenasPage } from './galeria-buenas.page';
import {FormBuilder,FormControl,Validators,AbstractControl, FormGroup,ReactiveFormsModule } from '@angular/forms';


import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: GaleriaBuenasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    IonicModule,
    RouterModule.forChild(routes)
  ],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [GaleriaBuenasPage]
})
export class GaleriaBuenasPageModule {}
