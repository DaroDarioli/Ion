import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SpinnerPageModule} from '../app/spinner/spinner.module';

import { AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';

import {FIREBASE_CONFIG} from './app.firebase.config';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {ComponentsModule } from '../app/components.module';

// import  {ModalController} from 'ionic-angular';
// import { Subject } from 'rxjs'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
  BrowserModule,   
  AngularFireModule.initializeApp(FIREBASE_CONFIG), 
  AngularFireAuthModule,
  IonicModule.forRoot(),
  AppRoutingModule,
  ComponentsModule,
  SpinnerPageModule],
  providers: [
    StatusBar,
    Camera,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ]  
})
export class AppModule {}
