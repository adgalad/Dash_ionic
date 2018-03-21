import { Component, ViewChild, Injectable } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { Prueba } from '../pages/prueba/prueba';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';




@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;


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
    this.pages = {
      "login": { title: 'Hello Ionic', component: HelloIonicPage },
      "index": { title: 'My First List', component: ListPage },
      "prueba": { title: 'Prueba', component: Prueba}
    };
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(url) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(this.pages[url].component);
  }

  logout(){
    this.menu.close();
    localStorage.setItem('email', "-1");
    localStorage.setItem('password', "-1");
    this.nav.setRoot(HelloIonicPage); 
  }
}
