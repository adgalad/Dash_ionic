import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { Camera } from '@ionic-native/camera';
import { Navbar } from 'ionic-angular';
import { Platform } from 'ionic-angular';
// import {QrScannerComponent} from './scanner.module'
import {QrScannerComponent} from 'angular2-qrscanner';
 

const Operation = {
  Passport: 0,
  Product: 1
}

@IonicPage()
@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html',
  providers: [Camera, QRScanner],
  encapsulation: ViewEncapsulation.None
})
export class ScannerPage {
  @ViewChild(Navbar) navBar: Navbar;
  @ViewChild(QrScannerComponent) qrScannerComponent: QrScannerComponent ;
 
  scanSub: any; // scanner component
  operation: any;
  constructor( public navCtrl: NavController,
               public navParams: NavParams,
               private qrScanner: QRScanner,
               public platform: Platform) {
    if (navParams.get('operation') === "scanPassport"){
      this.operation = Operation.Passport
    } else if (navParams.get('operation') === "scanProduct"){
      this.operation = Operation.Product
    }
  }


  isCordova(){
    return this.platform.is("mobile") && !this.platform.is('mobileweb');
  }

  ionViewDidLoad() {
    this.navBar.backButtonClick = (e:UIEvent)=>{
      if (this.isCordova()) {
          this.mobileStopScan() // The scanned is stopped when the "Back" button is pressed
      } else {
          this.webStopScan()
      }
     
    }
    

    if (this.isCordova()) {
      this.mobileStartScan()
    } else {
      this.webStartScan()
    }

    
  }

  webStartScan(){
    this.qrScannerComponent.getMediaDevices().then(devices => {
      console.log(devices);
      const videoDevices: MediaDeviceInfo[] = [];
      for (const device of devices) {
          if (device.kind.toString() === 'videoinput') {
              videoDevices.push(device);
          }
      }
      if (videoDevices.length > 0){
        let choosenDev;
        for (const dev of videoDevices){
          if (dev.label.includes('front')){
            choosenDev = dev;
            break;
          }
        }
        if (choosenDev) {
            this.qrScannerComponent.chooseCamera.next(choosenDev);
        } else {
            this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
        }
      }
    });

    this.qrScannerComponent.capturedQr.subscribe(text => {
        switch (this.operation) {
                case Operation.Passport:
                  try{
                    var data = JSON.parse(text);

                    if (!data.passportID || !data.lastName || !data.firstName || !data.id || !data.event_id){
                      this.webStartScan()
                      alert("QR invalido. Porfavor escanee un QR valido");
                    } else {
                      localStorage.setItem("qrInfo", JSON.stringify(data)) 
                      this.webStopScan();
                    }
                  } catch(e) {
                    this.webStartScan()
                    console.log(e)
                    alert("QR no es un JSON valido. Porfavor escanee un QR valido");
                  }
                  break;
                case Operation.Product:
                  if (true){
                    // localStorage.setItem("qrInfo", JSON.stringify(data)) 
                    alert(text)
                    this.webStopScan();
                  } 
                  //else {
                  //   this.startScan()
                  //   alert("QR invalido. Porfavor escanee un QR valido");
                  // }
                  break;
                default:
                  alert("@scanner.ts: swith to default case")
                  break;
               }
    });
  }

  webStopScan(){
    this.qrScannerComponent.stopScanning()
    this.qrScannerComponent.capturedQr.unsubscribe()
    this.navCtrl.pop();
  }

  mobileStopScan(){
    this.qrScanner.hide(); // hide camera preview
    this.scanSub.unsubscribe(); // stop scanning
    this.navCtrl.pop();
  }

  mobileStartScan(){
    // Optionally request the permission early
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted

          // start scanning
          this.scanSub = this.qrScanner.scan().subscribe(
            text => {
              switch (this.operation) {
                case Operation.Passport:
                  try{
                    var data = JSON.parse(text);
                    if (!data.passportID || !data.lastName || !data.firstName || !data.id || !data.event_id){
                      this.mobileStartScan()
                      alert("QR invalido. Porfavor escanee un QR valido (1)");
                    } else {
                      localStorage.setItem("qrInfo", JSON.stringify(data)) 
                      this.mobileStopScan();
                    }
                  } catch(e) {
                    this.mobileStartScan()
                    alert("QR no es un JSON valido. Porfavor escanee un QR valido");
                  }
                  break;
                case Operation.Product:
                  if (true){
                    // localStorage.setItem("qrInfo", JSON.stringify(data)) 
                    alert(text)
                    this.mobileStopScan();
                  } 
                  //else {
                  //   this.startScan()
                  //   alert("QR invalido. Porfavor escanee un QR valido");
                  // }
                  break;
                default:
                  alert("@scanner.ts: swith to default case")
                  break;
               }
            }
          );


          this.qrScanner.resumePreview();

          // show camera preview
          this.qrScanner.show()
          .then((data : QRScannerStatus)=> {
            
          },err => {
            alert("No se pudo conectar al servidor")

          });

          // wait for user to scan something, then the observable callback will be called

        } else if (status.denied) {
          alert('Los permisos de la camara han sido negados');
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there

          this.qrScanner.openSettings()
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
          alert('Los permisos de la camara han sido negados');
        }
      })
      .catch((e: any) => {
        alert('Error is' + e);
        this.navCtrl.pop();
      });
  }
  scanPassport(text){


  }

  scanProduct(text){

  }
}
