webpackJsonp([5],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scanner_scanner__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActivatePage = /** @class */ (function () {
    function ActivatePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.requestInfo = {
            "passportID": "0x0"
        };
    }
    ActivatePage.prototype.goToScanner = function (operation) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__scanner_scanner__["a" /* ScannerPage */], { "operation": operation });
    };
    ActivatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActivatePage');
    };
    ActivatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activate',template:/*ion-inline-start:"/Users/carlosspaggiari/dash/Dash_ionic/src/pages/activate/activate.html"*/'<!--\n  Generated template for the ActivatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title class="center title">\n      Activar Pasaporte\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="container" style="position:absolute; left: 10%; top:30px;  width:80%">\n    <div id="request-form"> \n        <button class="button" ion-button (click)="goToScanner(\'scanPassport\')">\n          <ion-icon name="qr-scanner"> &nbsp; &nbsp; </ion-icon> Escanear pasaporte\n        </button>\n      <br><br>\n      <ion-item>    \n        <ion-label stacked>ID del pasaporte</ion-label> \n        <ion-input type="text" placeholder="0x00123" [(ngModel)]="requestInfo.passportID" disabled="true" name="passportID"></ion-input>\n      </ion-item>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/carlosspaggiari/dash/Dash_ionic/src/pages/activate/activate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ActivatePage);
    return ActivatePage;
}());

//# sourceMappingURL=activate.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var id = localStorage.getItem("id");
        var token = localStorage.getItem("token");
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* apiUrl */], { headers: { Authentication: "Bearer " + token } }).subscribe(function (data) {
            if (data['success']) {
                localStorage.setItem("email", data['email']);
                localStorage.setItem("firstName", data['firstName']);
                localStorage.setItem("lastName", data['lastName']);
                _this.profile = data;
            }
            else
                alert(data['message']);
        }, function (err) {
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/carlosspaggiari/dash/Dash_ionic/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title class="center title">\n      Perfil\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <table>\n      <tr>\n        <td><i class="fa fa-envelope" style="font-size: 30px"></i></td>\n        <td>\n          <ion-item>    \n            <ion-input placeholder="Email" type="email" formControlName="email" name="email"></ion-input>\n          </ion-item>\n          <div class="error" id="email-error" hidden> Correo Invalido</div>\n        </td>\n      </tr> \n\n      <tr>\n        <td><i class="fa fa-eye" style="font-size: 30px"></i></td>\n        <td>\n          <ion-item>    \n            <ion-input placeholder="Contraseña" type="password" formControlName="password" name="password"></ion-input>\n          </ion-item>\n          <div class="error" id="password-error" hidden>\n            La contraseña debe tener mas de 8 caracteres\n          </div>\n        </td>\n      </tr>\n      <tr>\n        <td><i class="fa fa-user" style="font-size: 30px"></i></td>\n        <td>\n          <ion-item>    \n            <ion-input placeholder="Nombre" type="text" formControlName="firstName" name="firstName"></ion-input>\n          </ion-item>\n          <div class="error" id="firstName-error" hidden>Nombre invalido</div>\n        </td>\n      </tr>\n      <tr>\n        <td></td>\n        <td>\n          <ion-item>    \n            <ion-input placeholder="Apellido" type="text" formControlName="lastName" name="lastName"></ion-input>\n          </ion-item>\n          <div class="error" id="lastName-error" hidden>Apellido</div>\n        </td>\n      </tr>\n      <tr>\n        <td><i class="fa fa-id-card" style="font-size: 30px"></i></td>\n        <td>\n          <ion-item>\n            <ion-input placeholder="Cédula" type="text" formControlName="id" name="id"></ion-input>\n          </ion-item>\n          <div class="error" id="id-error" hidden>Cédula invalida. ej: 12341234 </div>\n        </td>\n      </tr>\n    </table>\n    <br>\n</ion-content>\n'/*ion-inline-end:"/Users/carlosspaggiari/dash/Dash_ionic/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StampPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scanner_scanner__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StampPage = /** @class */ (function () {
    function StampPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.requestInfo = {
            "passportID": "0x0",
            "placeID": "0x0",
            "bigStamps": null,
            "smallStamps": null,
            "heartStamps": null,
            "socialStamp": false
        };
    }
    StampPage.prototype.goToScanner = function (operation) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__scanner_scanner__["a" /* ScannerPage */], { "operation": operation });
    };
    StampPage.prototype.ionViewWillEnter = function () {
        var pID = localStorage.getItem("passportID");
        if (!pID) {
            this.requestInfo.passportID = "0x0";
        }
        else {
            this.requestInfo.passportID = pID;
            localStorage.removeItem("passportID");
        }
    };
    StampPage.prototype.sendStampRequest = function () {
    };
    StampPage.prototype.ionViewDidLoad = function () {
    };
    StampPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-stamp',template:/*ion-inline-start:"/Users/carlosspaggiari/dash/Dash_ionic/src/pages/stamp/stamp.html"*/'<!--\n  Generated template for the StampPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title class="center title">\n      Colocar Sellos\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="content" scroll="true" overflow-scroll="true">\n    <div class="container" style="position:absolute; left: 10%; top:30px;  width:80%">\n      <div id="request-form">\n        <button class="button" ion-button (click)="goToScanner(\'scanPassport\')">\n          <ion-icon name="qr-scanner"> &nbsp; &nbsp; </ion-icon> Escanear pasaporte\n        </button>\n        <br><br>\n        <ion-item>    \n            <ion-label stacked>ID del  pasaporte</ion-label> \n            <ion-input type="text" placeholder="0x00123" [(ngModel)]="requestInfo.passportID" disabled="true" name="bigStamp"></ion-input>\n        </ion-item>\n        <br><br>\n        <button class="button" ion-button (click)="goToScanner(\'scanProduct\')">\n          <ion-icon name="qr-scanner"> &nbsp; &nbsp; </ion-icon> Escanear producto\n        </button>\n        <br><br>\n        <form (ngSubmit)="sendStampsRequest()">\n          <h5>Emprendedor</h5>\n          <ion-item>\n            <ion-select class="select" interface="popover" style="width: 100%" width="100%" >\n              <ion-option selected>Guarapita El Gran Varón</ion-option>\n              <ion-option>BurgerManía</ion-option>\n              <ion-option>Woufles</ion-option>\n              <ion-option>Cocotento</ion-option>\n              <ion-option>Chiringuitos</ion-option>\n              <ion-option>Cerveza Viking Sur</ion-option>\n              <ion-option>Pixie Liquors</ion-option>\n              <ion-option>Restaurante Viejo Puente</ion-option>\n              <ion-option>Be Nuts</ion-option>\n              <ion-option>Chocolate Digatti</ion-option>\n            </ion-select>\n          </ion-item>\n          <h5>Sellos</h5>\n          <ion-item>    \n            <ion-label stacked>Grandes</ion-label>\n            <ion-input placeholder="0" type="number" min=0 max=10 [(ngModel)]= "requestInfo.bigStamps" name="bigStamps"></ion-input>\n          </ion-item>\n          <ion-item>    \n            <ion-label stacked>Pequeños</ion-label>\n            <ion-input placeholder="0" type="number" min=0 max=10 [(ngModel)]= "requestInfo.smallStamps" name="smallStamps"></ion-input>\n          </ion-item>\n          <ion-item>    \n            <ion-label stacked>Donaciones</ion-label>\n            <ion-input placeholder="0" type="number" min=0 max=10 [(ngModel)]= "requestInfo.heartStamps" name="heartStamps"></ion-input>\n          </ion-item>\n          <ion-item>    \n            <ion-label stacked>Redes Sociales</ion-label>\n            <ion-toggle [(ngModel)]="requestInfo.socialStamps" name="socialStamps"></ion-toggle>\n          </ion-item>\n          <br>\n          <button ion-button type="submit" [disabled]="!true">Colocar Sellos</button>\n        </form>\n      </div>\n    </div>\n</ion-content> \n\n'/*ion-inline-end:"/Users/carlosspaggiari/dash/Dash_ionic/src/pages/stamp/stamp.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], StampPage);
    return StampPage;
}());

//# sourceMappingURL=stamp.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var emailRE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        var formBuilder = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */];
        this.signUpForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(64), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(emailRE), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            firstName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(32), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(32), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            id: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[1-9][0-9]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    SignupPage.prototype.confirmation = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmación',
            message: 'Un mensaje de confirmación ha sido envido a su correo electrónico. Debe activar su cuenta antes de poder ingresar al sistema.',
            buttons: [
                {
                    text: 'Ok',
                    role: 'accept',
                    handler: function () {
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        alert.present();
    };
    SignupPage.prototype.signUp = function () {
        var _this = this;
        var form = this.signUpForm.getRawValue();
        form.email = String(form['email']).toLowerCase();
        this.http.post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* apiUrl */] + "/user", form).subscribe(function (data) {
            if (data['success']) {
                console.log(form);
                localStorage.setItem('email', form.email);
                localStorage.setItem('password', form.password);
                localStorage.setItem('firstName', form.firstName);
                localStorage.setItem('lastName', form.lastName);
                localStorage.setItem('id', form.id);
                localStorage.setItem('token', data['token']);
                _this.confirmation();
            }
            else {
                alert(data['message']);
            }
        }, function (err) {
            alert("No se puedo relizar el registro.\nPor favor intente mas tarde.");
        });
    };
    SignupPage.prototype.checkField = function (field) {
        var f = this.signUpForm.get(field);
        if (!f.valid) {
            document.getElementById(field + "-error").hidden = false;
        }
        else {
            document.getElementById(field + "-error").hidden = true;
        }
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/carlosspaggiari/dash/Dash_ionic/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title class="center title">\n      Registrarse\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!-- <ion-icon name="person" item-start></ion-icon>\n<ion-icon name="person" item-start></ion-icon>\n<ion-icon name="mail" item-start></ion-icon>\n<ion-icon name="eye" item-start></ion-icon>\n<ion-icon name="eye" item-start></ion-icon> -->\n\n\n<ion-content padding>\n  <div align="center" style="display: table; width: 100%; height: 100%">\n    <div style="vertical-align: middle; display: table-cell">\n      <form [formGroup]="signUpForm" (ngSubmit)="signUp()">\n        <table>\n\n          <tr>\n            <td><i class="fa fa-envelope" style="font-size: 30px"></i></td>\n            <td>\n              <ion-item>    \n                <ion-input (change)="checkField(\'email\')" placeholder="Email" type="email" formControlName="email" name="email"></ion-input>\n              </ion-item>\n              <div class="error" id="email-error" hidden> Correo Invalido</div>\n            </td>\n          </tr> \n\n          <tr>\n            <td><i class="fa fa-eye" style="font-size: 30px"></i></td>\n            <td>\n              <ion-item>    \n                <ion-input (change)="checkField(\'password\')" placeholder="Contraseña" type="password" formControlName="password" name="password"></ion-input>\n              </ion-item>\n              <div class="error" id="password-error" hidden>\n                La contraseña debe tener mas de 8 caracteres\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td><i class="fa fa-user" style="font-size: 30px"></i></td>\n            <td>\n              <ion-item>    \n                <ion-input (change)="checkField(\'firstName\')" placeholder="Nombre" type="text" formControlName="firstName" name="firstName"></ion-input>\n              </ion-item>\n              <div class="error" id="firstName-error" hidden>Nombre invalido</div>\n            </td>\n          </tr>\n          <tr>\n            <td></td>\n            <td>\n              <ion-item>    \n                <ion-input (change)="checkField(\'lastName\')" placeholder="Apellido" type="text" formControlName="lastName" name="lastName"></ion-input>\n              </ion-item>\n              <div class="error" id="lastName-error" hidden>Apellido</div>\n            </td>\n          </tr>\n          <tr>\n            <td><i class="fa fa-id-card" style="font-size: 30px"></i></td>\n            <td>\n              <ion-item>\n                <ion-input (change)="checkField(\'id\')" placeholder="Cédula" type="text" formControlName="id" name="id"></ion-input>\n              </ion-item>\n              <div class="error" id="id-error" hidden>Cédula invalida. ej: 12341234 </div>\n            </td>\n          </tr>\n        </table>\n        <br>\n        <button ion-button type="submit" [disabled]="!signUpForm.valid">Registrarse</button>\n      </form>\n\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/carlosspaggiari/dash/Dash_ionic/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/activate/activate.module": [
		284,
		4
	],
	"../pages/profile/profile.module": [
		285,
		3
	],
	"../pages/scanner/scanner.module": [
		286,
		2
	],
	"../pages/signup/signup.module": [
		288,
		1
	],
	"../pages/stamp/stamp.module": [
		287,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export validateEmail */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index_index__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.credentials = {
            email: undefined,
            password: undefined
        };
    }
    LoginPage.prototype.isLogged = function () {
        return localStorage.getItem('token') !== null;
    };
    LoginPage.prototype.goToIndex = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__index_index__["a" /* IndexPage */]);
    };
    LoginPage.prototype.ngOnInit = function () {
        if (this.isLogged()) {
            this.goToIndex();
        }
    };
    LoginPage.prototype.validInfo = function () {
        return (validateEmail(this.credentials.email) && this.credentials.password);
    };
    LoginPage.prototype.activationAlert = function () {
        var _this = this;
        var activationAlert = this.alertCtrl.create({
            title: 'Cuenta no activa',
            message: 'Un mensaje de confirmación ha sido envido a su correo electrónico. Debe activar su cuenta antes de poder ingresar al sistema.',
            buttons: [
                {
                    text: 'Ok',
                    role: 'accept',
                    handler: function () { }
                },
                {
                    text: 'Reenviar',
                    role: 'resend',
                    handler: function () {
                        _this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* apiUrl */] + "/activate/user", _this.credentials).subscribe(function (data) {
                            if (!data['success']) {
                                alert(data['message']);
                            }
                        }, function (err) {
                            alert("No se puedo realizar la conexión.\nPor favor intente mas tarde.");
                        });
                    }
                }
            ]
        });
        activationAlert.present();
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        console.log(this.credentials);
        if (this.validInfo()) {
            this.credentials.email = String(this.credentials.email).toLowerCase();
            this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* apiUrl */] + '/auth/user', this.credentials).subscribe(function (data) {
                if (data['success'] === true) {
                    localStorage.setItem('email', _this.credentials.email);
                    localStorage.setItem('password', _this.credentials.password);
                    localStorage.setItem('firstName', data['firstName']);
                    localStorage.setItem('lastName', data['lastName']);
                    localStorage.setItem('id', data['id']);
                    localStorage.setItem('type', data['type']);
                    localStorage.setItem('token', data['token']);
                    _this.goToIndex();
                }
                else {
                    switch (data['code']) {
                        case 2:
                            _this.activationAlert();
                            break;
                        default:
                            alert(data['message']);
                            break;
                    }
                }
            }, function (err) {
                alert("No se puedo realizar la conexión.\nPor favor intente mas tarde.");
            });
        }
    };
    LoginPage.prototype.signUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/carlosspaggiari/dash/Dash_ionic/src/pages/login/login.html"*/'\n<ion-content padding>\n  <div align="center" style="display: table; padding:10%;width: 100%; height: 100%">\n    <div style="vertical-align: middle; display: table-cell">\n      <h3 align="center">Bienvenido</h3>\n        <p id="error" hidden style="background-color: red"> error</p>\n      <div class="container" align="center">\n        <form (ngSubmit)="login()">\n          <ion-item>    \n            <ion-input type="text" placeholder="Correo Electrónico" [(ngModel)]="credentials.email" name="email"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="password" placeholder="Contraseña" [(ngModel)]="credentials.password" name="password"></ion-input>\n          </ion-item>\n          <br>\n          <button ion-button type="submit" [disabled]="!validInfo()"> Ingresar</button>\n        </form>\n        <br><br>\n        <p> ¿Aún no te has registrado? </p>\n        <button ion-button (click)="signUp()">Registrarse</button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"/Users/carlosspaggiari/dash/Dash_ionic/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the IndexComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var IndexPage = /** @class */ (function () {
    function IndexPage() {
    }
    IndexPage.prototype.local = function (item) {
        console.log(item, localStorage.getItem(item));
        return localStorage.getItem(item);
    };
    IndexPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'index',template:/*ion-inline-start:"/Users/carlosspaggiari/dash/Dash_ionic/src/pages/index/index.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title class="title">\n        Mi Pasaporte\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding no-bounce>\n  \n\n  <ion-slides pager="true">\n    <ion-slide>\n      <div class="center">\n        <ion-img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=7712b3g1236123bb3hhj12j3jbb312j331b23213"></ion-img><br>\n        <h5> Estado del pasaporte: </h5> <b style="color:green">ACTIVO</b>\n        <h5> Primera Recarga: </h5> 0.01712 DASH\n        <h5> Segunda Recarga: </h5> -\n      </div>\n    </ion-slide>\n    <ion-slide>\n        <table align="center">\n          <tr>\n            <td id="1">\n              <ion-img src="assets/imgs/dash_circle_normal-1.png"></ion-img>\n            </td>\n            <td id="2">\n              <ion-img src="assets/imgs/dash_circle_normal-1.png"></ion-img>\n            </td>\n            <td id="3">\n              <ion-img src="assets/imgs/dash_circle_normal-1.png"></ion-img>\n            </td>\n            <td id="4">\n              <ion-img src="assets/imgs/dash_circle_normal-1.png"></ion-img>\n            </td>\n          </tr>\n          <tr>\n            <td id="5">\n              <ion-img src="assets/imgs/dash_circle_normal-1.png"></ion-img>\n            </td>\n            <td id="6">\n              <ion-img src="assets/imgs/dash_heart.png"></ion-img>\n            </td>\n            <td id="7"></td>\n            <td id="8"></td>\n          </tr>\n          <tr>\n            <td id="9"></td>\n            <td id="10"></td>\n            <td id="11"></td>\n            <td id="12"></td>\n          </tr>\n          <tr>\n            <td id="13"></td>\n            <td id="14"></td>\n            <td id="15"></td>\n            <td id="16"></td>\n          </tr>\n          <tr>\n            <td id="17"></td>\n            <td id="18"></td>\n            <td id="19"></td>\n            <td id="20"></td>\n          </tr>\n        </table>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"/Users/carlosspaggiari/dash/Dash_ionic/src/pages/index/index.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], IndexPage);
    return IndexPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_index_index__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_stamp_stamp__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_scanner_scanner__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_activate_activate__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_index_index__["a" /* IndexPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_stamp_stamp__["a" /* StampPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_scanner_scanner__["a" /* ScannerPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_activate_activate__["a" /* ActivatePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/activate/activate.module#ActivatePageModule', name: 'ActivatePage', segment: 'activate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/scanner/scanner.module#ScannerPageModule', name: 'ScannerPage', segment: 'scanner', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stamp/stamp.module#StampPageModule', name: 'StampPage', segment: 'stamp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_index_index__["a" /* IndexPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_stamp_stamp__["a" /* StampPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_scanner_scanner__["a" /* ScannerPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_activate_activate__["a" /* ActivatePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_stamp_stamp__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_activate_activate__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // make LoginPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // set our app's pages
        this.pages.login = { title: 'Mi Pasaporte', component: __WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */] };
        this.pages.profile = { title: 'Perfil', component: __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__["a" /* ProfilePage */] };
        if (this.isAmbassador()) {
            this.pages.stamp = { title: 'Colocar Sellos', component: __WEBPACK_IMPORTED_MODULE_3__pages_stamp_stamp__["a" /* StampPage */] };
            this.pages.activate = { title: 'Activar pasaporte', component: __WEBPACK_IMPORTED_MODULE_4__pages_activate_activate__["a" /* ActivatePage */] };
        }
    }
    MyApp.prototype.pageKeys = function () {
        return Object.keys(this.pages);
    };
    MyApp.prototype.isAmbassador = function () {
        return parseInt(localStorage.getItem("type")) === 2;
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (url) {
        this.menu.close();
        this.nav.setRoot(this.pages[url].component);
    };
    MyApp.prototype.logout = function () {
        this.menu.close();
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        localStorage.removeItem('firstName');
        localStorage.removeItem('lastName');
        localStorage.removeItem('id');
        localStorage.removeItem('type');
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/carlosspaggiari/dash/Dash_ionic/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menú</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pageKeys()" (click)="openPage(p)">\n        {{pages[p].title}}\n      </button>\n\n      <button ion-item (click)="logout()">\n        Salir\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/carlosspaggiari/dash/Dash_ionic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScannerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Operation = {
    Passport: 0,
    Product: 1
};
var ScannerPage = /** @class */ (function () {
    function ScannerPage(navCtrl, navParams, qrScanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qrScanner = qrScanner;
        if (navParams.get('operation') === "scanPassport") {
            this.operation = Operation.Passport;
        }
        else if (navParams.get('operation') === "scanProduct") {
            this.operation = Operation.Product;
        }
    }
    ScannerPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.navBar.backButtonClick = function (e) {
            _this.stopScan(); // The scanned is stopped when the "Back" button is pressed
        };
        this.startScan();
    };
    ScannerPage.prototype.stopScan = function () {
        this.qrScanner.hide(); // hide camera preview
        this.scanSub.unsubscribe(); // stop scanning
        this.navCtrl.pop();
    };
    ScannerPage.prototype.startScan = function () {
        var _this = this;
        // Optionally request the permission early
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                // camera permission was granted
                // start scanning
                _this.scanSub = _this.qrScanner.scan().subscribe(function (text) {
                    switch (_this.operation) {
                        case Operation.Passport:
                            try {
                                var data = JSON.parse(text);
                                if (data.passportID !== undefined) {
                                    localStorage.setItem("passportID", data.passportID);
                                    _this.stopScan();
                                }
                                else {
                                    _this.startScan();
                                    alert("QR invalido. Porfavor escanee un QR valido");
                                }
                            }
                            catch (e) {
                                _this.startScan();
                                alert("QR invalido. Porfavor escanee un QR valido");
                            }
                            break;
                        case Operation.Product:
                            if (true) {
                                // localStorage.setItem("passportID", JSON.stringify(data)) 
                                alert(text);
                                _this.stopScan();
                            }
                            //else {
                            //   this.startScan()
                            //   alert("QR invalido. Porfavor escanee un QR valido");
                            // }
                            break;
                        default:
                            alert("@scanner.ts: swith to default case");
                            break;
                    }
                });
                _this.qrScanner.resumePreview();
                // show camera preview
                _this.qrScanner.show()
                    .then(function (data) {
                }, function (err) {
                    alert(err);
                });
                // wait for user to scan something, then the observable callback will be called
            }
            else if (status.denied) {
                alert('Los permisos de la camara han sido negados');
                // camera permission was permanently denied
                // you must use QRScanner.openSettings() method to guide the user to the settings page
                // then they can grant the permission from there
                _this.qrScanner.openSettings();
            }
            else {
                // permission was denied, but not permanently. You can ask for permission again at a later time.
                alert('Los permisos de la camara han sido negados');
            }
        })
            .catch(function (e) {
            alert('Error is' + e);
            _this.navCtrl.pop();
        });
    };
    ScannerPage.prototype.scanPassport = function (text) {
    };
    ScannerPage.prototype.scanProduct = function (text) {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Navbar */])
    ], ScannerPage.prototype, "navBar", void 0);
    ScannerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-scanner',template:/*ion-inline-start:"/Users/carlosspaggiari/dash/Dash_ionic/src/pages/scanner/scanner.html"*/'<!--\n  Generated template for the ScannerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>scanner</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div align="center" style="display: table; width: 100%; height: 100%; background-color: color:rgba(0,0,0,0) ">\n    <ion-icon name="ios-qr-scanner" style="vertical-align: middle; display: table-cell; font-size: 350px; color:rgba(255,255,255,0.4);"></ion-icon>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/carlosspaggiari/dash/Dash_ionic/src/pages/scanner/scanner.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__["a" /* QRScanner */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__["a" /* QRScanner */]])
    ], ScannerPage);
    return ScannerPage;
}());

//# sourceMappingURL=scanner.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return apiUrl; });
// Backend
var apiUrl = "http://192.168.0.115:5001";
//# sourceMappingURL=config.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map