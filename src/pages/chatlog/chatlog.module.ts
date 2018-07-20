import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatlogPage } from './chatlog';

@NgModule({
  declarations: [
    ChatlogPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatlogPage),
  ],
})
export class ChatlogPageModule {}
