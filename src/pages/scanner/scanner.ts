import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { Camera } from '@ionic-native/camera';
import { Navbar } from 'ionic-angular';


const Operation = {
  Passport: 0,
  Product: 1
}

@IonicPage()
@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html',
  providers: [Camera, QRScanner]
})
export class ScannerPage {
  @ViewChild(Navbar) navBar: Navbar;
  scanSub: any; // scanner component
  operation: any;
  constructor( public navCtrl: NavController,
               public navParams: NavParams,
               private qrScanner: QRScanner) {
    if (navParams.get('operation') === "scanPassport"){
      this.operation = Operation.Passport
    } else if (navParams.get('operation') === "scanProduct"){
      this.operation = Operation.Product
    }
  }



  ionViewDidLoad() {
    this.navBar.backButtonClick = (e:UIEvent)=>{
     this.stopScan() // The scanned is stopped when the "Back" button is pressed
    }
    this.startScan()
  }

  stopScan(){
    this.qrScanner.hide(); // hide camera preview
    this.scanSub.unsubscribe(); // stop scanning
    this.navCtrl.pop();
  }

  startScan(){
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
                    if (data.passportID !== undefined){
                      localStorage.setItem("passportID", data.passportID) 
                      this.stopScan();
                    } else {
                      this.startScan()
                      alert("QR invalido. Porfavor escanee un QR valido");
                    }
                  } catch(e) {
                    this.startScan()
                    alert("QR invalido. Porfavor escanee un QR valido");
                  }
                  break;
                case Operation.Product:
                  if (true){
                    // localStorage.setItem("passportID", JSON.stringify(data)) 
                    alert(text)
                    this.stopScan();
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
            alert(err);

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
