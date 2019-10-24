import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IngresoPage } from './ingreso.page';

import {FormBuilder,FormControl,Validators,AbstractControl, FormGroup,ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: IngresoPage
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
  declarations: [IngresoPage]
})
export class IngresoPageModule {}
