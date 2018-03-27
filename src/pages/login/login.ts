import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../config'
import { AlertController } from 'ionic-angular';

import { IndexPage } from '../index/index';
import { SignupPage } from '../signup/signup';
import * as $ from 'jquery'

export function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit{
  
  credentials = {
    email:undefined,
    password:undefined
  }

  
  constructor(public navCtrl: NavController, private http : HttpClient, private alertCtrl: AlertController) {
    
  }


  isLogged(){
    return localStorage.getItem('token') !== null;
  }

  goToIndex(){
    this.navCtrl.setRoot(IndexPage);
  }

  ngOnInit(){
    if (this.isLogged()){
      this.goToIndex()
    } 
  }

  validInfo(){
    return (validateEmail(this.credentials.email) && this.credentials.password);
  }

  activationAlert() {
    let activationAlert = this.alertCtrl.create({
      title: 'Cuenta no activa',
      message: 'Un mensaje de confirmación ha sido envido a su correo electrónico. Debe activar su cuenta antes de poder ingresar al sistema.',
      buttons: [
        {
          text: 'Ok',
          role: 'accept',
          handler: () => {}
        }, 
        {
          text: 'Reenviar',
          role: 'resend',
          handler: () => {
            this.http.post(apiUrl + "/activate/user", this.credentials).subscribe(
              data => {
                if (!data['success']){
                  alert(data['message'])
                }
              }, err => {
                alert("No se puedo realizar la conexión.\nPor favor intente mas tarde.")
              }
            )
          }
        }
      ]
    });
    activationAlert.present();
  }


  login() {
    console.log(this.credentials)
    
    if (this.validInfo()){
      this.credentials.email = String(this.credentials.email).toLowerCase()
      this.http.post(apiUrl + '/auth/user', this.credentials).subscribe( 
        data =>{
          if (data['success'] === true){
            localStorage.setItem('email', this.credentials.email);
            localStorage.setItem('password', this.credentials.password);  
            localStorage.setItem('firstName', data['firstName']);  
            localStorage.setItem('lastName', data['lastName']);
            localStorage.setItem('id', data['id']);
            localStorage.setItem('type', data['type'])
            localStorage.setItem('token', data['token']);  
            this.goToIndex()  
          }
          else {
            switch (data['code']) {
              case 2:
                this.activationAlert()
                break;
              
              default:
                alert(data['message'])
                break;
            }
            
          }
        }, err=>{
          alert("No se puedo realizar la conexión.\nPor favor intente mas tarde.")
        }
      )
    }
  }

  signUp(){
    this.navCtrl.push(SignupPage);
  }
}
