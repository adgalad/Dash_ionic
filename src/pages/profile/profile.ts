import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { apiUrl } from '../../config'
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  profile: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private http: HttpClient) {
  }

  ionViewDidLoad() {
    const id = localStorage.getItem("id")
    const token = localStorage.getItem("token")
    this.http.get(apiUrl, {headers: {Authentication:"Bearer " + token}}).subscribe(
      data => {
        if (data['success']){
          localStorage.setItem("email", data['email'])
          localStorage.setItem("firstName", data['firstName'])
          localStorage.setItem("lastName", data['lastName'])
          this.profile = data
        }
        else alert(data['message'])
      }, err =>{

      })
  }

}
