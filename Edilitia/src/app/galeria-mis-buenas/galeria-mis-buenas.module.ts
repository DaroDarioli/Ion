import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GaleriaMisBuenasPage } from './galeria-mis-buenas.page';

import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



const routes: Routes = [
  {
    path: '',
    component: GaleriaMisBuenasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [GaleriaMisBuenasPage]
})
export class GaleriaMisBuenasPageModule {}
