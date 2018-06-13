import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from "../../config"

@IonicPage()
@Component({
  selector: 'passport',
  templateUrl: 'passport.html'
})
export class PassportPage implements OnInit {

  passport: any
  grid:any = []
  status: string;
  qrInfo: string
  duff_value: number;
  

  local(item){
    console.log(item, localStorage.getItem(item))
    return localStorage.getItem(item)
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private http : HttpClient) {
    for (var i = 0; i < 12; i++) {
      this.grid[i] = "<div></div>"
    }
  
  }

  ngOnInit(){
    this.refresh()

  }

  rechargeValue(){
    if (this.passport){
      const stamps = this.passport.stamps + (this.passport.donations > 0 ? this.passport.donations + 1 : 0)
      return (this.duff_value * stamps).toFixed(6);
    }
    else {
      return 0.0
    }
  }

  refresh(){
    const id = this.navParams.get("id")
    this.duff_value = this.navParams.get("duff_value")
    const token = localStorage.getItem("token")
    this.http.get(apiUrl + "/passport/"+id, {headers: {"Authorization":"Bearer "+token}}).subscribe(
      data =>{
        if (data["success"]){
          this.passport = data['passport']
        } else {
          this.navCtrl.pop()
          alert("Error 1")
        }
        this.qrInfo = JSON.stringify({
          passportID: this.passport.id,
          firstName: localStorage.getItem("firstName"),
          lastName: localStorage.getItem("lastName"),
          id: localStorage.getItem("id"),
          event_id: this.passport.event_id
        })
        if (this.passport.activated && !this.passport.recharged){
          this.status = '<b class="green">ACTIVO</b>'
        } else if (!this.passport.activated && this.passport.recharged) {
          this.status = '<b class="blue">RECARGADO</b>'
        } else if (!this.passport.activated && !this.passport.recharged) {
          this.status = '<b class="red">DESACTIVADO</b>'
        } else {
          this.status = '<b class="red">ERROR</b>'
        }

        var index = 0
        var i;
        for (i = 0; i < this.passport.stamps-0.9; i++) {
           this.grid[index] = "<img src='assets/imgs/dc-1.png'>"
           index++;
        }
        if ((this.passport.stamps % 1) > 0){
          if ((this.passport.stamps % 1) < 0.50){
            this.grid[index] = "<img src='assets/imgs/dc-1-4.png'>" 
          } else if ((this.passport.stamps % 1) < 0.75){
            this.grid[index] = "<img src='assets/imgs/dc-1-2.png'>" 
          } else if ((this.passport.stamps % 1) < 1){
            this.grid[index] = "<img src='assets/imgs/dc-3-4.png'>" 
          }
          index++;
        }

        for (i = 0; i < this.passport.donations; i++) {
           this.grid[index] = "<img src='assets/imgs/dash_heart.png'>"
           index++;
        }
        while (index < 12) {
          this.grid[index] = "<div></div>"
          index++;
        }

      }, err =>{
        this.navCtrl.pop()
        alert("Error 2")
      }
    )
  }
  firstRecharge(){
    if (this.passport && this.passport.first_recharge > 0){
      return this.passport.first_recharge + " DASH"
    } else {
      return "-"
    }
  }

  secondRecharge(){
    if (this.passport && this.passport.recharged){
      return this.passport.amount_recharged + " DASH"
    } else {
      return "-"
    }
  }
}
