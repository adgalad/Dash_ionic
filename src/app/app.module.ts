import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// import { LoginPage } from '../pages/login/login';
// import { IndexPage } from '../pages/index/index';
// import { StampPage } from '../pages/stamp/stamp';
// import { ScannerPage } from '../pages/scanner/scanner';
// import { ActivatePage } from '../pages/activate/activate';
// import { SignupPage } from '../pages/signup/signup';
// import { ProfilePage } from '../pages/profile/profile';
// import { EntrepreneursPage } from '../pages/entrepreneurs/entrepreneurs'
// import { PassportPage } from '../pages/passport/passport'
// import { RechargePage } from '../pages/recharge/recharge';

import { LoginPageModule } from '../pages/login/login.module';
import { IndexPageModule } from '../pages/index/index.module';
import { StampPageModule } from '../pages/stamp/stamp.module';
import { ScannerPageModule } from '../pages/scanner/scanner.module';
import { ActivatePageModule } from '../pages/activate/activate.module';
import { SignupPageModule } from '../pages/signup/signup.module';
import { SignUpVendorPageModule } from '../pages/sign-up-vendor/sign-up-vendor.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { EntrepreneursPageModule } from '../pages/entrepreneurs/entrepreneurs.module'
import { PassportPageModule } from '../pages/passport/passport.module'
import { RechargePageModule } from '../pages/recharge/recharge.module';
import { ProductPageModule } from '../pages/product/product.module';
import { SellsPageModule } from '../pages/sells/sells.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    MyApp,
    // LoginPage,
    // IndexPage,
    // StampPage,
    // ScannerPage,
    // ActivatePage,
    // SignupPage,
    // ProfilePage,
    // EntrepreneursPage,
    // PassportPage,
    // RechargePage
  ],
  imports: [
    
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    
    LoginPageModule,
    IndexPageModule,
    StampPageModule,
    ScannerPageModule,
    ActivatePageModule,
    SignupPageModule,
    SignUpVendorPageModule,
    ProfilePageModule,
    EntrepreneursPageModule,
    PassportPageModule,
    RechargePageModule,
    ProductPageModule,
    SellsPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
