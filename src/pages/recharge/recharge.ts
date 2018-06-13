import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScannerPage } from '../scanner/scanner'
import { HttpClient } from '@angular/common/http';
import { apiUrl } from "../../config"

/**
 * Generated class for the RechargePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recharge',
  templateUrl: 'recharge.html',
})
export class RechargePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private http: HttpClient) {
    this.passportID = 0
  }

  firstName : string
  lastName: string
  id: number
  passportID : any
  rechargeValue: string
  sending: boolean;
  consulted: boolean;
  

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
      const token = localStorage.getItem("token")
      this.http.get(apiUrl + "/passport/" + this.passportID, {headers: {"Authorization":"Bearer "+token}}).subscribe(
        data =>{
          if (data['success']){
            this.rechargeValue = data['passport']['rechargeValue'] + " DASH"

          } else {
            alert(data['message'])
          }
        }, err =>{
          alert("No se pudo conectar al servidor")
        }
      )
      localStorage.removeItem("qrInfo")
    } catch (e) {
        this.passportID = 0;
    }    
  }

  consult(){
    const token = localStorage.getItem("token")
    this.http.get(apiUrl + "/passport/recharge/" + this.id + "/", {headers: {"Authorization":"Bearer "+token}}).subscribe(
      data => {
        if (data['success']){
          alert("Pasaporte recargado exitosamente.")
          this.sending = false
        } else {
          alert(data["message"])
          this.sending = false
        }
      }, err =>{
        alert("No se pudo conectar al servidor.")
        this.sending = false
      }
    )
  }
  recharge(){
    this.sending = true
    const token = localStorage.getItem("token")
    this.http.post(apiUrl + "/passport/recharge", {id: this.passportID}, {headers: {"Authorization":"Bearer "+token}}).subscribe(
      data => {
        if (data['success']){
          alert("Pasaporte recargado exitosamente.")
          this.sending = false
        } else {
          alert(data["message"])
          this.sending = false
        }
      }, err =>{
        alert("No se pudo conectar al servidor.")
        this.sending = false
      }
    )
  }


}
