import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';

import { apiUrl } from "../../config"
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
const emailRE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const nameRe = /^([A-zÀ-ÿ]+[ \-']?)*[A-zÀ-ÿ]+$/
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage implements OnInit {
  signUpForm: any;
  requesting: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private http : HttpClient, private alertCtrl: AlertController) {
    const formBuilder = new FormBuilder;
    this.signUpForm = formBuilder.group({
        email: ['', Validators.compose([Validators.maxLength(64), Validators.pattern(emailRE), Validators.required])],
        firstName: ['', Validators.compose([Validators.maxLength(32), Validators.pattern(nameRe), Validators.required])],
        lastName: ['',  Validators.compose([Validators.maxLength(32), Validators.pattern(nameRe), Validators.required])],
        password: ['',  Validators.compose([Validators.minLength(8), Validators.required])],
        id: ['',  Validators.compose([Validators.maxLength(10), Validators.pattern('[1-9][0-9]*'), Validators.required])]
    });

  }

  ngOnInit(){
    const style = (<HTMLElement> document.getElementsByClassName("fixed-content")[2]);
    style.innerHTML="<div style='display:table; height:101%; width:100%'> <div style='display: table-cell; bottom:0; vertical-align: bottom;'> <img style='max-height:30%;' src='assets/imgs/bg.png' width='100%'> </div></div>"
  }
  confirmation() {
    let alert = this.alertCtrl.create({
      title: 'Confirmación',
      message: 'Un mensaje de confirmación ha sido envido a su correo electrónico. Debe activar su cuenta antes de poder ingresar al sistema.',
      buttons: [
        {
          text: 'Ok',
          role: 'accept',
          handler: () => {
            this.navCtrl.pop()
          }
        }
      ]
    });
    alert.present();
  }

  signUp(){
    const form = this.signUpForm.getRawValue()
    form.type = 2
    form.active = "false"
    form.email = String(form['email']).toLowerCase();
    this.requesting = true;
    this.http.post(apiUrl + "/user", form).subscribe(
      data => {
        if (data['success']){
          this.confirmation()
          this.requesting = false;
        }    
        else {
          alert(data['message']);
          this.requesting = false;
        }
      }, err => {
        alert("No se puedo relizar el registro.\nPor favor intente mas tarde.");
        this.requesting = false;
      })
    
  }
  checkField(field){
    const f = this.signUpForm.get(field)

    if (!f.valid){
      document.getElementById(field+"-error").hidden = false
    } else {
      document.getElementById(field+"-error").hidden = true
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
