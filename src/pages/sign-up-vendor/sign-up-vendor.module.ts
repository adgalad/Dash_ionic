import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignUpVendorPage } from './sign-up-vendor';

@NgModule({
  declarations: [
    SignUpVendorPage,
  ],
  imports: [
    IonicPageModule.forChild(SignUpVendorPage),
  ],
})
export class SignUpVendorPageModule {}
