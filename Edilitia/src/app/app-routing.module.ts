import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'ingreso', loadChildren: './ingreso/ingreso.module#IngresoPageModule' },
  { path: 'test-ingresos', loadChildren: './test-ingresos/test-ingresos.module#TestIngresosPageModule' },
  { path: 'opciones', loadChildren: './opciones/opciones.module#OpcionesPageModule' },
  { path: 'buenas', loadChildren: './buenas/buenas.module#BuenasPageModule' },
  { path: 'malas', loadChildren: './malas/malas.module#MalasPageModule' },
  { path: 'galeria-buenas', loadChildren: './galeria-buenas/galeria-buenas.module#GaleriaBuenasPageModule' },
  { path: 'galeria-malas', loadChildren: './galeria-malas/galeria-malas.module#GaleriaMalasPageModule' },
  { path: 'galeria', loadChildren: './galeria/galeria.module#GaleriaPageModule' },
  { path: 'gelaria-mis-malas', loadChildren: './gelaria-mis-malas/gelaria-mis-malas.module#GelariaMisMalasPageModule' },
  { path: 'galeria-mis-malas', loadChildren: './galeria-mis-malas/galeria-mis-malas.module#GaleriaMisMalasPageModule' },
  { path: 'galeria-mis-buenas', loadChildren: './galeria-mis-buenas/galeria-mis-buenas.module#GaleriaMisBuenasPageModule' },
  { path: 'spinner', loadChildren: './spinner/spinner.module#SpinnerPageModule' },
  { path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule' },
  { path: 'error-logueo', loadChildren: './error-logueo/error-logueo.module#ErrorLogueoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
