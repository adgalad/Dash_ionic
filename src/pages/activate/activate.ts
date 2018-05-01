import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../config'

import { ScannerPage } from "../scanner/scanner"


/**
 * Generated class for the ActivatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-activate',
  templateUrl: 'activate.html',
})
export class ActivatePage {

  firstName : string
  lastName: string
  id: number
  passportID : any = null
  first_recharge : number = 0
  duff_value : number = 1
  sending : boolean = false;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private http: HttpClient) {
    this.passportID = 0
  }

  goToScanner(operation){
    this.navCtrl.push(ScannerPage, {"operation": operation})
  }
  
  ionViewWillEnter(){
    try {
      var qrInfo = JSON.parse(localStorage.getItem("qrInfo"))
      this.passportID = parseInt(qrInfo['passportID']);
      this.firstName = qrInfo['firstName'];
      this.lastName = qrInfo['lastName'];
      this.id = parseInt(qrInfo['id']);
      localStorage.removeItem("qrInfo");
      const token = localStorage.getItem("token")
      this.http.get(apiUrl + "/activate/passport/" + this.passportID, {headers: {"Authorization":"Bearer "+token}}).subscribe(
        data => {
          if (data['success']){
            this.duff_value = 0.012//data['event_id'];
            this.first_recharge = this.duff_value * 10;

          } else {
            alert(data['message'])
          }
        }, err => {
           alert("No se pudo conectar con el servidor.")
        }
      )
    } catch (e) {
        this.passportID = 0;
    }    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivatePage');
  }

  activate(){
    const token = localStorage.getItem("token")
    this.sending = true
    this.http.post(apiUrl + "/activate/passport", {id:this.passportID, first_recharge:this.first_recharge}, {headers: {"Authorization":"Bearer "+token}}).subscribe(
      data => {
        if (data['success']){
          alert("Pasaporte activado exitosamente.")
        } else {
          alert(data["message"])
        }
        this.sending = false
      }, err =>{
        alert("No se pudo conectar al servidor")
        this.sending = false
      }
    )
  }

}
