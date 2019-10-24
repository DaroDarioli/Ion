import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Router } from '@angular/router';
import {timer} from 'rxjs'

import {FIREBASE_CONFIG} from '../app/app.firebase.config';



import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  showSplash: boolean = true;

  
  caminoInicial: string = '../../assets/superstyling.wav';
  jungle:any;

  constructor(
    private router : Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {

    this.iniciarlizarAudios();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.router.navigateByUrl('ingreso');
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(0).subscribe(()=> this.showSplash = false);
    });
    firebase.initializeApp(FIREBASE_CONFIG);

   
  }

  iniciarlizarAudios() {
    // this.jungle = new Audio();
    // this.jungle.src = this.caminoInicial;
    // this.jungle.load();
    // this.jungle.play();       
  }
}
