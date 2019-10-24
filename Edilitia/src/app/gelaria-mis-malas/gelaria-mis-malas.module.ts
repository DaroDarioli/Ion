import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GelariaMisMalasPage } from './gelaria-mis-malas.page';

const routes: Routes = [
  {
    path: '',
    component: GelariaMisMalasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GelariaMisMalasPage]
})
export class GelariaMisMalasPageModule {}
