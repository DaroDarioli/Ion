import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {ComponentsModule} from '../components.module';

import { IonicModule } from '@ionic/angular';

import { GaleriaMalasPage } from './galeria-malas.page';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


const routes: Routes = [
  {
    path: '',
    component: GaleriaMalasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],  
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [GaleriaMalasPage]
})
export class GaleriaMalasPageModule {}
