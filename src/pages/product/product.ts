import { Component, OnInit } from '@angular/core';
import { List, IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../config'
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage implements OnInit{

  products : any

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private alertCtrl: AlertController, private http: HttpClient) {
  }
  
  ngOnInit(){
    var token = localStorage.getItem("token")
    var id = localStorage.getItem('vendor_id')
    this.http.get(apiUrl + "/vendor/"+ id +"/products", {headers: {"Authorization":"Bearer "+token}}).subscribe(
      data => {
        if (data['success']){
          this.products = data['products']
        } else {
          this.products = []
          alert(data["message"])
        }
      }, err =>{
        alert("No se pudo conectar al servidor")
      }
    )
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }
  createPrompt(){
    let createAlert = this.alertCtrl.create({
      title: "Crear Producto",
      inputs: [
              {
                name: 'name',
                placeholder: "Nombre",
              }, {
                name: 'price',
                placeholder: "Precio",
                type: 'number'
              }, 
            ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {}
        },
        {
          text: 'Crear',
          handler: data => {
            if (!data['name']){
              alert("Por favor, introduce un nombre.")
              return false
            }
            else if (!data['price']){
              alert("Por favor, introduce un precio.")
              return false
            }
            else if (data['price'] <= 0){
              alert("El precio no puede ser negativo.")
              return false
            } else if (data['price'] <= 0.0000009){
              alert("El precio es muy pequeño.")
              return false
            } else if (data['price'] > 10){
              alert("El precio es muy grande.")
              return false
            }
            const id = localStorage.getItem('vendor_id')
            var request = {
              name: data['name'],
              price: data['price'],
              id: id
            }
            const token = localStorage.getItem('token')
            
            this.http.post(apiUrl + "/vendor/products", request, {headers: {"Authorization":"Bearer "+token}}).subscribe(
              data2 => {
                if (data2['success']){
                  this.products.push(data2['product'])
                  
                } else {
                  alert(data2['message'])
                }
              }, err => {
                alert("No se pudo conectar con el servidor.")
                return false
              }
            )
          }
        }
      ]
    });
    createAlert.present()
  }
  modifyPrompt(name, price, productID) {

    let changeAlert = this.alertCtrl.create({
      title: "Modificar Producto",
      inputs: [
              {
                name: 'name',
                value: name,
              }, {
                name: 'price',
                value: price,
                type: 'number'
              }, 
            ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {}
        },
        {
          text: 'Realizar cambio',
          handler: data => {
            if (data['name'] === name && data['price'] === price){
              return;
            } else if (data['price'] <= 0){
              alert("El precio no puede ser negativo.")
              return false
            } else if (data['price'] <= 0.0000009){
              alert("El precio es muy pequeño.")
              return false
            } else if (data['price'] > 10){
              alert("El precio es muy grande.")
              return false
            }
            const id = localStorage.getItem('vendor_id')
            var request = {
              name: data['name'],
              price: data['price'],
              product_id: productID,
              id: id
            }
            const token = localStorage.getItem('token')
            
            this.http.put(apiUrl + "/vendor/products", request, {headers: {"Authorization":"Bearer "+token}}).subscribe(
              data2 => {
                if (data2['success']){
                  for (var i = 0; i < this.products.length ; ++i){
                    if (this.products[i]['id'] === parseInt(productID)){
                      this.products[i]['name'] = data['name']
                      this.products[i]['price'] = data['price']  
                      break;
                    }
                  }
                  
                } else {
                  alert(data2['message'])
                }
              }, err => {
                alert("No se pudo conectar con el servidor.")
                return false
              }
            )
          }
        }
      ]
    });
    changeAlert.present();
  }
}
