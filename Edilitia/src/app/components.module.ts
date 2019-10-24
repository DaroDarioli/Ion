import { NgModule } from '@angular/core';

import { SpinComponent} from '../app/spin/spin.component';
import { GenericaComponent } from '../app/generica/generica.component';


// import  {ModalController} from 'ionic-angular';
// import { Subject } from 'rxjs'

@NgModule({
  declarations: [SpinComponent, GenericaComponent],
 exports:[SpinComponent, GenericaComponent]
})
export class ComponentsModule {}