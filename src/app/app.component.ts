import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { LoginPage } from '../pages/login/login';
import { StampPage } from '../pages/stamp/stamp';
import { ActivatePage } from '../pages/activate/activate';
import { SignupPage } from '../pages/signup/signup';
import { ProfilePage } from '../pages/profile/profile';

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
    // set our app's pages
    this.pages.login = { title: 'Mi Pasaporte', component: LoginPage }
    this.pages.profile = { title: 'Perfil', component: ProfilePage }
    if (this.isAmbassador()) {
      this.pages.stamp = { title: 'Colocar Sellos', component: StampPage}
      this.pages.activate = { title: 'Activar pasaporte', component: ActivatePage}
    }
  }

  isAmbassador(){
    return parseInt(localStorage.getItem("type")) === 2;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(url) {
    this.menu.close();
    this.nav.setRoot(this.pages[url].component);
  }

  logout(){
    this.menu.close();
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('id');
    localStorage.removeItem('type');
    
    this.nav.setRoot(LoginPage); 
  }
}
