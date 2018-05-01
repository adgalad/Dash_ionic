import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EntrepreneursPage } from './entrepreneurs';

@NgModule({
  declarations: [
    EntrepreneursPage,
  ],
  imports: [
    IonicPageModule.forChild(EntrepreneursPage),
  ],
})
export class EntrepreneursPageModule {}
