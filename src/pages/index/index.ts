import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { PassportPage } from '../passport/passport'
import { StampPage } from '../stamp/stamp'
import { apiUrl } from "../../config"


@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage implements OnInit {
  
  events : any;
  closedEvents : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private http : HttpClient) {
  }

  ngOnInit(){
    const id = localStorage.getItem("id")
    this.http.get(apiUrl + "/user/" + id + "/events").subscribe(
      data => {
        this.events = []
        this.closedEvents = []
        console.log(data)
        if (data["success"]) {
          for (var i = 0 ; i < data["user_events"].length ; i++) {
            const event = data["user_events"][i]
             if (event['active']){
               this.events.push(event)
             } else {
               this.closedEvents.push(event)
             }
           } 
        } else {
          alert(data["message"])
        }
        console.log(this.events)
      }, err =>{
        alert("No se puedo conectar con el servidor.")
      }
    )
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
  }
  
  formatDate(date) {

    var d = new Date(date*1000),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [day, month, year].join('/');
  }

  goToPassport(event){
    const permissions = JSON.parse(localStorage.getItem('permissions'))
    if (permissions['canStamp']){
      this.navCtrl.push(StampPage, {passport:event.passport_id, event:event.id})  
    } else {
      this.navCtrl.push(PassportPage, {id: event.passport_id, duff_value: parseFloat(event.duff_value)})
    }
  }
}
