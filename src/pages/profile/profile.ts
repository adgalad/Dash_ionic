import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
import { apiUrl } from '../../config'
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

const emailRE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const nameRE = /^([A-zÀ-ÿ]+[ \-']?)*[A-zÀ-ÿ]+$/

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  profile : any = {
      "email": "-",
      "firstName": "-",
      "lastName": "-",
      "id": "-"
    }
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private http: HttpClient, private alertCtrl: AlertController) {

    const id = localStorage.getItem("id")
    const token = localStorage.getItem("token")
    this.http.get(apiUrl + "/user/" + id, {headers: {"Authorization":"Bearer "+token}}).subscribe(
      data => {
        if (data['success']){
          localStorage.setItem("email", data['email'])
          localStorage.setItem("firstName", data['firstName'])
          localStorage.setItem("lastName", data['lastName'])
          this.profile = data
          this.profile.password = localStorage.getItem("password")
        }
        else alert(data['message'])
      }, err =>{
        alert("No se puedo realizar la conexión.\nIntente ingresar al sistema nuevamente.")
      })
  }

  modify(field, value){

  }
  ionViewDidLoad() {

  }

hidePassword() {
  return Array(String(this.profile.password).length+1).join("*")
}



presentPrompt(field) {
  const aux = () => {
    switch (field) {
      case "password":
        return { 
          title:"Cambiar contraseña",
          input: [
            {
              name: 'password',
              placeholder: 'Nueva contraseña',
              type: 'password'
            }, {
              name: 'repassword',
              placeholder: 'Repita contraseña',
              type: 'password'
            }, 
          ]
        }
      case "email":
        return { 
          title: "Cambiar correo electrónico",
          input: [
            {
              name: 'email',
              placeholder: this.profile.email,
              type: 'email'
            }
          ]
        }
      case "name":
        return { 
          title:"Modificar mi nombre",
          input: [
            {
              name: 'firstName',
              placeholder: this.profile.firstName,
            }, {
              name: 'lastName',
              placeholder: this.profile.lastName,
            }
          ]
        }
      default:
        alert("Error @profile.ts")
        break;
    }
  }

  let changeAlert = this.alertCtrl.create({
    title: aux()['title'],
    inputs: aux()['input'],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {}
      },
      {
        text: 'Realizar cambio',
        handler: data => {
          if (field === "name"){
            if (data["firstName"] !== "" && !nameRE.test(data["firstName"])){
              alert("El nombre que ingresó es invalido.")
            } else if (data["lastName"] !== "" && !nameRE.test(data["lastName"])) {
              alert("El apellido que ingresó es invalido.")
            } else {
              const id = localStorage.getItem("id")
              const firstName = data["firstName"] === "" ? this.profile.firstName : data["firstName"];
              const lastName = data["lastName"] === "" ? this.profile.lastName : data["lastName"];
              const request = {id:id, firstName:firstName, lastName:lastName}

              const token = localStorage.getItem("token")
              this.http.put(apiUrl + "/user", request, {headers: {"Authorization":"Bearer "+token}}).subscribe(
                data2 => {
                  if (data2["success"]){

                    localStorage.setItem("firstName", firstName)
                    this.profile.firstName = firstName
                    localStorage.setItem("lastName", lastName)
                    this.profile.lastName = lastName
                    return true
                  } else { 
                    alert(data2["message"])
                    return false
                  }
                }, err => {
                  alert("(1)No se pudo conectar con el servidor.")
                  return false
                }
              )
              return true
            } 
          } else if (field === "email"){
            if (!emailRE.test(data['email'])){
              alert("El correo electrónico que ingresó es invalido.")
            } else {
              const id = localStorage.getItem("id")
              const request = {id:id, email:data["email"]}
              const token = localStorage.getItem("token")
              this.http.put(apiUrl + "/user", request, {headers: {"Authorization":"Bearer "+token}}).subscribe(
                data2 => {
                  if (data2["success"]){
                    localStorage.setItem("email", data["email"])
                    this.profile.email = data["email"]
                    localStorage.setItem("token", data2["token"])
                  } else { 
                    alert(data2["message"])
                    return false
                  }
                }, err => {
                  alert("No se pudo conectar con el servidor.")
                  return false
                }
              )
              return true
            }
          } else if (field === "password"){
            if (String(data['password']).length < 8){
              alert("La contraseña debe ser mayor a 8 caracteres.")
            } else if (data['repassword'] !== data['password']){
              alert("Ambas contraseñas deben coincidir.")
            } else {
              const id = localStorage.getItem("id")
              const request = {id:id, password:data["password"]}
              const token = localStorage.getItem("token")
              this.http.put(apiUrl + "/user", request, {headers: {"Authorization":"Bearer "+token}}).subscribe(
                data2 => {
                  if (data2["success"]){
                    localStorage.setItem("password", data["password"])
                    this.profile.password = data["password"]
                  } else { 
                    alert(data2["message"])
                    return false
                  }
                }, err => {
                  alert("No se pudo conectar con el servidor.")
                  return false
                }
              )
              return true
            }
          }
          return false;
        }
      }
    ]
  });
  changeAlert.present();
}

}