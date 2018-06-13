import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { LoginPage } from '../pages/login/login';
import { StampPage } from '../pages/stamp/stamp';
import { ActivatePage } from '../pages/activate/activate';
import { ProfilePage } from '../pages/profile/profile';
import { RechargePage } from '../pages/recharge/recharge';
import { ProductPage } from '../pages/product/product';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';




@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make LoginPage the root (or first) page
  rootPage = LoginPage;


  pages: any

  pageKeys() : Array<string> {
    return Object.keys(this.pages);
  }

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();
    this.menu.swipeEnable(false)
    // set our app's pages
    this.pages = {
      login: { title: 'Eventos', component: LoginPage },
      profile: { title: 'Perfil', component: ProfilePage },
      stamp: { title: 'Colocar Sellos', component: StampPage},
      product: { title: 'Productos', component: ProductPage},
      activate: { title: 'Activar pasaporte', component: ActivatePage},
      recharge: { title: 'Recargar pasaporte', component: RechargePage}
    }
  }

  hasPermission(name){
    const permissions = JSON.parse(localStorage.getItem("permissions"))
    if (!permissions)
      return false
    return permissions[name]
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(component) {
    this.menu.close();
    this.nav.setRoot(component);
    
  }

  logout(){
    this.menu.close();
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('id');
    localStorage.removeItem('permissions');
    
    this.nav.setRoot(LoginPage); 
  }
}
