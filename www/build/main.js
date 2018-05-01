webpackJsonp([0],{

/***/ 119:
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
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/activate/activate.module": [
		162
	],
	"../pages/passport/passport.module": [
		172
	],
	"../pages/profile/profile.module": [
		167
	],
	"../pages/recharge/recharge.module": [
		181
	],
	"../pages/scanner/scanner.module": [
		169
	],
	"../pages/signup/signup.module": [
		170
	],
	"../pages/stamp/stamp.module": [
		178
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivatePageModule", function() { return ActivatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activate__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ActivatePageModule = /** @class */ (function () {
    function ActivatePageModule() {
    }
    ActivatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__activate__["a" /* ActivatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__activate__["a" /* ActivatePage */]),
            ],
        })
    ], ActivatePageModule);
    return ActivatePageModule;
}());

//# sourceMappingURL=activate.module.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scanner_scanner__ = __webpack_require__(51);
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
 * Generated class for the ActivatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ActivatePage = /** @class */ (function () {
    function ActivatePage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.passportID = null;
        this.first_recharge = 0;
        this.duff_value = 1;
        this.sending = false;
        this.passportID = 0;
    }
    ActivatePage.prototype.goToScanner = function (operation) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__scanner_scanner__["a" /* ScannerPage */], { "operation": operation });
    };
    ActivatePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        try {
            var qrInfo = JSON.parse(localStorage.getItem("qrInfo"));
            this.passportID = parseInt(qrInfo['passportID']);
            this.firstName = qrInfo['firstName'];
            this.lastName = qrInfo['lastName'];
            this.id = parseInt(qrInfo['id']);
            localStorage.removeItem("qrInfo");
            var token = localStorage.getItem("token");
            this.http.get(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* apiUrl */] + "/activate/passport/" + this.passportID, { headers: { "Authorization": "Bearer " + token } }).subscribe(function (data) {
                if (data['success']) {
                    _this.duff_value = 0.012; //data['event_id'];
                    _this.first_recharge = _this.duff_value * 10;
                }
                else {
                    alert(data['message']);
                }
            }, function (err) {
                alert("No se pudo conectar con el servidor.");
            });
        }
        catch (e) {
            this.passportID = 0;
        }
    };
    ActivatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActivatePage');
    };
    ActivatePage.prototype.activate = function () {
        var _this = this;
        var token = localStorage.getItem("token");
        this.sending = true;
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* apiUrl */] + "/activate/passport", { id: this.passportID, first_recharge: this.first_recharge }, { headers: { "Authorization": "Bearer " + token } }).subscribe(function (data) {
            if (data['success']) {
                alert("Pasaporte activado exitosamente.");
            }
            else {
                alert(data["message"]);
            }
            _this.sending = false;
        }, function (err) {
            alert("No se pudo conectar al servidor");
            _this.sending = false;
        });
    };
    ActivatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activate',template:/*ion-inline-start:"/Users/carlosspaggiari/dash/Dash_ionic/src/pages/activate/activate.html"*/'<!--\n  Generated template for the ActivatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar class="title-dash">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title class="center title">\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="container" style="position:absolute; left: 10%; top:30px;  width:80%">\n    <h2> Activar pasaporte </h2> <br><br>\n    <button class="button" ion-button (click)="goToScanner(\'scanPassport\')">\n      <ion-icon name="qr-scanner"> &nbsp; &nbsp; </ion-icon> Escanear pasaporte\n    </button>\n    <br><br>\n    <ion-item>    \n      <ion-label stacked>ID del pasaporte</ion-label> \n      <ion-input type="number" placeholder="0" [(ngModel)]="passportID" disabled="true" name="passportID"></ion-input>\n    </ion-item>\n    <ion-item>    \n      <ion-label stacked>Cédula</ion-label> \n      <ion-input type="text" placeholder="-" [(ngModel)]="id" disabled="true" name="id"></ion-input>\n    </ion-item>\n    <ion-item>    \n      <ion-label stacked>Nombre</ion-label> \n      <ion-input type="text" placeholder="-" [(ngModel)]="firstName" disabled="true" name="firstName"></ion-input>\n    </ion-item>\n    <ion-item>    \n      <ion-label stacked>Apellido</ion-label> \n      <ion-input type="text" placeholder="-" [(ngModel)]="lastName" disabled="true" name="lastName"></ion-input>\n    </ion-item>\n    <ion-item>    \n      <ion-label stacked>Recarga de DASH ({{first_recharge/duff_value}} sellos)</ion-label> \n      <ion-input type="number"  [(ngModel)]="first_recharge" [disabled]="!passportID" name="lastName"></ion-input>\n    </ion-item>\n    <br><br>\n    <button ion-button (click)="activate()" [disabled]="passportID === 0 || sending">Activar pasaporte</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/carlosspaggiari/dash/Dash_ionic/src/pages/activate/activate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ActivatePage);
    return ActivatePage;
}());

//# sourceMappingURL=activate.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(22);
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
var emailRE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var nameRE = /^([A-zÀ-ÿ]+[ \-']?)*[A-zÀ-ÿ]+$/;
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, http, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.profile = {
            "email": "-",
            "firstName": "-",
            "lastName": "-",
            "id": "-"
        };
        var id = localStorage.getItem("id");
        var token = localStorage.getItem("token");
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* apiUrl */] + "/user/" + id, { headers: { "Authorization": "Bearer " + token } }).subscribe(function (data) {
            if (data['success']) {
                localStorage.setItem("email", data['email']);
                localStorage.setItem("firstName", data['firstName']);
                localStorage.setItem("lastName", data['lastName']);
                _this.profile = data;
                _this.profile.password = localStorage.getItem("password");
            }
            else
                alert(data['message']);
        }, function (err) {
            alert("No se puedo realizar la conexión.\nIntente ingresar al sistema nuevamente.");
        });
    }
    ProfilePage.prototype.modify = function (field, value) {
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
    };
    ProfilePage.prototype.hidePassword = function () {
        return Array(String(this.profile.password).length + 1).join("*");
    };
    ProfilePage.prototype.presentPrompt = function (field) {
        var _this = this;
        var aux = function () {
            switch (field) {
                case "password":
                    return {
                        title: "Cambiar contraseña",
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
                    };
                case "email":
                    return {
                        title: "Cambiar correo electrónico",
                        input: [
                            {
                                name: 'email',
                                placeholder: _this.profile.email,
                                type: 'email'
                            }
                        ]
                    };
                case "name":
                    return {
                        title: "Modificar mi nombre",
                        input: [
                            {
                                name: 'firstName',
                                placeholder: _this.profile.firstName,
                            }, {
                                name: 'lastName',
                                placeholder: _this.profile.lastName,
                            }
                        ]
                    };
                default:
                    alert("Error @profile.ts");
                    break;
            }
        };
        var changeAlert = this.alertCtrl.create({
            title: aux()['title'],
            inputs: aux()['input'],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Realizar cambio',
                    handler: function (data) {
                        if (field === "name") {
                            if (data["firstName"] !== "" && !nameRE.test(data["firstName"])) {
                                alert("El nombre que ingresó es invalido.");
                            }
                            else if (data["lastName"] !== "" && !nameRE.test(data["lastName"])) {
                                alert("El apellido que ingresó es invalido.");
                            }
                            else {
                                var id = localStorage.getItem("id");
                                var firstName_1 = data["firstName"] === "" ? _this.profile.firstName : data["firstName"];
                                var lastName_1 = data["lastName"] === "" ? _this.profile.lastName : data["lastName"];
                                var request = { id: id, firstName: firstName_1, lastName: lastName_1 };
                                var token = localStorage.getItem("token");
                                _this.http.put(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* apiUrl */] + "/user", request, { headers: { "Authorization": "Bearer " + token } }).subscribe(function (data2) {
                                    if (data2["success"]) {
                                        localStorage.setItem("firstName", firstName_1);
                                        _this.profile.firstName = firstName_1;
                                        localStorage.setItem("lastName", lastName_1);
                                        _this.profile.lastName = lastName_1;
                                        return true;
                                    }
                                    else {
                                        alert(data2["message"]);
                                        return false;
                                    }
                                }, function (err) {
                                    alert("(1)No se pudo conectar con el servidor.");
                                    return false;
                                });
                                return true;
                            }
                        }
                        else if (field === "email") {
                            if (!emailRE.test(data['email'])) {
                                alert("El correo electrónico que ingresó es invalido.");
                            }
                            else {
                                var id = localStorage.getItem("id");
                                var request = { id: id, email: data["email"] };
                                var token = localStorage.getItem("token");
                                _this.http.put(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* apiUrl */] + "/user", request, { headers: { "Authorization": "Bearer " + token } }).subscribe(function (data2) {
                                    if (data2["success"]) {
                                        localStorage.setItem("email", data["email"]);
                                        _this.profile.email = data["email"];
                                        localStorage.setItem("token", data2["token"]);
                                    }
                                    else {
                                        alert(data2["message"]);
                                        return false;
                                    }
                                }, function (err) {
                                    alert("No se pudo conectar con el servidor.");
                                    return false;
                                });
                                return true;
                            }
                        }
                        else if (field === "password") {
                            if (String(data['password']).length < 8) {
                                alert("La contraseña debe ser mayor a 8 caracteres.");
                            }
                            else if (data['repassword'] !== data['password']) {
                                alert("Ambas contraseñas deben coincidir.");
                            }
                            else {
                                var id = localStorage.getItem("id");
                                var request = { id: id, password: data["password"] };
                                var token = localStorage.getItem("token");
                                _this.http.put(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* apiUrl */] + "/user", request, { headers: { "Authorization": "Bearer " + token } }).subscribe(function (data2) {
                                    if (data2["success"]) {
                                        localStorage.setItem("password", data["password"]);
                                        _this.profile.password = data["password"];
                                    }
                                    else {
                                        alert(data2["message"]);
                                        return false;
                                    }
                                }, function (err) {
                                    alert("No se pudo conectar con el servidor.");
                                    return false;
                                });
                                return true;
                            }
                        }
                        return false;
                    }
                }
            ]
        });
        changeAlert.present();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/carlosspaggiari/dash/Dash_ionic/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar class="title-dash">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title class="center title">\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div align="center" style="display: table; width: 100%; height: 100%">\n    <div style="vertical-align: middle; display: table-cell">\n      <table>\n        <tr>\n          <td><i class="fa fa-envelope" style="font-size: 30px"></i></td>\n          <td>\n            <p>{{profile.email}}</p>\n          </td>\n          <td style="text-align: right">\n            <a (click)="presentPrompt(\'email\')"><i class="fa fa-edit" style="align:right; font-size: 25px"></i></a>\n          </td>    \n        </tr> \n\n        <tr>\n          <td><i class="fa fa-key" style="font-size: 30px"></i></td>\n          <td>\n            {{hidePassword()}}\n          </td>\n          <td style="text-align: right">\n            <a (click)="presentPrompt(\'password\')"><i class="fa fa-edit" style="align:right; font-size: 25px"></i></a>\n          </td>\n        </tr>\n        <tr>\n          <td><i class="fa fa-user" style="font-size: 30px"></i></td>\n          <td>\n            <p>{{profile.firstName + " " + profile.lastName}}</p>\n          </td>\n          <td style="text-align: right">\n            <a (click)="presentPrompt(\'name\')"><i class="fa fa-edit" style="align:right; font-size: 25px"></i></a>\n          </td>\n        </tr>\n        <tr>\n          <td><i class="fa fa-id-card" style="font-size: 30px"></i></td>\n          <td>\n            <p>{{profile.id}}</p>\n          </td>\n          <td style="text-align: right">\n\n          </td>\n        </tr>\n      </table>\n    </div>\n  </div>\n  <br>\n</ion-content>\n'/*ion-inline-end:"/Users/carlosspaggiari/dash/Dash_ionic/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScannerPageModule", function() { return ScannerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scanner__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_qrscanner__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ScannerPageModule = /** @class */ (function () {
    function ScannerPageModule() {
    }
    ScannerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__scanner__["a" /* ScannerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__scanner__["a" /* ScannerPage */]),
                __WEBPACK_IMPORTED_MODULE_3_angular2_qrscanner__["a" /* NgQrScannerModule */],
            ],
        })
    ], ScannerPageModule);
    return ScannerPageModule;
}());

//# sourceMappingURL=scanner.module.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
            ],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(22);
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
var nameRe = /^([A-zÀ-ÿ]+[ \-']?)*[A-zÀ-ÿ]+$/;
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.requesting = false;
        var formBuilder = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */];
        this.signUpForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(64), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(emailRE), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            firstName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(32), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(nameRe), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(32), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(nameRe), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            id: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[1-9][0-9]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    SignupPage.prototype.ngOnInit = function () {
        var style = document.getElementsByClassName("fixed-content")[2];
        style.innerHTML = "<div style='display:table; height:101%; width:100%'> <div style='display: table-cell; bottom:0; vertical-align: bottom;'> <img style='max-height:30%;' src='assets/imgs/bg.png' width='100%'> </div></div>";
    };
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
        form.type = 2;
        form.active = "false";
        form.email = String(form['email']).toLowerCase();
        this.requesting = true;
        this.http.post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* apiUrl */] + "/user", form).subscribe(function (data) {
            if (data['success']) {
                _this.confirmation();
                _this.requesting = false;
            }
            else {
                alert(data['message']);
                _this.requesting = false;
            }
        }, function (err) {
            alert("No se puedo relizar el registro.\nPor favor intente mas tarde.");
            _this.requesting = false;
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
            selector: 'page-signup',template:/*ion-inline-start:"/Users/carlosspaggiari/dash/Dash_ionic/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar class="title-dash">\n    <!-- <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button> -->\n    <ion-title class="center title">\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!-- <ion-icon name="person" item-start></ion-icon>\n<ion-icon name="person" item-start></ion-icon>\n<ion-icon name="mail" item-start></ion-icon>\n<ion-icon name="eye" item-start></ion-icon>\n<ion-icon name="eye" item-start></ion-icon> -->\n\n\n<ion-content padding>\n  <div align="center" style="display: table; width: 100%; height: 100%">\n    <div style="top: 10vh; display: table-cell;">\n      <form [formGroup]="signUpForm" (ngSubmit)="signUp()">\n        <table style="min-width: 50%">\n\n          <tr>\n            <td><i class="fa fa-envelope" style="font-size: 30px"></i></td>\n            <td>\n              <ion-item>    \n                <ion-input (change)="checkField(\'email\')" placeholder="Email" type="email" formControlName="email" name="email"></ion-input>\n              </ion-item>\n              <div class="error" id="email-error" hidden> Correo Invalido</div>\n            </td>\n          </tr> \n\n          <tr>\n            <td><i class="fa fa-key" style="font-size: 30px"></i></td>\n            <td>\n              <ion-item>    \n                <ion-input (change)="checkField(\'password\')" placeholder="Contraseña" type="password" formControlName="password" name="password"></ion-input>\n              </ion-item>\n              <div class="error" id="password-error" hidden>\n                La contraseña debe tener mas de 8 caracteres\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td><i class="fa fa-user" style="font-size: 30px"></i></td>\n            <td>\n              <ion-item>    \n                <ion-input (change)="checkField(\'firstName\')" placeholder="Nombre" type="text" formControlName="firstName" name="firstName"></ion-input>\n              </ion-item>\n              <div class="error" id="firstName-error" hidden>Nombre invalido</div>\n            </td>\n          </tr>\n          <tr>\n            <td></td>\n            <td>\n              <ion-item>    \n                <ion-input (change)="checkField(\'lastName\')" placeholder="Apellido" type="text" formControlName="lastName" name="lastName"></ion-input>\n              </ion-item>\n              <div class="error" id="lastName-error" hidden>Apellido</div>\n            </td>\n          </tr>\n          <tr>\n            <td><i class="fa fa-id-card" style="font-size: 30px"></i></td>\n            <td>\n              <ion-item>\n                <ion-input (change)="checkField(\'id\')" placeholder="Cédula" type="text" formControlName="id" name="id"></ion-input>\n              </ion-item>\n              <div class="error" id="id-error" hidden>Cédula invalida. ej: 12341234 </div>\n            </td>\n          </tr>\n        </table>\n        <br>\n        <button ion-button type="submit" id="submit" [disabled]="requesting || !signUpForm.valid">Registrarse</button>\n      </form>\n\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/carlosspaggiari/dash/Dash_ionic/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassportPageModule", function() { return PassportPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__passport__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_qrcode2__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PassportPageModule = /** @class */ (function () {
    function PassportPageModule() {
    }
    PassportPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__passport__["a" /* PassportPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__passport__["a" /* PassportPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ngx_qrcode2__["a" /* NgxQRCodeModule */],
            ],
        })
    ], PassportPageModule);
    return PassportPageModule;
}());

//# sourceMappingURL=passport.module.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PassportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PassportPage = /** @class */ (function () {
    function PassportPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.grid = [];
        for (var i = 0; i < 12; i++) {
            this.grid[i] = "<div></div>";
        }
    }
    PassportPage.prototype.local = function (item) {
        console.log(item, localStorage.getItem(item));
        return localStorage.getItem(item);
    };
    PassportPage.prototype.ngOnInit = function () {
        this.refresh();
    };
    PassportPage.prototype.rechargeValue = function () {
        if (this.passport) {
            var stamps = this.passport.stamps + (this.passport.donations > 0 ? this.passport.donations + 1 : 0);
            return (this.duff_value * stamps).toFixed(6);
        }
        else {
            return 0.0;
        }
    };
    PassportPage.prototype.refresh = function () {
        var _this = this;
        var id = this.navParams.get("id");
        this.duff_value = this.navParams.get("duff_value");
        var token = localStorage.getItem("token");
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* apiUrl */] + "/passport/" + id, { headers: { "Authorization": "Bearer " + token } }).subscribe(function (data) {
            if (data["success"]) {
                _this.passport = data['passport'];
            }
            else {
                _this.navCtrl.pop();
                alert("Error 1");
            }
            _this.qrInfo = JSON.stringify({
                passportID: _this.passport.id,
                firstName: localStorage.getItem("firstName"),
                lastName: localStorage.getItem("lastName"),
                id: localStorage.getItem("id"),
                event_id: _this.passport.event_id
            });
            if (_this.passport.activated && !_this.passport.recharged) {
                _this.status = '<b class="green">ACTIVO</b>';
            }
            else if (!_this.passport.activated && _this.passport.recharged) {
                _this.status = '<b class="blue">RECARGADO</b>';
            }
            else if (!_this.passport.activated && !_this.passport.recharged) {
                _this.status = '<b class="red">DESACTIVADO</b>';
            }
            else {
                _this.status = '<b class="red">ERROR</b>';
            }
            var index = 0;
            var i;
            for (i = 0; i < _this.passport.stamps - 0.9; i++) {
                _this.grid[index] = "<img src='assets/imgs/dc-1.png'>";
                index++;
            }
            if ((_this.passport.stamps % 1) > 0) {
                if ((_this.passport.stamps % 1) < 0.50) {
                    _this.grid[index] = "<img src='assets/imgs/dc-1-4.png'>";
                }
                else if ((_this.passport.stamps % 1) < 0.75) {
                    _this.grid[index] = "<img src='assets/imgs/dc-1-2.png'>";
                }
                else if ((_this.passport.stamps % 1) < 1) {
                    _this.grid[index] = "<img src='assets/imgs/dc-3-4.png'>";
                }
                index++;
            }
            for (i = 0; i < _this.passport.donations; i++) {
                _this.grid[index] = "<img src='assets/imgs/dash_heart.png'>";
                index++;
            }
            while (index < 12) {
                _this.grid[index] = "<div></div>";
                index++;
            }
        }, function (err) {
            _this.navCtrl.pop();
            alert("Error 2");
        });
    };
    PassportPage.prototype.firstRecharge = function () {
        if (this.passport && this.passport.first_recharge > 0) {
            return this.passport.first_recharge + " DASH";
        }
        else {
            return "-";
        }
    };
    PassportPage.prototype.secondRecharge = function () {
        if (this.passport && this.passport.recharged) {
            return this.passport.amount_recharged + " DASH";
        }
        else {
            return "-";
        }
    };
    PassportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'passport',template:/*ion-inline-start:"/Users/carlosspaggiari/dash/Dash_ionic/src/pages/passport/passport.html"*/'<ion-header>\n  <ion-navbar class="title-dash">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title class="title">\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="refresh()">\n        <ion-icon name="refresh" style="color:white; font-size: 6vh"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  \n\n  <ion-slides pager="true" style="height: 100%">\n    <ion-slide class="slide-zoom">\n\n      <div class="center">\n        <!-- <img src="{{qrUrl}}"><br> -->\n        <ngx-qrcode qrc-class = "test-class" [qrc-value]="qrInfo"></ngx-qrcode>\n        <h5> Estado del pasaporte: </h5> \n          <div [innerHTML]="status"></div>\n        <h5> Primera Recarga: </h5> {{firstRecharge()}}\n        <h5> Segunda Recarga: </h5> {{secondRecharge()}}\n      </div>\n      <br>\n      <br>\n    </ion-slide>\n    <ion-slide>\n      <div >\n        Su próxima recarga será de:\n        <br>\n        {{ rechargeValue() }} DASH\n        <br>\n        <table align="center">\n          <tr>\n            <td [innerHTML]="grid[0]" id="0"></td>\n            <td [innerHTML]="grid[1]" id="1"></td>\n            <td [innerHTML]="grid[2]" id="2"></td>\n            <td [innerHTML]="grid[3]" id="3"></td>\n          </tr>\n          <tr>\n            <td [innerHTML]="grid[4]" id="4"></td>\n            <td [innerHTML]="grid[5]" id="5"></td>\n            <td [innerHTML]="grid[6]" id="6"></td>\n            <td [innerHTML]="grid[7]" id="7"></td>\n          </tr>\n          <tr>\n            <td [innerHTML]="grid[8]" id="8"></td>\n            <td [innerHTML]="grid[9]" id="9"></td>\n            <td [innerHTML]="grid[10]" id="10"></td>\n            <td [innerHTML]="grid[11]" id="11"></td>\n          </tr>\n        </table>\n      </div>\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>'/*ion-inline-end:"/Users/carlosspaggiari/dash/Dash_ionic/src/pages/passport/passport.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], PassportPage);
    return PassportPage;
}());

//# sourceMappingURL=passport.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StampPageModule", function() { return StampPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stamp__ = __webpack_require__(179);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StampPageModule = /** @class */ (function () {
    function StampPageModule() {
    }
    StampPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__stamp__["a" /* StampPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__stamp__["a" /* StampPage */]),
            ],
        })
    ], StampPageModule);
    return StampPageModule;
}());

//# sourceMappingURL=stamp.module.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StampPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entrepreneurs_entrepreneurs__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scanner_scanner__ = __webpack_require__(51);
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
    function StampPage(navCtrl, navParams, modalCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.requestInfo = {
            "passportID": 0,
            "bigStamps": null,
            "smallStamps": null,
            "isDonation": false,
            "socialStamp": false,
            "entrepreneurs": "",
            "vendor_id": 0,
            "event_id": 0
        };
    }
    StampPage.prototype.goToScanner = function (operation) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__scanner_scanner__["a" /* ScannerPage */], { "operation": operation });
    };
    StampPage.prototype.ionViewWillEnter = function () {
        try {
            var qrInfo = JSON.parse(localStorage.getItem("qrInfo"));
            this.requestInfo.passportID = parseInt(qrInfo["passportID"]);
            this.requestInfo.event_id = parseInt(qrInfo["event_id"]);
            localStorage.removeItem("qrInfo");
        }
        catch (e) {
            this.requestInfo.passportID = 0;
        }
    };
    StampPage.prototype.valid = function () {
        return this.requestInfo.passportID !== 0
            // && this.requestInfo.bigStamps !== null 
            // && this.requestInfo.smallStamps !== null 
            // && (this.requestInfo.bigStamps + this.requestInfo.smallStamps !== 0 || this.requestInfo.socialStamp) 
            && this.requestInfo.vendor_id !== 0;
    };
    StampPage.prototype.sendStampRequest = function () {
        var _this = this;
        this.sending = true;
        var request = {
            id: this.requestInfo.passportID,
            stamps: this.requestInfo.bigStamps * 1 + (this.requestInfo.smallStamps * 0.25),
            vendor_id: this.requestInfo.vendor_id
        };
        if (this.requestInfo.isDonation) {
            request["isDonation"] = true;
        }
        if (this.requestInfo.socialStamp) {
            request["socialStamp"] = true;
        }
        var token = localStorage.getItem("token");
        this.http.post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* apiUrl */] + "/passport/stamp", request, { headers: { "Authorization": "Bearer " + token } }).subscribe(function (data) {
            if (data['success']) {
                alert("Se colocaron los sellos exitosamente.");
                _this.requestInfo = {
                    "passportID": 0,
                    "bigStamps": null,
                    "smallStamps": null,
                    "isDonation": false,
                    "socialStamp": false,
                    "entrepreneurs": "",
                    "vendor_id": 0,
                    "event_id": 0
                };
                _this.sending = false;
            }
            else {
                alert(data["message"]);
                _this.sending = false;
            }
        }, function (err) {
            alert("No se pudo conectar al servidor");
            _this.sending = false;
        });
    };
    StampPage.prototype.ionViewDidLoad = function () {
    };
    StampPage.prototype.eModal = function () {
        var _this = this;
        // if (!this.requestInfo.event_id){
        //   alert("Primero debe escanear un qr de pasaporte valido.")
        // } else {
        var modalParams = {
            event: 1,
            isFoundation: this.requestInfo.isDonation
        };
        var entrepreneursModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__entrepreneurs_entrepreneurs__["a" /* EntrepreneursPage */], modalParams);
        entrepreneursModal.onDidDismiss(function (data) {
            _this.requestInfo.vendor_id = data['vendor_id'];
            _this.requestInfo.entrepreneurs = data['name'];
        });
        entrepreneursModal.present();
        // }
    };
    StampPage.prototype.disableSmall = function () {
        this.requestInfo = {
            "passportID": 0,
            "bigStamps": null,
            "smallStamps": null,
            "isDonation": false,
            "socialStamp": false,
            "entrepreneurs": "",
            "vendor_id": 0,
            "event_id": 0
        };
    };
    StampPage.prototype.placeholder = function () {
        if (this.requestInfo.isDonation) {
            return "Fundación";
        }
        else {
            return "Emprendedor";
        }
    };
    StampPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-stamp',template:/*ion-inline-start:"/Users/carlosspaggiari/dash/Dash_ionic/src/pages/stamp/stamp.html"*/'<!--\n  Generated template for the StampPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar class="title-dash">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title class="center title">\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="content" scroll="true" overflow-scroll="true">\n\n  <div class="container" style="position:absolute; left: 10%; top:30px;  width:80%">\n    <h2> Colocar sello </h2> <br><br>\n    <button class="button" ion-button (click)="goToScanner(\'scanPassport\')">\n      <ion-icon name="qr-scanner"> &nbsp; &nbsp; </ion-icon> Escanear pasaporte\n    </button>\n    <br><br>\n    <ion-item>    \n        <ion-label stacked>ID del  pasaporte</ion-label> \n        <ion-input type="text" placeholder="0x00123" [(ngModel)]="requestInfo.passportID" disabled="true" name="bigStamp"></ion-input>\n    </ion-item>\n    <br><br>\n    <button class="button" ion-button (click)="goToScanner(\'scanProduct\')">\n      <ion-icon name="qr-scanner"> &nbsp; &nbsp; </ion-icon> Escanear producto\n    </button>\n    <br><br>\n    <form (ngSubmit)="sendStampRequest()">\n      <h5>Sellos</h5>\n      <ion-item>    \n        <ion-label stacked>Donación</ion-label>\n        <ion-toggle [(ngModel)]="requestInfo.isDonation" (click)="disableSmall()" name="isDonation" ></ion-toggle>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="text" disabled placeholder={{placeholder()}} [(ngModel)]="requestInfo.entrepreneurs" (click)="eModal()" name="entrepreneur"></ion-input>\n      </ion-item>\n      <ion-item>    \n        <ion-label stacked id="kind" [hidden]="!requestInfo.isDonation">Corazones</ion-label>\n        <ion-label stacked id="kind" [hidden]="requestInfo.isDonation">Grandes</ion-label>\n        <ion-input placeholder="0" type="number" min=0 max=10 [(ngModel)]= "requestInfo.bigStamps" name="bigStamps"></ion-input>\n      </ion-item>\n      <ion-item id="smallStamps" [hidden]="requestInfo.isDonation">    \n        <ion-label stacked>Pequeños</ion-label>\n        <ion-input placeholder="0" type="number" min=0 max=10  [(ngModel)]= "requestInfo.smallStamps" name="smallStamps" ></ion-input>\n      </ion-item>\n      <br>\n      <ion-item id="socialStamps" [hidden]="requestInfo.isDonation">    \n        <ion-label stacked>Redes Sociales</ion-label>\n        <ion-toggle [(ngModel)]="requestInfo.socialStamps" name="socialStamps"></ion-toggle>\n      </ion-item>\n      \n      <br><br>\n      <button ion-button type="submit" [disabled]="sending || !valid()">Colocar Sellos</button>\n      <br><br>\n    </form>\n  </div>\n</ion-content> \n\n'/*ion-inline-end:"/Users/carlosspaggiari/dash/Dash_ionic/src/pages/stamp/stamp.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], StampPage);
    return StampPage;
}());

//# sourceMappingURL=stamp.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntrepreneursPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(22);
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
 * Generated class for the EntrepreneursPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EntrepreneursPage = /** @class */ (function () {
    function EntrepreneursPage(viewCtrl, navParams, http) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.http = http;
        this.eventID = navParams.get("event");
        this.isFoundation = navParams.get("isFoundation");
        this.setItems();
    }
    EntrepreneursPage.prototype.ngOnInit = function () {
        var _this = this;
        var url = "";
        if (this.isFoundation) {
            url = "/event/" + this.eventID + "/foundations";
        }
        else {
            url = "/event/" + this.eventID + "/vendors";
        }
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* apiUrl */] + url).subscribe(function (data) {
            if (data['success']) {
                _this.vendors = data['vendors'];
                _this.setItems();
            }
            else {
                alert(data['message']);
            }
        }, function (err) {
            alert("No se pudo conectar con el servidor.\n" + err);
        });
    };
    EntrepreneursPage.prototype.setItems = function () {
        this.items = [];
        for (var vendor in this.vendors) {
            this.items.push(vendor);
        }
    };
    EntrepreneursPage.prototype.setItem = function (name) {
        this.viewCtrl.dismiss({ name: name, vendor_id: this.vendors[name] });
    };
    EntrepreneursPage.prototype.filterItems = function (ev) {
        this.setItems();
        var val = ev.target.value;
        if (val && val.trim() !== '') {
            this.items = this.items.filter(function (item) {
                return item.toLowerCase().includes(val.toLowerCase());
            });
        }
    };
    // Nooo Borrar :)
    EntrepreneursPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss({ name: "", vendor_id: 0 });
    };
    EntrepreneursPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/carlosspaggiari/dash/Dash_ionic/src/pages/entrepreneurs/entrepreneurs.html"*/'<!--\n  Generated template for the EntrepreneursPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar class="title-dash">\n    <button ion-button (click)="dismiss()">\n      <ion-icon name="arrow-down"></ion-icon>\n    </button>\n    <ion-title class="center title">\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding >\n  <ion-searchbar placeholder="Emprendedor" showCancelButton (ionInput)="filterItems($event)"></ion-searchbar>\n\n    <ion-list>\n    <ion-item *ngFor="let item of items">\n      <div (click)="setItem(item)"> \n        {{ item }}\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/carlosspaggiari/dash/Dash_ionic/src/pages/entrepreneurs/entrepreneurs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], EntrepreneursPage);
    return EntrepreneursPage;
}());

//# sourceMappingURL=entrepreneurs.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RechargePageModule", function() { return RechargePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recharge__ = __webpack_require__(182);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RechargePageModule = /** @class */ (function () {
    function RechargePageModule() {
    }
    RechargePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__recharge__["a" /* RechargePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__recharge__["a" /* RechargePage */]),
            ],
        })
    ], RechargePageModule);
    return RechargePageModule;
}());

//# sourceMappingURL=recharge.module.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RechargePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scanner_scanner__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(22);
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
 * Generated class for the RechargePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RechargePage = /** @class */ (function () {
    function RechargePage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.passportID = 0;
    }
    RechargePage.prototype.goToScanner = function (operation) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__scanner_scanner__["a" /* ScannerPage */], { "operation": operation });
    };
    RechargePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        try {
            var qrInfo = JSON.parse(localStorage.getItem("qrInfo"));
            this.passportID = parseInt(qrInfo['passportID']);
            this.firstName = qrInfo['firstName'];
            this.lastName = qrInfo['lastName'];
            this.id = parseInt(qrInfo['id']);
            var token = localStorage.getItem("token");
            this.http.get(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* apiUrl */] + "/passport/" + this.passportID, { headers: { "Authorization": "Bearer " + token } }).subscribe(function (data) {
                if (data['success']) {
                    _this.rechargeValue = data['passport']['rechargeValue'] + " DASH";
                }
                else {
                    alert(data['message']);
                }
            }, function (err) {
                alert("No se pudo conectar al servidor");
            });
            localStorage.removeItem("qrInfo");
        }
        catch (e) {
            this.passportID = 0;
        }
    };
    RechargePage.prototype.recharge = function () {
        var _this = this;
        this.sending = true;
        var token = localStorage.getItem("token");
        this.http.post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* apiUrl */] + "/passport/recharge", { id: this.passportID }, { headers: { "Authorization": "Bearer " + token } }).subscribe(function (data) {
            if (data['success']) {
                alert("Pasaporte recargado exitosamente.");
                _this.sending = false;
            }
            else {
                alert(data["message"]);
                _this.sending = false;
            }
        }, function (err) {
            alert("No se pudo conectar al servidor.");
            _this.sending = false;
        });
    };
    RechargePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recharge',template:/*ion-inline-start:"/Users/carlosspaggiari/dash/Dash_ionic/src/pages/recharge/recharge.html"*/'<!--\n  Generated template for the RechargePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar class="title-dash">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title class="center title">\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="container" style="position:absolute; left: 10%; top:30px;  width:80%">\n    <h2> Recargar pasaporte</h2> <br><br>\n    <button class="button" ion-button (click)="goToScanner(\'scanPassport\')">\n      <ion-icon name="qr-scanner"> &nbsp; &nbsp; </ion-icon> Escanear pasaporte\n    </button>\n    <br><br>\n    <ion-item>    \n      <ion-label stacked>ID del pasaporte</ion-label> \n      <ion-input type="number" placeholder="0" [(ngModel)]="passportID" disabled="true" name="passportID"></ion-input>\n    </ion-item>\n    <ion-item>    \n      <ion-label stacked>Cédula</ion-label> \n      <ion-input type="text" placeholder="-" [(ngModel)]="id" disabled="true" name="id"></ion-input>\n    </ion-item>\n    <ion-item>    \n      <ion-label stacked>Nombre</ion-label> \n      <ion-input type="text" placeholder="-" [(ngModel)]="firstName" disabled="true" name="firstName"></ion-input>\n    </ion-item>\n    <ion-item>    \n      <ion-label stacked>Apellido</ion-label> \n      <ion-input type="text" placeholder="-" [(ngModel)]="lastName" disabled="true" name="lastName"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Monto de recarga</ion-label> \n      <ion-input type="text" placeholder="-" [(ngModel)]="rechargeValue" disabled="true" name="lastName"></ion-input>\n    </ion-item>\n    <br><br>\n    <button ion-button (click)="recharge()" [disabled]="passportID === 0">Recargar</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/carlosspaggiari/dash/Dash_ionic/src/pages/recharge/recharge.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], RechargePage);
    return RechargePage;
}());

//# sourceMappingURL=recharge.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return apiUrl; });
// Backend
var apiUrl = "https://dashbackend.mybluemix.net/api";
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export validateEmail */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index_index__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup__ = __webpack_require__(171);
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
        var style = document.getElementsByClassName("fixed-content")[1];
        style.innerHTML = "<div style='display:table; height:101%; width:100%'> <div style='display: table-cell; vertical-align: bottom;'> <img style='max-height:35%;' src='assets/imgs/bg.png' width='100%' > </div></div>";
        if (this.isLogged()) {
            this.goToIndex();
        }
    };
    LoginPage.prototype.ionViewWillEnter = function () {
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
            document.getElementById("submit").disabled = true;
            this.credentials.email = String(this.credentials.email).toLowerCase();
            this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* apiUrl */] + '/auth/user', this.credentials).subscribe(function (data) {
                if (data['success'] === true) {
                    localStorage.setItem('email', _this.credentials.email);
                    localStorage.setItem('password', _this.credentials.password);
                    localStorage.setItem('firstName', data['firstName']);
                    localStorage.setItem('lastName', data['lastName']);
                    localStorage.setItem('id', data['id']);
                    localStorage.setItem('permissions', JSON.stringify(data['permissions']));
                    localStorage.setItem('token', data['token']);
                    _this.goToIndex();
                }
                else {
                    document.getElementById("submit").disabled = false;
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
                document.getElementById("submit").disabled = false;
                alert("No se puedo realizar la conexión.\nPor favor intente mas tarde.");
            });
        }
    };
    LoginPage.prototype.signUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/carlosspaggiari/dash/Dash_ionic/src/pages/login/login.html"*/'\n<ion-content padding>\n  <div align="center" class="firstDiv">\n    <div style="top:10vh; display: table-cell;">\n      <img width="170px" src="assets/imgs/dash_logo_m.png">\n      <h3 align="center">Bienvenido</h3>\n        <p id="error" hidden style="background-color: red"> error</p>\n      <div class="container" align="center">\n        <form (ngSubmit)="login()">\n          <ion-item>    \n            <ion-input type="email" placeholder="Correo Electrónico" [(ngModel)]="credentials.email" name="username"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="password" placeholder="Contraseña" [(ngModel)]="credentials.password" name="password"></ion-input>\n          </ion-item>\n          <br>\n          <button ion-button id="submit" type="submit" [disabled]="!validInfo()" > Ingresar</button>\n        </form>\n        <br><br>\n        <p> ¿Aún no te has registrado? </p>\n        <button ion-button (click)="signUp()">Registrarse</button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/carlosspaggiari/dash/Dash_ionic/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__passport_passport__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IndexPage = /** @class */ (function () {
    function IndexPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
    }
    IndexPage.prototype.ngOnInit = function () {
        var _this = this;
        var id = localStorage.getItem("id");
        this.http.get(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* apiUrl */] + "/user/" + id + "/events").subscribe(function (data) {
            _this.events = [];
            _this.closedEvents = [];
            console.log(data);
            if (data["success"]) {
                for (var i = 0; i < data["user_events"].length; i++) {
                    var event_1 = data["user_events"][i];
                    if (event_1['active']) {
                        _this.events.push(event_1);
                    }
                    else {
                        _this.closedEvents.push(event_1);
                    }
                }
            }
            else {
                alert(data["message"]);
            }
            console.log(_this.events);
        }, function (err) {
            alert("No se puedo conectar con el servidor.");
        });
    };
    IndexPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IndexPage');
    };
    IndexPage.prototype.formatDate = function (date) {
        var d = new Date(date * 1000), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [day, month, year].join('/');
    };
    IndexPage.prototype.goToPassport = function (id, duff_value) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__passport_passport__["a" /* PassportPage */], { id: id, duff_value: parseFloat(duff_value) });
    };
    IndexPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-index',template:/*ion-inline-start:"/Users/carlosspaggiari/dash/Dash_ionic/src/pages/index/index.html"*/'<!--\n  Generated template for the IndexPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar class="title-dash">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title class="title">\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="navCtrl.setRoot(navCtrl.getActive().component);">\n        <ion-icon name="refresh" style="color:white; font-size: 6vh"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div align="center" class="firstDiv">\n\n    <div style="top:10vh; display: table-cell;" class="bg">\n      <h3>\n          Eventos\n      </h3>\n      <h3 *ngIf="events !== undefined && events.length === 0" style="color:grey">No estas invitado a ningún evento aún</h3>\n      <ion-list>\n        <div *ngFor="let event of events">\n          <ion-item>\n            <b>{{event.name}}</b><br>\n            {{event.location}}<br>\n            {{formatDate(event.date)}}\n            <button style="height:10vh;" ion-button item-end (click)="goToPassport(event.passport_id, event.duff_value)" >Ver pasaporte</button>\n          </ion-item>\n        </div>\n      </ion-list>\n      <br><br>\n      <h3>\n          Eventos pasados\n      </h3>\n      <h3 *ngIf="closedEvents !== undefined && closedEvents.length === 0" style="color:grey">No has participado en otros eventos</h3>\n      <ion-list>\n        <div *ngFor="let event of closedEvents">\n          <ion-item>\n            <b>{{event.name}}</b><br>\n            {{event.location}}<br>\n            {{formatDate(event.date)}}<br>\n            <b style="color:red">Terminado</b>\n            <button style="height:10vh;" ion-button item-end (click)="goToPassport(event.passport_id, event.duff_value)" >Ver pasaporte</button>\n          </ion-item>\n        </div>\n      </ion-list>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/carlosspaggiari/dash/Dash_ionic/src/pages/index/index.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], IndexPage);
    return IndexPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(247);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login_module__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_index_index_module__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_stamp_stamp_module__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_scanner_scanner_module__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_activate_activate_module__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup_module__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile_module__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_entrepreneurs_entrepreneurs_module__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_passport_passport_module__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_recharge_recharge_module__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { LoginPage } from '../pages/login/login';
// import { IndexPage } from '../pages/index/index';
// import { StampPage } from '../pages/stamp/stamp';
// import { ScannerPage } from '../pages/scanner/scanner';
// import { ActivatePage } from '../pages/activate/activate';
// import { SignupPage } from '../pages/signup/signup';
// import { ProfilePage } from '../pages/profile/profile';
// import { EntrepreneursPage } from '../pages/entrepreneurs/entrepreneurs'
// import { PassportPage } from '../pages/passport/passport'
// import { RechargePage } from '../pages/recharge/recharge';














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/activate/activate.module#ActivatePageModule', name: 'ActivatePage', segment: 'activate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/scanner/scanner.module#ScannerPageModule', name: 'ScannerPage', segment: 'scanner', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/passport/passport.module#PassportPageModule', name: 'PassportPage', segment: 'passport', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stamp/stamp.module#StampPageModule', name: 'StampPage', segment: 'stamp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recharge/recharge.module#RechargePageModule', name: 'RechargePage', segment: 'recharge', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__pages_login_login_module__["a" /* LoginPageModule */],
                __WEBPACK_IMPORTED_MODULE_5__pages_index_index_module__["a" /* IndexPageModule */],
                __WEBPACK_IMPORTED_MODULE_6__pages_stamp_stamp_module__["StampPageModule"],
                __WEBPACK_IMPORTED_MODULE_7__pages_scanner_scanner_module__["ScannerPageModule"],
                __WEBPACK_IMPORTED_MODULE_8__pages_activate_activate_module__["ActivatePageModule"],
                __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup_module__["SignupPageModule"],
                __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile_module__["ProfilePageModule"],
                __WEBPACK_IMPORTED_MODULE_11__pages_entrepreneurs_entrepreneurs_module__["a" /* EntrepreneursPageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_passport_passport_module__["PassportPageModule"],
                __WEBPACK_IMPORTED_MODULE_13__pages_recharge_recharge_module__["RechargePageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_stamp_stamp__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_activate_activate__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_recharge_recharge__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(225);
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
        this.menu.swipeEnable(false);
        // set our app's pages
        this.pages = {
            login: { title: 'Eventos', component: __WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */] },
            profile: { title: 'Perfil', component: __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__["a" /* ProfilePage */] },
            stamp: { title: 'Colocar Sellos', component: __WEBPACK_IMPORTED_MODULE_3__pages_stamp_stamp__["a" /* StampPage */] },
            activate: { title: 'Activar pasaporte', component: __WEBPACK_IMPORTED_MODULE_4__pages_activate_activate__["a" /* ActivatePage */] },
            recharge: { title: 'Recargar pasaporte', component: __WEBPACK_IMPORTED_MODULE_6__pages_recharge_recharge__["a" /* RechargePage */] }
        };
    }
    MyApp.prototype.pageKeys = function () {
        return Object.keys(this.pages);
    };
    MyApp.prototype.hasPermission = function (name) {
        var permissions = JSON.parse(localStorage.getItem("permissions"));
        if (!permissions)
            return false;
        return permissions[name];
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (component) {
        this.menu.close();
        this.nav.setRoot(component);
    };
    MyApp.prototype.logout = function () {
        this.menu.close();
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        localStorage.removeItem('firstName');
        localStorage.removeItem('lastName');
        localStorage.removeItem('id');
        localStorage.removeItem('permissions');
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/carlosspaggiari/dash/Dash_ionic/src/app/app.html"*/'<ion-menu [content]="content" swipeEnabled="false">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menú</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item (click)="openPage(pages[\'login\'].component)">\n        {{pages["login"].title}}\n      </button>\n\n      <button ion-item (click)="openPage(pages[\'profile\'].component)">\n        {{pages["profile"].title}}\n      </button>\n\n      <button *ngIf="hasPermission(\'canStamp\')" ion-item (click)="openPage(pages[\'stamp\'].component)">\n        {{pages["stamp"].title}}\n      </button>\n\n      <button *ngIf="hasPermission(\'canActivate\')" ion-item (click)="openPage(pages[\'activate\'].component)">\n        {{pages["activate"].title}}\n      </button>\n\n      <button *ngIf="hasPermission(\'canRecharge\')" ion-item (click)="openPage(pages[\'recharge\'].component)">\n        {{pages["recharge"].title}}\n      </button>\n\n\n      <button ion-item (click)="logout()">\n        Salir\n      </button>\n\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/carlosspaggiari/dash/Dash_ionic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(223);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IndexPageModule = /** @class */ (function () {
    function IndexPageModule() {
    }
    IndexPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__index__["a" /* IndexPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* IndexPage */]),
            ],
        })
    ], IndexPageModule);
    return IndexPageModule;
}());

//# sourceMappingURL=index.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntrepreneursPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entrepreneurs__ = __webpack_require__(180);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EntrepreneursPageModule = /** @class */ (function () {
    function EntrepreneursPageModule() {
    }
    EntrepreneursPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__entrepreneurs__["a" /* EntrepreneursPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__entrepreneurs__["a" /* EntrepreneursPage */]),
            ],
        })
    ], EntrepreneursPageModule);
    return EntrepreneursPageModule;
}());

//# sourceMappingURL=entrepreneurs.module.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScannerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_qrscanner__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import {QrScannerComponent} from './scanner.module'

var Operation = {
    Passport: 0,
    Product: 1
};
var ScannerPage = /** @class */ (function () {
    function ScannerPage(navCtrl, navParams, qrScanner, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qrScanner = qrScanner;
        this.platform = platform;
        if (navParams.get('operation') === "scanPassport") {
            this.operation = Operation.Passport;
        }
        else if (navParams.get('operation') === "scanProduct") {
            this.operation = Operation.Product;
        }
    }
    ScannerPage.prototype.isCordova = function () {
        return this.platform.is("mobile") && !this.platform.is('mobileweb');
    };
    ScannerPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.navBar.backButtonClick = function (e) {
            if (_this.isCordova()) {
                _this.mobileStopScan(); // The scanned is stopped when the "Back" button is pressed
            }
            else {
                _this.webStopScan();
            }
        };
        if (this.isCordova()) {
            this.mobileStartScan();
        }
        else {
            this.webStartScan();
        }
    };
    ScannerPage.prototype.webStartScan = function () {
        var _this = this;
        this.qrScannerComponent.getMediaDevices().then(function (devices) {
            console.log(devices);
            var videoDevices = [];
            for (var _i = 0, devices_1 = devices; _i < devices_1.length; _i++) {
                var device = devices_1[_i];
                if (device.kind.toString() === 'videoinput') {
                    videoDevices.push(device);
                }
            }
            if (videoDevices.length > 0) {
                var choosenDev = void 0;
                for (var _a = 0, videoDevices_1 = videoDevices; _a < videoDevices_1.length; _a++) {
                    var dev = videoDevices_1[_a];
                    if (dev.label.includes('front')) {
                        choosenDev = dev;
                        break;
                    }
                }
                if (choosenDev) {
                    _this.qrScannerComponent.chooseCamera.next(choosenDev);
                }
                else {
                    _this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
                }
            }
        });
        this.qrScannerComponent.capturedQr.subscribe(function (text) {
            switch (_this.operation) {
                case Operation.Passport:
                    try {
                        var data = JSON.parse(text);
                        if (!data.passportID || !data.lastName || !data.firstName || !data.id || !data.event_id) {
                            _this.webStartScan();
                            alert("QR invalido. Porfavor escanee un QR valido");
                        }
                        else {
                            localStorage.setItem("qrInfo", JSON.stringify(data));
                            _this.webStopScan();
                        }
                    }
                    catch (e) {
                        _this.webStartScan();
                        console.log(e);
                        alert("QR no es un JSON valido. Porfavor escanee un QR valido");
                    }
                    break;
                case Operation.Product:
                    if (true) {
                        // localStorage.setItem("qrInfo", JSON.stringify(data)) 
                        alert(text);
                        _this.webStopScan();
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
    };
    ScannerPage.prototype.webStopScan = function () {
        this.qrScannerComponent.stopScanning();
        this.qrScannerComponent.capturedQr.unsubscribe();
        this.navCtrl.pop();
    };
    ScannerPage.prototype.mobileStopScan = function () {
        this.qrScanner.hide(); // hide camera preview
        this.scanSub.unsubscribe(); // stop scanning
        this.navCtrl.pop();
    };
    ScannerPage.prototype.mobileStartScan = function () {
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
                                if (!data.passportID || !data.lastName || !data.firstName || !data.id || !data.event_id) {
                                    _this.mobileStartScan();
                                    alert("QR invalido. Porfavor escanee un QR valido (1)");
                                }
                                else {
                                    localStorage.setItem("qrInfo", JSON.stringify(data));
                                    _this.mobileStopScan();
                                }
                            }
                            catch (e) {
                                _this.mobileStartScan();
                                alert("QR no es un JSON valido. Porfavor escanee un QR valido");
                            }
                            break;
                        case Operation.Product:
                            if (true) {
                                // localStorage.setItem("qrInfo", JSON.stringify(data)) 
                                alert(text);
                                _this.mobileStopScan();
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
                    alert("No se pudo conectar al servidor");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Navbar */])
    ], ScannerPage.prototype, "navBar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_angular2_qrscanner__["b" /* QrScannerComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_angular2_qrscanner__["b" /* QrScannerComponent */])
    ], ScannerPage.prototype, "qrScannerComponent", void 0);
    ScannerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-scanner',template:/*ion-inline-start:"/Users/carlosspaggiari/dash/Dash_ionic/src/pages/scanner/scanner.html"*/'<!--\n  Generated template for the ScannerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Escaner de QR</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="scanner">\n  <div *ngIf="isCordova()" align="center" style="display: table; width: 100%; height: 100%; background-color: color:rgba(0,0,0,0) ">\n    <ion-icon name="ios-qr-scanner" style="vertical-align: middle; display: table-cell; font-size: 350px; color:rgba(255,255,255,0.4);"></ion-icon>\n  </div>\n  <!-- <div *ngIf="!isCordova()> -->\n    <qr-scanner *ngIf="!isCordova()"\n          [canvasWidth]="1080" \n          [canvasHeight]="720" \n          [stopAfterScan]="true"\n          [updateTime]="500"> \n    </qr-scanner>\n    <ion-icon name="ios-qr-scanner" \n              style=" vertical-align: middle;\n                      display: table-cell;\n                      font-size: 350px; \n                      color:rgba(255,255,255,0.4);">\n      \n    </ion-icon>\n  <!-- </div> -->\n</ion-content>\n'/*ion-inline-end:"/Users/carlosspaggiari/dash/Dash_ionic/src/pages/scanner/scanner.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__["a" /* QRScanner */]],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__["a" /* QRScanner */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], ScannerPage);
    return ScannerPage;
}());

//# sourceMappingURL=scanner.js.map

/***/ })

},[226]);
//# sourceMappingURL=main.js.map