(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feature-listar-product-listar-product-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/listar-product/components/listar-product.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/listar-product/components/listar-product.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"my-4\">\n    <h3>Lista de Productos</h3>\n</div>\n<div style=\"width: 100%;\">\n<hr>\n</div>\n<div class=\"container\">\n    <ul class=\"row list-product\">\n        <li *ngFor=\"let product of lista\" class=\"mx-2 my-2\" style=\"width: auto;\">\n            <div class=\"container card px-1\">\n                <div class=\"card-body\">\n                    <div class=\"media \">\n                        <div class=\"media-body\">\n                            <img class=\"rounded mx-auto d-block\" id=\"product-image\" src=\"{{product.images}}\">\n                            <hr class=\"mb-1\">\n                            <div class=\"info-product\">\n                                <div>\n                                    <h5>{{product.name}}</h5>\n                                </div>\n                                <div class=\"\">\n                                    <span class=\"\">{{product.description}}</span>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col\">\n                                        <h6>Precio:</h6>\n                                    </div>\n                                    <div class=\"col\">\n                                        <span>COP: ${{product.price}}</span>\n                                    </div>\n                                    <div class=\"col\">\n                                        <span>USD: ${{product.priceUSD}}</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </li>\n    </ul>\n</div>");

/***/ }),

/***/ "./src/app/core/services/rest.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/rest.service.ts ***!
  \***********************************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");



class RestService {
    constructor(http) {
        this.http = http;
    }
    createDefaultOptions() {
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    optsName(name) {
        const newopts = this.createDefaultOptions();
        newopts.headers['xhr-name'] = name;
        return newopts;
    }
    optsNameCache(name) {
        const newopts = this.optsName(name);
        newopts.headers['xhr-plugin'] = 'pcache';
        return newopts;
    }
    createOptions(opts) {
        const defaultOpts = this.createDefaultOptions();
        if (opts) {
            opts = {
                params: opts.params || defaultOpts.params,
                headers: opts.headers || defaultOpts.headers
            };
            if (!opts.headers['Content-Type']) {
                opts.headers['Content-Type'] = defaultOpts.headers['Content-Type'];
            }
        }
        return opts || defaultOpts;
    }
    optsWithParams(params) {
        const newopts = this.createDefaultOptions();
        newopts.params = params;
        return newopts;
    }
    doGet(serviceUrl, opts) {
        const ropts = this.createOptions(opts);
        return this.http.get(serviceUrl, ropts).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response));
    }
    doPost(serviceUrl, body, opts) {
        const ropts = this.createOptions(opts);
        return this.http.post(serviceUrl, body, ropts).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response));
    }
    doGetParameters(serviceUrl, parametros, opts) {
        const ropts = this.createOptions(opts);
        const options = parametros !== null ? {
            headers: ropts.headers,
            params: parametros
        } : ropts;
        return this.http.get(serviceUrl, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response));
    }
}


/***/ }),

/***/ "./src/app/feature/listar-product/components/listar-product.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/feature/listar-product/components/listar-product.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".list-product {\n  list-style-type: none;\n}\n\n#product-image {\n  width: 160px;\n  height: 160px;\n}\n\n.margin-cero {\n  margin: 0px 0px 0px 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2p1YW4tZGF2aWQvUmVwb3NpdG9yaW9zL1BlcmZpbFRpYy9QZXJmaWxUaWMvcHJvZHVjdC1zdG9yZS1mcm9udC9zcmMvYXBwL2ZlYXR1cmUvbGlzdGFyLXByb2R1Y3QvY29tcG9uZW50cy9saXN0YXItcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZS9saXN0YXItcHJvZHVjdC9jb21wb25lbnRzL2xpc3Rhci1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDRUo7O0FEQUE7RUFDQSxrQ0FBQTtBQ0dBIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZS9saXN0YXItcHJvZHVjdC9jb21wb25lbnRzL2xpc3Rhci1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtcHJvZHVjdHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG4jcHJvZHVjdC1pbWFnZXtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGhlaWdodDogMTYwcHg7XHJcbn1cclxuLm1hcmdpbi1jZXJve1xyXG5tYXJnaW46IDBweCAwcHggMHB4IDBweCAhaW1wb3J0YW50O1xyXG59IiwiLmxpc3QtcHJvZHVjdCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuI3Byb2R1Y3QtaW1hZ2Uge1xuICB3aWR0aDogMTYwcHg7XG4gIGhlaWdodDogMTYwcHg7XG59XG5cbi5tYXJnaW4tY2VybyB7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/feature/listar-product/components/listar-product.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/feature/listar-product/components/listar-product.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ListarProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarProductComponent", function() { return ListarProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_service_list_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/list-products.service */ "./src/app/shared/service/list-products.service.ts");



let ListarProductComponent = class ListarProductComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.lista = this.retornar();
        console.log(this.lista);
    }
    retornar() {
        const products = [
            { productCode: '1', name: 'Lavadaora', description: 'Lavadora', price: 100, priceUSD: 30, images: ['../../../assets/Lavadora.jpg'] },
            { productCode: '2', name: 'Lavadaora', description: 'Lavadora', price: 100, priceUSD: 30, images: ['../../../assets/Lavadora.jpg'] },
            { productCode: '3', name: 'Lavadaora', description: 'Lavadora', price: 100, priceUSD: 30, images: ['../../../assets/large08.jpg'] },
            { productCode: '4', name: 'Lavadaora', description: 'Lavadora', price: 100, priceUSD: 30, images: ['../../../assets/large08.jpgx'] }
        ];
        return products;
    }
};
ListarProductComponent.ctorParameters = () => [
    { type: _shared_service_list_products_service__WEBPACK_IMPORTED_MODULE_2__["ListProductsService"] }
];
ListarProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listar-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./listar-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/listar-product/components/listar-product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./listar-product.component.scss */ "./src/app/feature/listar-product/components/listar-product.component.scss")).default]
    })
], ListarProductComponent);



/***/ }),

/***/ "./src/app/feature/listar-product/listar-product-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/feature/listar-product/listar-product-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ListarProductRounting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarProductRounting", function() { return ListarProductRounting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_listar_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/listar-product.component */ "./src/app/feature/listar-product/components/listar-product.component.ts");




const routes = [
    {
        path: '',
        component: _components_listar_product_component__WEBPACK_IMPORTED_MODULE_3__["ListarProductComponent"]
    }
];
let ListarProductRounting = class ListarProductRounting {
};
ListarProductRounting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ListarProductRounting);



/***/ }),

/***/ "./src/app/feature/listar-product/listar-product.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/feature/listar-product/listar-product.module.ts ***!
  \*****************************************************************/
/*! exports provided: ListarProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarProductModule", function() { return ListarProductModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_listar_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/listar-product.component */ "./src/app/feature/listar-product/components/listar-product.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _listar_product_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listar-product-routing.module */ "./src/app/feature/listar-product/listar-product-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let ListarProductModule = class ListarProductModule {
};
ListarProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_listar_product_component__WEBPACK_IMPORTED_MODULE_2__["ListarProductComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _listar_product_routing_module__WEBPACK_IMPORTED_MODULE_4__["ListarProductRounting"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ]
    })
], ListarProductModule);



/***/ }),

/***/ "./src/app/shared/service/list-products.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/service/list-products.service.ts ***!
  \*********************************************************/
/*! exports provided: ListProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListProductsService", function() { return ListProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/rest.service */ "./src/app/core/services/rest.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let ListProductsService = class ListProductsService extends src_app_core_services_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] {
    constructor(http) {
        super(http);
    }
    listProducts() {
        const rutaPeticion = ``;
        this.doGet(rutaPeticion);
    }
};
ListProductsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ListProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ListProductsService);



/***/ })

}]);