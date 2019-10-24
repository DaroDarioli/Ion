import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GaleriaMisMalasPage } from './galeria-mis-malas.page';

const routes: Routes = [
  {
    path: '',
    component: GaleriaMisMalasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GaleriaMisMalasPage]
})
export class GaleriaMisMalasPageModule {}
