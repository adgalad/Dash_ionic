import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { EntrepreneursPage } from '../entrepreneurs/entrepreneurs'
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../config'

import { ScannerPage } from "../scanner/scanner"
/**
 * Generated class for the StampPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface info {
  passportID : number,
  bigStamps : number,
  smallStamps : number,
  isDonation : boolean,
  socialStamp : boolean,
  entrepreneurs: string,
  vendor_id : number,
  event_id : number;
}

@IonicPage()
@Component({
  selector: 'page-stamp',
  templateUrl: 'stamp.html'
})
export class StampPage {
  
  
  requestInfo : info;
  
  sending: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modalCtrl: ModalController, private http: HttpClient) {
    this.requestInfo = {
      "passportID": 0,
      "bigStamps": null,
      "smallStamps": null,
      "isDonation": false,
      "socialStamp": false,
      "entrepreneurs": "",
      "vendor_id": 0,
      "event_id": 0
    }
  }

  goToScanner(operation){
    this.navCtrl.push(ScannerPage, {"operation": operation})
  }

  ionViewWillEnter(){
    try {
      var qrInfo = JSON.parse(localStorage.getItem("qrInfo"))
      this.requestInfo.passportID = parseInt(qrInfo["passportID"]);
      this.requestInfo.event_id = parseInt(qrInfo["event_id"]);
      localStorage.removeItem("qrInfo")
    } catch (e) {
        this.requestInfo.passportID = 0;
    }
  }
  
  valid(){
    return this.requestInfo.passportID !== 0 
        // && this.requestInfo.bigStamps !== null 
        // && this.requestInfo.smallStamps !== null 
        // && (this.requestInfo.bigStamps + this.requestInfo.smallStamps !== 0 || this.requestInfo.socialStamp) 
        && this.requestInfo.vendor_id !== 0

  }

  sendStampRequest(){
    this.sending = true
    const request = {
      id:this.requestInfo.passportID,
      stamps: this.requestInfo.bigStamps*1 + (this.requestInfo.smallStamps*0.25),
      vendor_id: this.requestInfo.vendor_id
    }
    if (this.requestInfo.isDonation){
      request["isDonation"] = true
    }
    if (this.requestInfo.socialStamp){
      request["socialStamp"] = true
    }
    const token = localStorage.getItem("token")
    this.http.post(apiUrl + "/passport/stamp", request, {headers: {"Authorization":"Bearer "+token}}).subscribe(
      data => {
        if (data['success']){
          alert("Se colocaron los sellos exitosamente.")
          
          this.requestInfo = {
            "passportID": 0,
            "bigStamps": null,
            "smallStamps": null,
            "isDonation": false,
            "socialStamp": false,
            "entrepreneurs": "",
            "vendor_id": 0,
            "event_id": 0
          }
          this.sending = false
        } else {
          alert(data["message"])
          this.sending = false
        }
      }, err =>{
        alert("No se pudo conectar al servidor")
        this.sending = false
      }
    )
  }

  ionViewDidLoad() {
    
  }

  eModal(){
    // if (!this.requestInfo.event_id){
    //   alert("Primero debe escanear un qr de pasaporte valido.")
    // } else {
    const modalParams = {
      event:1,
      isFoundation: this.requestInfo.isDonation 
    }
    let entrepreneursModal = this.modalCtrl.create(EntrepreneursPage, modalParams);
    entrepreneursModal.onDidDismiss(data => {
      this.requestInfo.vendor_id = data['vendor_id']
      this.requestInfo.entrepreneurs = data['name']
    });
    entrepreneursModal.present();
    // }
  }
  
  disableSmall(){
    this.requestInfo = {
      "passportID": 0,
      "bigStamps": null,
      "smallStamps": null,
      "isDonation": false,
      "socialStamp": false,
      "entrepreneurs": "",
      "vendor_id": 0,
      "event_id": 0
    }
  }  
  placeholder(){
    if (this.requestInfo.isDonation){
      return "Fundación"
    } else {
      return "Emprendedor"
    }
  }  
}

