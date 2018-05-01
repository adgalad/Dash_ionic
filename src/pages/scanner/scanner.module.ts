import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScannerPage } from './scanner';
import { NgQrScannerModule } from 'angular2-qrscanner';

@NgModule({
  declarations: [
    ScannerPage,
  ],
  imports: [
    IonicPageModule.forChild(ScannerPage),
    NgQrScannerModule,
  ],
})
export class ScannerPageModule {}
