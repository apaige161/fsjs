webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__heroes_component__ = __webpack_require__("../../../../../src/app/heroes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hero_detail_component__ = __webpack_require__("../../../../../src/app/hero-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__saws_component__ = __webpack_require__("../../../../../src/app/saws.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__saw_detail_component__ = __webpack_require__("../../../../../src/app/saw-detail.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
//routing module to keep cluter out of our app.module
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//this routes is /heroes and creates HeroesComponent
//you can tell the router where to display the component
//this is done in the HTML (routerlink/ router-outlet)
var routes = [
    { path: '', redirectTo: '/api/saws', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */] },
    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_4__hero_detail_component__["a" /* HeroDetailComponent */] },
    { path: 'heroes', component: __WEBPACK_IMPORTED_MODULE_3__heroes_component__["a" /* HeroesComponent */] },
    { path: 'api/saw/:_id', component: __WEBPACK_IMPORTED_MODULE_6__saw_detail_component__["a" /* SawDetailComponent */] },
    { path: 'api/saws', component: __WEBPACK_IMPORTED_MODULE_5__saws_component__["a" /* SawsComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n<!-- sets up a link to the /heroes route -->\n    <nav>\n        <a routerLink=\"/dashboard\">Dashboard</a>\n        <a routerLink=\"/heroes\">Heroes</a>\n        <a routerLink=\"/api/saws\">Chainsaws</a>\n    </nav>\n    <router-outlet></router-outlet>\n    "

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    //the exported class should be in upper camel case and end with Component
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
    //the exported class should be in upper camel case and end with Component
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hero_detail_component__ = __webpack_require__("../../../../../src/app/hero-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__heroes_component__ = __webpack_require__("../../../../../src/app/heroes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hero_service__ = __webpack_require__("../../../../../src/app/hero.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__saw_detail_component__ = __webpack_require__("../../../../../src/app/saw-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__saws_component__ = __webpack_require__("../../../../../src/app/saws.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__saw_service__ = __webpack_require__("../../../../../src/app/saw.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//need FormsModule to us NgModel

//import http to set up server

//user created components
//import navigation

//import the hero stuff




//import the saw stuff



//routing module

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        //import user created components
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__hero_detail_component__["a" /* HeroDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_6__heroes_component__["a" /* HeroesComponent */],
            __WEBPACK_IMPORTED_MODULE_9__saw_detail_component__["a" /* SawDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_10__saws_component__["a" /* SawsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__dashboard_component__["a" /* DashboardComponent */]
        ],
        //import angular modules
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            /*** Routes ***/
            __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutingModule */],
        ],
        //injectable
        providers: [__WEBPACK_IMPORTED_MODULE_7__hero_service__["a" /* HeroService */], __WEBPACK_IMPORTED_MODULE_11__saw_service__["a" /* SawService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hero_service__ = __webpack_require__("../../../../../src/app/hero.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    //inject the HeroService in the constructor
    function DashboardComponent(heroService) {
        this.heroService = heroService;
        //set heros to array of hero
        this.heroes = [];
    }
    //call the service
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHeroes()
            .then(function (heroes) { return _this.heroes = heroes.slice(1, 5); });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'my-dashboard',
        template: './dashboard.component.html'
    })
    //similar logic used before in HeroesComp
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__hero_service__["a" /* HeroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__hero_service__["a" /* HeroService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/hero-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hero-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- only display when a hero is selected -->\n  <div *ngIf=\"hero\">\n<!-- creates an error so wrap this in an *NgIf? -->\n    <h2>{{hero.name}} details!</h2>\n      <div><label>id: </label>{{hero.id}}</div>\n      <div>\n        <label>name: </label>\n            <!-- twoway data bind the hero.name so we can change it dynamicaly -->\n        <input [(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n        <button (click)=\"save()\">Save</button>\n      </div>\n      <!-- goes back to /dashboard -->\n      <button (click)=\"goBack()\">Back</button>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/hero-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hero_service__ = __webpack_require__("../../../../../src/app/hero.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hero__ = __webpack_require__("../../../../../src/app/hero.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import switch map



var HeroDetailComponent = (function () {
    function HeroDetailComponent(heroService, route, location) {
        this.heroService = heroService;
        this.route = route;
        this.location = location;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        //maps the id to a new observeable
        this.route.paramMap
            .switchMap(function (params) { return _this.heroService.getHero(+params.get('id')); })
            .subscribe(function (hero) { return _this.hero = hero; });
    };
    //takes the user back
    HeroDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return HeroDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__hero__["a" /* Hero */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__hero__["a" /* Hero */]) === "function" && _a || Object)
], HeroDetailComponent.prototype, "hero", void 0);
HeroDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'hero-detail',
        template: __webpack_require__("../../../../../src/app/hero-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/hero-detail.component.css")]
    })
    //the exported class should be in upper camel case and end with Component
    ,
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__hero_service__["a" /* HeroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__hero_service__["a" /* HeroService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* Location */]) === "function" && _d || Object])
], HeroDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=hero-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/hero.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroService; });
//data acquisition business to a single service that provides the data 
//and share that service with all components that need the data
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//this makes the service injectable into other areas
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        //this is where we get the hero data from
        //could be mock data or from a db
        this.heroesUrl = '/heroes'; // URL to web api
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    //gets the array of heros
    HeroService.prototype.getHeroes = function () {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    // for demo purposes only
    HeroService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    //need this to fix the issue of not having a get hero method in the
    //hero-detail.component.ts OnInit call
    //method that filters the heroes list from getHeroes() by id
    HeroService.prototype.getHero = function (id) {
        var url = this.heroesUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    //create a new hero
    //the create method used in hero.component
    HeroService.prototype.create = function (name) {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    //update a hero by id
    //click function and handler in the hero.component file
    HeroService.prototype.update = function (hero) {
        var url = this.heroesUrl + "/" + hero.id;
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(function () { return hero; })
            .catch(this.handleError);
    };
    //delete the hero by id
    //click function and handler in the hero.component file
    HeroService.prototype.delete = function (id) {
        var url = this.heroesUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    return HeroService;
}());
HeroService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
    //this is where i need to wire up saws db
    //implement saws instead of heroes
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], HeroService);

var _a;
//# sourceMappingURL=hero.service.js.map

/***/ }),

/***/ "../../../../../src/app/hero.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hero; });
//not a .component class b/c we are just exporting the 'hero'
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());

//# sourceMappingURL=hero.js.map

/***/ }),

/***/ "../../../../../src/app/heroes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  color: #369;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 250%;\n}\n.selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n\n.heroes {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n}\n\n.heroes li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n}\n\n.heroes li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n}\n\n.heroes li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n}\n\n.heroes .text {\n    position: relative;\n    top: -3px;\n\n}\n\n.heroes .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/heroes.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<h1>{{title}}</h1>\n\n  <h2>My Heroes</h2>\n  <div>\n    <!-- the add button -->\n    <label>Hero name:</label> <input #heroName />\n    <button (click)=\"add(heroName.value); heroName.value=''\">\n      Add\n    </button>\n</div>\n    <ul class=\"heroes\">\n      <!-- bind the array of heroes in the \n      component to the template, iterate over them, and display them -->\n      <!-- add a click event to connect the master to the detail -->\n      <!-- the \"onSelect\" click event passing in the hero as an argument -->\n      <!-- add selected class to the selected hero for styling purposes\n            in other words when clicked on, the handler changes the class name -->\n      <li *ngFor=\"let hero of heroes\" (click)=\"onSelect(hero)\" \n        [class.selected]=\"hero === selectedHero\">\n           <!-- each hero goes here -->\n           <button class=\"delete\"\n              (click)=\"delete(hero); $event.stopPropagation()\">x</button>\n           <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n      </li>\n    </ul>\n  <!-- comes from the hero-detail.component.ts file -->\n  <hero-detail [hero]=\"selectedHero\"></hero-detail>\n"

/***/ }),

/***/ "../../../../../src/app/heroes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hero_service__ = __webpack_require__("../../../../../src/app/hero.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //reference to service
var HeroesComponent = (function () {
    //calls the server for data access
    function HeroesComponent(heroService) {
        this.heroService = heroService;
    }
    //add hero
    //push hero
    //clear input field
    //need to create a .create method
    HeroesComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.create(name)
            .then(function (hero) {
            _this.heroes.push(hero);
            _this.selectedHero = null;
        });
    };
    //this is called as a result of getHeroes
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    //As a result of the change to HeroService, 
    //this.heroes is now set to a Promise rather than an array of heroes.
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        //call the service and get the data
        //Pass the callback function as an argument to the Promise's then() method:
        //NOTE** using the arrow syntax gives you access to the parent scope
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
        //The callback sets the component's heroes property
        // to the array of heroes returned by the service
    };
    /*
     //in the HTML use {{hero.name}} to access the hero because it is now a name
      hero: Hero = {
      id: 1,
      name: 'Windstorm'
      };
    */
    //select a hero when clicked, clicked is already bound in the HTML
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    //delete a hero click handler
    //use heroService to build the delete method
    HeroesComponent.prototype.delete = function (hero) {
        var _this = this;
        this.heroService
            .delete(hero.id)
            .then(function () {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        });
    };
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'my-heroes',
        template: __webpack_require__("../../../../../src/app/heroes.component.html"),
        styles: [__webpack_require__("../../../../../src/app/heroes.component.css")],
        //tells Angular to create a fresh instance of the 
        //HeroService when it creates an AppComponent
        providers: [__WEBPACK_IMPORTED_MODULE_1__hero_service__["a" /* HeroService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__hero_service__["a" /* HeroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__hero_service__["a" /* HeroService */]) === "function" && _a || Object])
], HeroesComponent);

var _a;
//# sourceMappingURL=heroes.component.js.map

/***/ }),

/***/ "../../../../../src/app/saw-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/saw-detail.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- only display when a hero is selected -->\n  <div *ngIf=\"saw\">\n<!-- creates an error so wrap this in an *NgIf? -->\n    <h2>{{saw.model}} details!</h2>\n      <div><label>id: </label>{{saw.id}}</div>\n      <div>\n        <label>model: </label>\n            <!-- twoway data bind the hero.name so we can change it dynamicaly -->\n        <input [(ngModel)]=\"saw.model\" placeholder=\"model\"/>\n        <button (click)=\"save()\">Save</button>\n      </div>\n      <!-- goes back to /dashboard -->\n      <button (click)=\"goBack()\">Back</button>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/saw-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__saw_service__ = __webpack_require__("../../../../../src/app/saw.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__saw__ = __webpack_require__("../../../../../src/app/saw.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SawDetailComponent; });
/*** ERR  ***/
//Property 'SawService' does not exist on type 'SawDetailComponent'
//(method) ParamMap.get(name: string): string  --looking for a type number
//i think this has to do with the way mLab has id: nested...
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import switch map



var SawDetailComponent = (function () {
    function SawDetailComponent(SawService, route, location) {
        this.SawService = SawService;
        this.route = route;
        this.location = location;
    }
    SawDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        //maps the id to a new observeable
        this.route.paramMap
            .switchMap(function (params) { return _this.SawService.getSaw(params.get('_id')); })
            .subscribe(function (saw) { return _this.saw = saw; });
    };
    //takes the user back
    SawDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return SawDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__saw__["a" /* Saw */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__saw__["a" /* Saw */]) === "function" && _a || Object)
], SawDetailComponent.prototype, "saw", void 0);
SawDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'saw-detail',
        template: __webpack_require__("../../../../../src/app/saw-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/saw-detail.component.css")]
    })
    //the exported class should be in upper camel case and end with Component
    ,
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__saw_service__["a" /* SawService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__saw_service__["a" /* SawService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* Location */]) === "function" && _d || Object])
], SawDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=saw-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/saw.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SawService; });
//saw service
//data acquisition business to a single service that provides the data 
//and share that service with all components that need the data
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*** ERR  ***/
//Property 'SawService' does not exist on type 'SawDetailComponent'



//this makes the service injectable into other areas
var SawService = (function () {
    function SawService(http) {
        this.http = http;
        //this is where we get the saw data from
        this.sawsUrl = 'api/saws'; // URL to web api
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    //gets the array of saws
    SawService.prototype.getSaws = function () {
        return this.http.get(this.sawsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    // for demo purposes only
    SawService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    //need this to fix the issue of not having a get hero method in the
    //hero-detail.component.ts OnInit call
    //method that filters the heroes list from getHeroes() by id
    SawService.prototype.getSaw = function (_id) {
        var url = this.sawsUrl + "/" + _id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    //create a new hero
    //the create method used in hero.component
    SawService.prototype.create = function (model) {
        return this.http
            .post(this.sawsUrl, JSON.stringify({ model: model }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    //update a hero by id
    //click function and handler in the hero.component file
    SawService.prototype.update = function (saw) {
        var url = this.sawsUrl + "/" + saw._id;
        return this.http
            .put(url, JSON.stringify(saw), { headers: this.headers })
            .toPromise()
            .then(function () { return saw; })
            .catch(this.handleError);
    };
    //delete the hero by id
    //click function and handler in the hero.component file
    //cannot find _id why is this?
    SawService.prototype.delete = function (_id) {
        var url = this.sawsUrl + "/" + _id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    return SawService;
}());
SawService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
    //this is where i need to wire up saws db
    //implement saws instead of heroes
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], SawService);

var _a;
//# sourceMappingURL=saw.service.js.map

/***/ }),

/***/ "../../../../../src/app/saw.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Saw; });
var Saw = (function () {
    function Saw() {
    }
    return Saw;
}());

//# sourceMappingURL=saw.js.map

/***/ }),

/***/ "../../../../../src/app/saws.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/saws.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n\n  <h2>My Saws</h2>\n  <div>\n    <!-- the add button -->\n    <label>Saw model:</label> <input #sawModel />\n    <button (click)=\"add(sawModel.value); sawModel.value=''\">\n      Add\n    </button>\n</div>\n    <ul class=\"saws\">\n      <!-- bind the array of saws in the \n      component to the template, iterate over them, and display them -->\n      <!-- add a click event to connect the master to the detail -->\n      <!-- the \"onSelect\" click event passing in the saw as an argument -->\n      <!-- add selected class to the selected saw for styling purposes\n            in other words when clicked on, the handler changes the class name -->\n      <li *ngFor=\"let saw of saws\" (click)=\"onSelect(saw)\" \n        [class.selected]=\"saw === selectedSaw\">\n           <!-- each hero goes here -->\n           <button class=\"delete\"\n              (click)=\"delete(saw); $event.stopPropagation()\">x</button>\n           <span class=\"badge\">{{saw._id}}</span> {{saw.model}}\n      </li>\n    </ul>\n  <!-- comes from the saw-detail.component.ts file -->\n  <saw-detail [saw]=\"selectedSaw\"></saw-detail>"

/***/ }),

/***/ "../../../../../src/app/saws.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__saw_service__ = __webpack_require__("../../../../../src/app/saw.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SawsComponent; });
//TODO: rebuild from in-memory-data.service
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Cannot find name 'saw'.

 //reference to service
var SawsComponent = (function () {
    //calls the server for data access
    function SawsComponent(sawService) {
        this.sawService = sawService;
    }
    //add saw
    //push saw
    //clear input field
    //need to create a .create method
    SawsComponent.prototype.add = function (model) {
        var _this = this;
        //trims the spaces before and after string
        model = model.trim();
        //if no model make a new 'model'
        if (!model) {
            return;
        }
        this.sawService.create(model)
            .then(function (saw) {
            _this.saws.push(saw);
            _this.selectedSaw = null;
        });
    };
    //this is called as a result of getHeroes
    SawsComponent.prototype.ngOnInit = function () {
        this.getSaws();
    };
    //As a result of the change to HeroService, 
    //this.heroes is now set to a Promise rather than an array of heroes.
    SawsComponent.prototype.getSaws = function () {
        var _this = this;
        //call the service and get the data
        //Pass the callback function as an argument to the Promise's then() method:
        //NOTE** using the arrow syntax gives you access to the parent scope
        this.sawService.getSaws().then(function (saws) { return _this.saws = saws; });
        //The callback sets the component's heroes property
        // to the array of heroes returned by the service
    };
    /*
     //in the HTML use {{saw.model}} to access the saw because it is now a model
      saw: Saw = {
      id: 1,
      model: 'Windstorm'
      };
    */
    //select a saw when clicked, clicked is already bound in the HTML
    SawsComponent.prototype.onSelect = function (saw) {
        this.selectedSaw = saw;
    };
    //delete a saw click handler
    //use sawService to build the delete method
    SawsComponent.prototype.delete = function (saw) {
        var _this = this;
        this.sawService
            .delete(saw._id)
            .then(function () {
            _this.saws = _this.saws.filter(function (h) { return h !== saw; });
            if (_this.selectedSaw === saw) {
                _this.selectedSaw = null;
            }
        });
    };
    return SawsComponent;
}());
SawsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'my-saws',
        template: __webpack_require__("../../../../../src/app/saws.component.html"),
        styles: [__webpack_require__("../../../../../src/app/saws.component.css")],
        //tells Angular to create a fresh instance of the 
        //SawService when it creates an AppComponent
        providers: [__WEBPACK_IMPORTED_MODULE_1__saw_service__["a" /* SawService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__saw_service__["a" /* SawService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__saw_service__["a" /* SawService */]) === "function" && _a || Object])
], SawsComponent);

var _a;
//# sourceMappingURL=saws.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map