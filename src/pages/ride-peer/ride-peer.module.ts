import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RidePeerPage } from './ride-peer';

@NgModule({
  declarations: [
    RidePeerPage,
  ],
  imports: [
    IonicPageModule.forChild(RidePeerPage),
  ],
})
export class RidePeerPageModule {}
