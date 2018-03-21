import { MyApp } from '../../app/app.component'
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IndexPage } from '../index/index';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html',
})
export class HelloIonicPage implements OnInit{
  
  credentials = {
    email:undefined,
    password:undefined
  }

  
  constructor(public navCtrl: NavController) {
    
  }
  
  isLogged(){
    console.log("Entra 2", localStorage.getItem('email'), localStorage.getItem('email') !== "-1")

    return localStorage.getItem('email') !== "-1";
  }

  goToIndex(){
    console.log("Entra1")
    this.navCtrl.setRoot(IndexPage);
  }

  ngOnInit(){
    console.log("Entra")
    if (this.isLogged()){
      this.goToIndex()
    } 
  }

  validInfo(){
    return (this.credentials.email && this.credentials.password);
  }

  
  login() {
    console.log(this.credentials)
    if (this.validInfo()){
      localStorage.setItem('email', this.credentials.email);
      localStorage.setItem('password', this.credentials.password);
      this.goToIndex()
    }
  }
}
