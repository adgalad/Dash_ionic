import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewController, NavParams } from 'ionic-angular';
import { apiUrl } from "../../config"

/**
 * Generated class for the EntrepreneursPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  templateUrl: 'entrepreneurs.html',
})
export class EntrepreneursPage implements OnInit{


  items: Array<string>;
  eventID : number;
  isFoundation: any;
  vendors : any

  constructor(private viewCtrl: ViewController, public navParams: NavParams,
              private http : HttpClient){
    this.eventID = navParams.get("event")
    this.isFoundation = navParams.get("isFoundation")
    this.setItems()
  }

  ngOnInit(){
    var url = ""
    if (this.isFoundation){
      url = "/event/" + this.eventID + "/foundations"
    } else {
      url = "/event/" + this.eventID + "/vendors"
    }
    this.http.get(apiUrl + url).subscribe(
      data => {
        if (data['success']){
          this.vendors = data['vendors']
          this.setItems()
        } else {
          alert(data['message'])
        }
      }, err =>{
        alert("No se pudo conectar con el servidor.\n" + err)
      }
    )
  }

  setItems() {
    this.items = []
    for (var vendor in this.vendors){
      this.items.push(vendor)
    }
  }

  setItem(name){
    this.viewCtrl.dismiss({name: name, vendor_id: this.vendors[name]});
  }

  filterItems(ev: any) {
    this.setItems();
    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.items = this.items.filter(function(item) {
        return item.toLowerCase().includes(val.toLowerCase());
      });
    }
  }

  // Nooo Borrar :)
  dismiss(){
   this.viewCtrl.dismiss({name: "", vendor_id: 0});
  }

}