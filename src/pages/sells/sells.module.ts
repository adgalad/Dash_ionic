import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellsPage } from './sells';

@NgModule({
  declarations: [
    SellsPage,
  ],
  imports: [
    IonicPageModule.forChild(SellsPage),
  ],
})
export class SellsPageModule {}
