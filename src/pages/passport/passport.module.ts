import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PassportPage } from './passport';
import { NgxQRCodeModule } from 'ngx-qrcode2';


@NgModule({
  declarations: [
    PassportPage,
  ],
  imports: [
    IonicPageModule.forChild(PassportPage),
    NgxQRCodeModule,
  ],
})
export class PassportPageModule {}
