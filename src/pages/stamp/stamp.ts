import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ScannerPage } from "../scanner/scanner"
/**
 * Generated class for the StampPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface info {
  passportID : string,
  placeID : string,
  bigStamps : number,
  smallStamps : number,
  heartStamps : number,
  socialStamp : boolean
}

@IonicPage()
@Component({
  selector: 'page-stamp',
  templateUrl: 'stamp.html'
})
export class StampPage {
  
  
  requestInfo : info;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.requestInfo = {
      "passportID": "0x0",
      "placeID": "0x0",
      "bigStamps": null,
      "smallStamps": null,
      "heartStamps": null,
      "socialStamp": false
    }
  }

  goToScanner(operation){
    this.navCtrl.push(ScannerPage, {"operation": operation})
  }

  ionViewWillEnter(){
    var pID = localStorage.getItem("passportID")
    if (!pID){
      this.requestInfo.passportID = "0x0";
    } else {
      this.requestInfo.passportID = pID;
      localStorage.removeItem("passportID")
    }
  }

  sendStampRequest(){

  }

  ionViewDidLoad() {
    
  }

  
  
}
