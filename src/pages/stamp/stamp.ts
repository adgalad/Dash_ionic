import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { EntrepreneursPage } from '../entrepreneurs/entrepreneurs'
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../config'

import { ScannerPage } from "../scanner/scanner"
import { SellsPage } from "../sells/sells"
/**
 * Generated class for the StampPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface info {
  client_id : number,
  vendor_id : number,
  event_id : number;
  products: any;
  selected: any;
  amount: any;
  total: number;
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
    console.log(this.navParams.get("event"))
    console.log(this.navParams.get("passport"))
    var id = localStorage.getItem('vendor_id')
    this.requestInfo = {
      "client_id": null,
      "vendor_id": parseInt(id),
      "event_id": this.navParams.get("event"),
      "products" : {}, 
      "selected": [],
      "amount": {},
      "total": 0
    }
  }
  ngOnInit(){
    var token = localStorage.getItem('token')
    var id = localStorage.getItem('vendor_id')
    this.http.get(apiUrl + "/vendor/"+ id +"/products", {headers: {"Authorization":"Bearer "+token}}).subscribe(
      data => {

        if (data['success']){
          var products = {}
          for (var i = 0 ; i < data['products'].length ; ++i){
            products[data['products'][i]['name']] = data['products'][i]['price']
          }
          console.log(">>>", products)
          this.requestInfo['products'] = products
        } else {
          alert(data["message"])
        }
      }, err =>{
        alert("No se pudo conectar al servidor")
      }
    )
  }
  goToScanner(operation){
    this.navCtrl.push(ScannerPage, {"operation": operation})
  }

  ionViewWillEnter(){
    try {
      var qrInfo = JSON.parse(localStorage.getItem("qrInfo"))
      this.requestInfo.client_id = parseInt(qrInfo["id"]);
      this.requestInfo.event_id = parseInt(qrInfo["event_id"]);
      

      localStorage.removeItem("qrInfo")
    } catch (e) {
        this.requestInfo.client_id = 0;
        this.requestInfo.event_id = parseInt(this.navParams.get("passport"));
    }
  }
  
  valid(){
    var idRE = /^[1-9][0-9]*$/;
    return idRE.test(String(this.requestInfo.client_id))
        // && this.requestInfo.bigStamps !== null 
        // && this.requestInfo.smallStamps !== null 
        // && (this.requestInfo.bigStamps + this.requestInfo.smallStamps !== 0 || this.requestInfo.socialStamp) 
        && this.requestInfo.vendor_id !== 0

  }

  sendStampRequest(){
    this.sending = true

    const request = {
      event_id: this.requestInfo.event_id,
      vendor_id: this.requestInfo.vendor_id,
      client_id: this.requestInfo.client_id,
      value: this.requestInfo.total,
      products: JSON.stringify(this.requestInfo.amount)

    }
    for (var key in this.requestInfo.amount) {
      if (this.requestInfo.amount[key] <= 0){
        this.sending = false
        return alert("La cantidad de un productos no puede ser cero.")
      }
    }
    
    const token = localStorage.getItem("token")
    this.http.post(apiUrl + "/vendor/registerSell", request, {headers: {"Authorization":"Bearer "+token}}).subscribe(
      data => {
        if (data['success']){
          alert("Se colocaron los sellos exitosamente.")
          
          this.requestInfo = {
            "client_id": 0,
            "vendor_id": this.requestInfo['vendor_id'],
            "event_id": this.navParams.get("passport"),
            "products": this.requestInfo['products'],
            "selected": [] ,
            "amount": {},
            "total": 0
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

  viewSells(){
    this.navCtrl.push(SellsPage)
  }

  replace(name){
    return name.replace(" ","_") + "item"
  }

  total(){
    this.requestInfo.total = 0 
    for (var i = 0; i < this.requestInfo.selected.length; ++i) {
      var amount = parseFloat((<HTMLInputElement>document.getElementById(this.replace(this.requestInfo.selected[i]))).value)
      if (!amount || amount < 0){
        (<HTMLInputElement>document.getElementById(this.replace(this.requestInfo.selected[i]))).value = "0"
        amount = 0;
      }
      this.requestInfo.total += this.requestInfo.products[this.requestInfo.selected[i]] * amount
      this.requestInfo.amount[this.requestInfo.selected[i]] = amount
    }
    document.getElementById("total").innerHTML = "<b>Total: " + Number(this.requestInfo.total.toFixed(6))+" ᕭ</b>";
    return this.requestInfo.total;
  }

  selected(){
    if (this.requestInfo && this.requestInfo.selected !== []){
      return this.requestInfo.selected;
    }
    return []
  }

  keys(){
    return Object.keys(this.requestInfo.products)
  }

}

