import { Component, OnInit } from '@angular/core';
import { storage } from 'firebase';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router'
import * as firebase from 'firebase';

@Component({
  selector: 'app-buenas',
  templateUrl: './buenas.page.html',
  styleUrls: ['./buenas.page.scss'],
})
export class BuenasPage implements OnInit {

  private usuarioActual: string = "";
  public mostrar = true;

  constructor(private camera: Camera, private router: Router) { }

  ngOnInit() {
    this.usuarioActual = localStorage.getItem('usuario');
    this.mostrar = false;
  }

  async sacarFoto() {

    const options: CameraOptions = {
      quality: 100,
      targetHeight: 600,
      targetWidth: 600,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }

    try {

      let hora = Date.now();
      let ubicacion = "buenas/" + this.usuarioActual + "/" + hora;
      const result = await this.camera.getPicture(options);
      const image = `data:image/jpeg;base64,${result}`;
      const picture = storage().ref(ubicacion);
      picture.putString(image, 'data_url').then(()=>{
        this.guardarReferencia(ubicacion);
      });

    
    }
    catch (e) {
      console.log(e.error);
    }
  }

  guardarReferencia(pReferencia: string): any {

    var storage = firebase.storage();
    var storageRef = storage.ref();
    var spaceRef = storageRef.child(pReferencia);

    spaceRef.getDownloadURL().then(url => {
      var messagesRef = firebase.database().ref().child("buenas");
      messagesRef.push({ carpeta: "buenas", usuario: this.usuarioActual, referencia: url });
    });
    return "";
  }

  async freno(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("fired"));
  }

  salir()
  {
    this.router.navigate(['ingreso']);
  }
}
