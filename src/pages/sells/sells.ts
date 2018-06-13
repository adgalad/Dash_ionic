import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../config'
/**
 * Generated class for the SellsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sells',
  templateUrl: 'sells.html',
})
export class SellsPage {
  list: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    var vendor_id = localStorage.getItem('vendor_id')
    this.http.get(apiUrl + "/vendor/" + vendor_id + "/sells").subscribe(
      data => {
        if (data['success']){
          this.list = data['purchases']
          console.log(this.list)
        } else {
          alert(data['message'])
        }
      }, err => {

      }
    )
  }

  date(datetime){
    const d = new Date(datetime * 1000)
    const Y = d.getFullYear()
    const M = d.getMonth()
    const D = d.getDay()

    const h = d.getHours()
    const m = d.getMinutes()

    return Y+"/"+M+"/"+D+" "+h+":"+m;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SellsPage');
  }

}
