import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ErrorLogueoPage } from './error-logueo.page';

const routes: Routes = [
  {
    path: '',
    component: ErrorLogueoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ErrorLogueoPage]
})
export class ErrorLogueoPageModule {}
