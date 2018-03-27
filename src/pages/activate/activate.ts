import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ScannerPage } from "../scanner/scanner"

/**
 * Generated class for the ActivatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

interface info {
  passportID : string
}

@IonicPage()
@Component({
  selector: 'page-activate',
  templateUrl: 'activate.html',
})
export class ActivatePage {

  requestInfo: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.requestInfo = {
      "passportID": "0x0"
    }
  }

  goToScanner(operation){
    this.navCtrl.push(ScannerPage, {"operation": operation})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivatePage');
  }

}
