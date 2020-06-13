(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-company/add-company.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-company/add-company.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Add Company</p>\n<div *ngIf=\"test=='admin'\">\n\n    <form action=\"\">\n    <input type=\"name\" placeholder=\"name\" name=\"name\" [(ngModel)]=\"name\" required=true> <br>\n    <input type=\"email\" placeholder=\"email\" name=\"email\" [(ngModel)]=\"email\" required=true> <br>\n    <input type=\"password\" placeholder=\"password\" name = \"password\" [(ngModel)]=\"password\" required=true> <br>\n    </form>\n    <br>\n    <input type=\"button\" class=\"button\" value=\"Add\" (click)=\"addCompany()\">\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-coupon/add-coupon.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-coupon/add-coupon.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Add Coupon</p><br>\n<div *ngIf=\"test=='company'\">\n\n    <form action=\"\" enctype=\"multipart/form-data\">\n       Category: <select name=\"category\" [(ngModel)]=\"category\" required=true >\n            <option value=\"\" disabled selected>Select category...</option>\n            <option value=\"Sport\">Sport</option>\n            <option value=\"Food\">Food</option>\n            <option value=\"Electronics\">Electronics</option>\n            <option value=\"Spa\">Spa</option>\n        </select> <br>\n    <input type=\"name\" placeholder=\"title\" name=\"title\" [(ngModel)]=\"title\" required=true> <br>\n    <input type=\"name\" placeholder=\"description\" name=\"description\" [(ngModel)]=\"description\" required=true> <br>\n    <input type=\"date\" placeholder=\"startDate\" name=\"startDate\" [(ngModel)]=\"startDate\" required=true> <br>\n    <input type=\"date\" placeholder=\"endDate\" name=\"endDate\" [(ngModel)]=\"endDate\" required=true> <br>\n    <input type=\"number\" placeholder=\"amount\" name=\"amount\" [(ngModel)]=\"amount\" required=true> <br>\n    <input type=\"number\" placeholder=\"price\" name=\"price\" [(ngModel)]=\"price\" required=true> <br>\n    Image: <select name=\"image\" [(ngModel)]=\"image\" required=true >\n        <option value=\"\" disabled selected>Select image...</option>\n        <option value=\"assets/images/SportCoupon.png\">Sport Coupon</option>\n        <option value=\"assets/images/FoodCoupon.png\">Food Coupon</option>\n        <option value=\"assets/images/ElectronicsCoupon.png\">Electronics Coupon</option>\n        <option value=\"assets/images/SpaCoupon.png\">Spa Coupon</option>\n    </select> <br>\n    <!-- decided to make a list of all the images avalible for the user to choose from instead of him\n    putting url/path like this: -->\n    <!-- <input type=\"name\" placeholder=\"image url\" name=\"image\" [(ngModel)]=\"image\" required=true> <br> -->\n    </form>\n    <br>\n    <input type=\"button\" class=\"button\" value=\"Add\" (click)=\"addCoupon()\">\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-customer/add-customer.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-customer/add-customer.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Add Customer</p>\n<div *ngIf=\"test=='admin'\">\n\n    <form action=\"\">\n    <input type=\"name\" placeholder=\"first name\" name=\"firstName\" [(ngModel)]=\"firstName\" required=true> <br>\n    <input type=\"name\" placeholder=\"last name\" name=\"lastName\" [(ngModel)]=\"lastName\" required=true> <br>\n    <input type=\"email\" placeholder=\"email\" name=\"email\" [(ngModel)]=\"email\" required=true> <br>\n    <input type=\"password\" placeholder=\"password\" name = \"password\" [(ngModel)]=\"password\" required=true pattern=\"\\S\"> <br>\n    </form>\n    <br>\n    <input type=\"button\" class=\"button\" value=\"Add\" (click)=\"addCustomer()\">\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p *ngIf=\"test=='admin'\">admin works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/company/company.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/company/company.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p *ngIf=\"test=='company'\">company works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer/customer.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer/customer.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p *ngIf=\"test=='customer'\">customer works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/delete-company/delete-company.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/delete-company/delete-company.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Delete Compnay</p>\n<div *ngIf=\"test=='admin'\">\n        <form action=\"\">\n         Id:   <input type=\"number\" placeholder=\"id\" name=\"id\" [(ngModel)]=\"id\" readonly> <br>\n            <input type=\"button\" class=\"button\" value=\"Delete\" (click)=\"deleteCompany()\">\n        </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/delete-coupon/delete-coupon.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/delete-coupon/delete-coupon.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Delete Coupon</p> <br>\n\n<div *ngIf=\"test=='company'\">\n    <form action=\"\">\n        <input readonly type=\"number\" placeholder=\"couponId\" name=\"couponId\" [(ngModel)]=\"couponId\"> <br>\n        <input type=\"button\" class=\"button\" value=\"Delete\" (click)=\"deleteCoupon()\">\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/delete-customer/delete-customer.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/delete-customer/delete-customer.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Delete Customer</p>\n<div *ngIf=\"test=='admin'\">\n    <form action=\"\">\n       Id: <input type=\"number\" placeholder=\"id\" name=\"id\" [(ngModel)]=\"id\" readonly> <br>\n        <input type=\"button\" class=\"button\" value=\"Delete\" (click)=\"deleteCustomer()\">\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Coupon Project by Daniel &copy;</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-companies/get-all-companies.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-companies/get-all-companies.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>All Companies</p>\n<!-- <p  *ngIf=\"test=='admin'\">\n    <div class=\"prodDiv\" *ngFor=\"let c of companies\"> \n       \n        <h3>{{c.id}}</h3>\n        <h3>{{c.name}}</h3>\n        <h3>{{c.email}}</h3>\n    \n    </div>\n<p> -->\n\n<div>\n<table id=\"companyTable\"> \n    <tr>\n        <th>id</th>\n        <th>name</th>\n        <th>email</th>\n        <th>info</th>\n    </tr>\n    <tr  *ngFor=\"let c of companies\">\n    <td>{{c.id}}</td>\n    <td>{{c.name}}</td>\n    <td>{{c.email}}</td>\n    <td><a routerLink=\"/getOneCompany/{{c.id}}\">info</a></td>\n    </tr>\n</table>\n\n</div>    \n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-coupons/get-all-coupons.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-coupons/get-all-coupons.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"prodDiv\" *ngFor=\"let c of coupons\"> \n    <h3>{{c.title}}</h3>\n    <span>{{c.price | currency}} - {{c.qty}} units left in stock</span>\n\n</div> -->\n<p>All Coupons in the website</p> <br>\n\n<div>\n    <table id=\"couponTable\"> \n        <tr>\n            <th>Actions</th>\n            <th>Coupon Id</th>\n            <th>Category</th>\n            <th>Title</th>\n            <th>description</th>\n            <th>Start Date</th>\n            <th>End Date</th>\n            <th>Amount</th>\n            <th>Price</th>\n            <th>Image</th>\n        </tr>\n        <tr  *ngFor=\"let c of coupons\">\n        <th><a routerLink=\"/purchaseCoupon/{{c.id}}\">Purchase</a> </th>\n        <td>{{c.id}}</td>\n        <td>{{c.category}}</td>\n        <td>{{c.title}}</td>\n        <td>{{c.description}}</td>\n        <td>{{c.startDate}}</td>\n        <td>{{c.endDate}}</td>\n        <td>{{c.amount}}</td>\n        <td>{{c.price}}</td>\n        <td><img src=\"myImg\" src=\"{{c.image}}\" alt=\"Show\" style=\"width:75%;max-width:75px;\"></td>\n        </tr>\n    </table>\n    \n    </div>    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-customers/get-all-customers.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-customers/get-all-customers.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>All Customers</p>\n<!-- <p  *ngIf=\"test=='admin'\">\n    <div class=\"prodDiv\" *ngFor=\"let c of customers\"> \n       \n        <h3>{{c.id}}</h3>\n        <h3>{{c.firstName}}</h3>\n        <h3>{{c.email}}</h3>\n    \n    </div>\n<p> -->\n<div>\n<table id=\"customerTable\"> \n    <tr>\n        <th>id</th>\n        <th>firstName</th>\n        <th>lastName</th>\n        <th>email</th>\n        <th>info</th>\n    </tr>\n    <tr  *ngFor=\"let c of customers\">\n    <td>{{c.id}}</td>\n    <td>{{c.firstName}}</td>\n    <td>{{c.lastName}}</td>\n    <td>{{c.email}}</td>\n    <td><a routerLink=\"/getOneCustomer/{{c.id}}\">info</a></td>\n    </tr>\n</table>\n\n</div>    \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-company-coupons-by-category/get-company-coupons-by-category.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-company-coupons-by-category/get-company-coupons-by-category.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Get Company Coupons by Category</p>\n<div  *ngIf=\"test=='company'\" >\n        <form action=\"\">\n            <select name=\"category\" [(ngModel)]=\"category\" required=true >\n                <option value=\"\" disabled selected>Select category...</option>\n                <option value=\"Sport\">Sport</option>\n                <option value=\"Food\">Food</option>\n                <option value=\"Electronics\">Electronics</option>\n                <option value=\"Spa\">Spa</option>\n            </select> <br>\n            <input type=\"button\" value=\"Show\" (click)=\"getCouponByCategory()\">\n        </form>\n</div>\n\n\n           \n<div>\n    <table id=\"couponTable\"> \n        <tr>\n            <th>Actions</th>\n            <th>Coupon Id</th>\n            <th>Category</th>\n            <th>Title</th>\n            <th>description</th>\n            <th>Start Date</th>\n            <th>End Date</th>\n            <th>Amount</th>\n            <th>Price</th>\n            <th>Image</th>\n        </tr>\n        <tr  *ngFor=\"let c of coupons\">\n            <th><a routerLink=\"/updateCoupon/{{c.id}}\">update</a> <br>\n                <a routerLink=\"/deleteCoupon/{{c.id}}\">delete</a></th>\n        <td>{{c.id}}</td>\n        <td>{{c.category}}</td>\n        <td>{{c.title}}</td>\n        <td>{{c.description}}</td>\n        <td>{{c.startDate}}</td>\n        <td>{{c.endDate}}</td>\n        <td>{{c.amount}}</td>\n        <td>{{c.price}}</td>\n        <td><img src=\"myImg\" src=\"{{c.image}}\" alt=\"Show\" style=\"width:75%;max-width:75px;\"></td>\n        </tr>\n    </table>\n    \n    </div>    \n\n    \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-company-coupons-by-max-price/get-company-coupons-by-max-price.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-company-coupons-by-max-price/get-company-coupons-by-max-price.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Get Company Coupons by Max Price</p>\n<div  *ngIf=\"test=='company'\" >\n    <form action=\"\">\n        <input type=\"number\" placeholder=\"price\" name=\"price\" [(ngModel)]=\"price\" required=true> <br>\n        <input type=\"button\" value=\"Show\" (click)=\"getCouponByMaxPrice()\">\n    </form>\n</div>\n           \n    <div>\n        <table id=\"couponTable\"> \n            <tr>\n                <th>Actions</th>\n                <th>Coupon Id</th>\n                <th>Category</th>\n                <th>Title</th>\n                <th>description</th>\n                <th>Start Date</th>\n                <th>End Date</th>\n                <th>Amount</th>\n                <th>Price</th>\n                <th>Image</th>\n            </tr>\n            <tr  *ngFor=\"let c of coupons\">\n                <th><a routerLink=\"/updateCoupon/{{c.id}}\">update</a> <br>\n                    <a routerLink=\"/deleteCoupon/{{c.id}}\">delete</a></th>\n            <td>{{c.id}}</td>\n            <td>{{c.category}}</td>\n            <td>{{c.title}}</td>\n            <td>{{c.description}}</td>\n            <td>{{c.startDate}}</td>\n            <td>{{c.endDate}}</td>\n            <td>{{c.amount}}</td>\n            <td>{{c.price}}</td>\n            <td><img src=\"myImg\" src=\"{{c.image}}\" alt=\"Show\" style=\"width:75%;max-width:75px;\"></td>\n            </tr>\n        </table>\n        \n        </div>    \n    \n        ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-company-coupons/get-company-coupons.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-company-coupons/get-company-coupons.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p > <b> Company coupons</b> </p> <br>\n\n    \n<div>\n    <table id=\"couponTable\"> \n        <tr>\n            <th>Actions</th>\n            <th>Coupon Id</th>\n            <th>Category</th>\n            <th>Title</th>\n            <th>description</th>\n            <th>Start Date</th>\n            <th>End Date</th>\n            <th>Amount</th>\n            <th>Price</th>\n            <th>Image</th>\n        </tr>\n        <tr  *ngFor=\"let c of coupons\">\n        <th><a routerLink=\"/updateCoupon/{{c.id}}\">update</a> <br>\n            <a routerLink=\"/deleteCoupon/{{c.id}}\">delete</a></th>\n        <td>{{c.id}}</td>\n        <td>{{c.category}}</td>\n        <td>{{c.title}}</td>\n        <td>{{c.description}}</td>\n        <td>{{c.startDate}}</td>\n        <td>{{c.endDate}}</td>\n        <td>{{c.amount}}</td>\n        <td>{{c.price}}</td>\n        <td><img src=\"myImg\" src=\"{{c.image}}\" alt=\"Show\" style=\"width:75%;max-width:75px;\"></td>\n        \n        </tr>\n    </table>\n    \n    </div>    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-company-details/get-company-details.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-company-details/get-company-details.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>get-company-details works!</p>\n<p  *ngIf=\"test=='company'\">\n</p>\n<!-- <div class=\"prodDiv\" > \n    <h3>{{company.id}}</h3>\n    <h3>{{company.name}}</h3>\n    <h3>{{company.email}}</h3>\n\n</div> -->\n\n    \n<table id=\"companyTable\"> \n    <tr>\n        <th>id</th>\n        <th>name</th>\n        <th>email</th>\n    </tr>\n    <tr>\n    <td>{{company.id}}</td>\n    <td>{{company.name}}</td>\n    <td>{{company.email}}</td>\n    </tr>\n</table>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-customer-coupon-by-max-price/get-customer-coupon-by-max-price.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-customer-coupon-by-max-price/get-customer-coupon-by-max-price.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Customer Coupon by Max Price</p>\n<div  *ngIf=\"test=='customer'\">\n    <form action=\"\">\n        <input type=\"number\" placeholder=\"price\" name=\"price\" [(ngModel)]=\"price\" required=true> <br>\n        <input type=\"button\" value=\"Show\" (click)=\"getCouponByMaxPrice()\"> \n    </form> \n</div>\n\n    <div>\n        <table id=\"couponTable\"> \n            <tr>\n                <th>Coupon Id</th>\n                <th>Category</th>\n                <th>Title</th>\n                <th>description</th>\n                <th>Start Date</th>\n                <th>End Date</th>\n                <th>Amount</th>\n                <th>Price</th>\n                <th>Image</th>\n            </tr>\n            <tr  *ngFor=\"let c of coupons\">\n            <td>{{c.id}}</td>\n            <td>{{c.category}}</td>\n            <td>{{c.title}}</td>\n            <td>{{c.description}}</td>\n            <td>{{c.startDate}}</td>\n            <td>{{c.endDate}}</td>\n            <td>{{c.amount}}</td>\n            <td>{{c.price}}</td>\n            <td><img src=\"myImg\" src=\"{{c.image}}\" alt=\"Show\" style=\"width:75%;max-width:75px;\"></td>\n            </tr>\n        </table>\n        \n        </div>    \n    \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-customer-coupons-by-category/get-customer-coupons-by-category.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-customer-coupons-by-category/get-customer-coupons-by-category.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Customer Coupons by Category</p>\n<div  *ngIf=\"test=='customer'\" >\n    <form action=\"\">\n        <select name=\"category\" [(ngModel)]=\"category\" required=true >\n            <option value=\"\" disabled selected>Select category...</option>\n            <option value=\"Sport\">Sport</option>\n            <option value=\"Food\">Food</option>\n            <option value=\"Electronics\">Electronics</option>\n            <option value=\"Spa\">Spa</option>\n        </select> <br>\n        <input type=\"button\" value=\"Show\" (click)=\"getCouponByCategory()\">\n    </form>\n</div>\n\n\n              \n<div>\n    <table id=\"couponTable\"> \n        <tr>\n            <th>Coupon Id</th>\n            <th>Category</th>\n            <th>Title</th>\n            <th>description</th>\n            <th>Start Date</th>\n            <th>End Date</th>\n            <th>Amount</th>\n            <th>Price</th>\n            <th>Image</th>\n        </tr>\n        <tr  *ngFor=\"let c of coupons\">\n        <td>{{c.id}}</td>\n        <td>{{c.category}}</td>\n        <td>{{c.title}}</td>\n        <td>{{c.description}}</td>\n        <td>{{c.startDate}}</td>\n        <td>{{c.endDate}}</td>\n        <td>{{c.amount}}</td>\n        <td>{{c.price}}</td>\n        <td><img src=\"myImg\" src=\"{{c.image}}\" alt=\"Show\" style=\"width:75%;max-width:75px;\"></td>\n        </tr>\n    </table>\n    \n    </div>    \n\n    \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-customer-coupons/get-customer-coupons.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-customer-coupons/get-customer-coupons.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Customer Coupons</p> <br>\n\n\n    \n<div>\n    <table id=\"couponTable\"> \n        <tr>\n            <th>Coupon Id</th>\n            <th>Category</th>\n            <th>Title</th>\n            <th>description</th>\n            <th>Start Date</th>\n            <th>End Date</th>\n            <th>Amount</th>\n            <th>Price</th>\n            <th>Image</th>\n        </tr>\n        <tr  *ngFor=\"let c of coupons\">\n        <td>{{c.id}}</td>\n        <td>{{c.category}}</td>\n        <td>{{c.title}}</td>\n        <td>{{c.description}}</td>\n        <td>{{c.startDate}}</td>\n        <td>{{c.endDate}}</td>\n        <td>{{c.amount}}</td>\n        <td>{{c.price}}</td>\n        <td><img src=\"myImg\" src=\"{{c.image}}\" alt=\"Show\" style=\"width:75%;max-width:75px;\"></td>\n        </tr>\n    </table>\n    \n    </div>    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-customer-details/get-customer-details.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-customer-details/get-customer-details.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Customer Details</p> <br>\n<!-- \n<p  *ngIf=\"test=='customer'\"></p>\n<div class=\"prodDiv\" > \n    <h3>{{customer.id}}</h3>\n    <h3>{{customer.firstName}}</h3>\n    <h3>{{customer.email}}</h3>\n\n</div> -->\n\n<div>\n    <table id=\"customerTable\"> \n        <tr>\n            <th>id</th>\n            <th>firstName</th>\n            <th>lastName</th>\n            <th>email</th>\n        </tr>\n        <tr>\n        <td>{{customer.id}}</td>\n        <td>{{customer.firstName}}</td>\n        <td>{{customer.lastName}}</td>\n        <td>{{customer.email}}</td>\n        </tr>\n    </table>\n    \n        \n        </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-one-company/get-one-company.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-one-company/get-one-company.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Get One Company</p>\n<div *ngIf=\"test=='admin'\">\n    <form action=\"\">\n        <input type=\"number\" placeholder=\"id\" name=\"id\" [(ngModel)]=\"id\" readonly> <br>\n        <!-- decided to not let search -->\n        <!-- <input type=\"button\" value=\"search\" (click)=\"getOneCompany()\"> -->\n    </form>\n</div>\n\n\n    \n    <table id=\"companyTable\"> \n        <tr>\n            <th>id</th>\n            <th>name</th>\n            <th>email</th>\n        </tr>\n        <tr>\n        <td>{{company.id}}</td>\n        <td>{{company.name}}</td>\n        <td>{{company.email}}</td>\n        </tr>\n    </table>\n\n    <div>\n        <button class=\"buttonUpdate\" a routerLink=\"/updateCompany/{{company.id}}\">Update Company</button>\n        <button class=\"buttonDelete\" a routerLink=\"/deleteCompany/{{company.id}}\">Delete Company</button>\n    </div>\n\n   \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-one-customer/get-one-customer.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-one-customer/get-one-customer.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>get-one-customer works!</p>\n<div *ngIf=\"test=='admin'\">\n    <form action=\"\">\n        <input type=\"number\" placeholder=\"id\" name=\"id\" [(ngModel)]=\"id\" readonly> <br>\n        <!-- <input type=\"button\" value=\"search\" (click)=\"getOneCustomer()\"> -->\n    </form>\n</div>\n<div>\n<table id=\"customerTable\"> \n    <tr>\n        <th>id</th>\n        <th>firstName</th>\n        <th>lastName</th>\n        <th>email</th>\n    </tr>\n    <tr>\n    <td>{{customer.id}}</td>\n    <td>{{customer.firstName}}</td>\n    <td>{{customer.lastName}}</td>\n    <td>{{customer.email}}</td>\n    </tr>\n</table> \n    </div>\n    <div>\n        <button class=\"buttonUpdate\" a routerLink=\"/updateCustomer/{{customer.id}}\">Update Customer</button>\n        <button class=\"buttonDelete\" a routerLink=\"/deleteCustomer/{{customer.id}}\">Delete Customer</button>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Coupon Project by Daniel</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/layout.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/layout.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <header>\n<app-header></app-header>\n    </header>\n    <nav>\n<app-nav></app-nav>\n    </nav>\n    <main>\n    <router-outlet></router-outlet>\n    </main>\n    <footer>\n<app-footer></app-footer>\n    </footer>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n    <input type=\"email\" placeholder=\"email\" name=\"email\" [(ngModel)]=\"email\" required=true> <br>\n    <input type=\"password\" placeholder=\"password\" name = \"password\" [(ngModel)]=\"password\" required=true> <br>\n   <select name=\"\" [(ngModel)]=\"clientType\">\n       <option value=\"Administrator\">Administrator</option>\n       <option value=\"Company\">Company</option>\n       <option value=\"Customer\">Customer</option>\n   </select> <br>\n    <input type=\"button\" class=\"button\" value=\"Login\" (click)=\"loginMethod()\"> <br>\n    <!-- <input type=\"button\" value=\"logout\" (click)=\"logoutMethod()\"> <br> -->\n\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>main works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/nav.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/nav.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--I left the comments for testing -->\n<div>\n  Menu <br>\n\n<div *ngIf=\"test=='admin'\">\n   <br>\n  <a routerLink=\"addCompany\">Add Company</a> <br>\n  <!-- <a routerLink=\"updateCompany\">Update Company</a> <br>\n  <a routerLink=\"deleteCompany\">Delete Company</a> <br> -->\n  <a routerLink=\"getAllCompanies\">Get All Companies</a> <br>\n  <!-- <a routerLink=\"getOneCompany\">Get one Company</a> <br> -->\n  <a routerLink=\"addCustomer\">Add Customer</a> <br>\n  <!-- <a routerLink=\"updateCustomer\">Update Customer</a> <br>\n  <a routerLink=\"deleteCustomer\">Delete Customer</a> <br> -->\n  <a routerLink=\"getAllCustomers\">Get All Customers</a> <br>\n  <!-- <a routerLink=\"getOneCustomer\">Get one Customer</a> <br> -->\n\n</div>\n<div *ngIf=\"test=='company'\">\n  <br>\n  <a routerLink=\"addCoupon\">Add Coupon</a> <br>\n  <!-- <a routerLink=\"updateCoupon\">Update Coupon</a> <br>\n  <a routerLink=\"deleteCoupon\">Delete Coupon</a> <br> -->\n  <a routerLink=\"getCompanyCoupon\">Get Company Coupons</a> <br>\n  <a routerLink=\"getCompanyCouponByCategory\">Get Company Coupons by category</a> <br>\n  <a routerLink=\"getCompanyCouponByMaxPrice\">Get Company Coupons by max Price</a> <br>\n  <a routerLink=\"getCompanyDetails\">Get Company Details</a> <br>\n\n</div>\n<div *ngIf=\"test=='customer'\">\n  <br>\n  <!-- <a routerLink=\"purchaseCoupon\">Purchase Coupon</a> <br> -->\n  <a routerLink=\"getAllCoupons\">Get all Coupons</a> <br>\n  <a routerLink=\"getCustomerCoupons\">Get Customer Coupon</a> <br>\n  <a routerLink=\"getCustomerCouponsByCategory\">Get Customer Coupon by Category</a> <br>\n  <a routerLink=\"getCustomerCouponsByMaxPrice\">Get Customer Coupon by max price</a> <br>\n  <a routerLink=\"getCustomerDetails\">Get Customer Details</a> <br>\n</div>\n\n <div *ngIf=\"test=='customer'||test=='company'||test=='admin'\">\n  <button class=\"button\" (click)=\"logoutMethod()\">Logout</button> <br>\n </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pagenotfound/pagenotfound.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pagenotfound/pagenotfound.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Page Not Found!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/purchase-coupon/purchase-coupon.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/purchase-coupon/purchase-coupon.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Purchase Coupon</p> <br>\n<div *ngIf=\"test=='customer'\">\n\n    <form action=\"\">\n   Id: <input type=\"number\" placeholder=\"CouponId\" name=\"CouponId\" [(ngModel)]=\"CouponId\" required=true> <br>\n    </form>\n    <br>\n    <input type=\"button\" class=\"button\" value=\"Buy\" (click)=\"purchaseCoupon()\">\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-company/update-company.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-company/update-company.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Update Company info</p>\n<div *ngIf=\"test=='admin'\">\n    <form action=\"\">\n        id:    <input type=\"number\" placeholder=\"id\" name=\"id\" [(ngModel)]=\"id\"> <br>\n            <input type=\"button\" value=\"Fill inforamtion\" (click)=\"fillInfo()\"> <br>\n           \n    </form>\n</div>\n<div *ngIf=\"fill\">\n<form action=\"\">\n name:       <input readonly type=\"name\" placeholder=\"name\" name=\"name\" [(ngModel)]=\"name\" required=true> <br>\n email:      <input type=\"email\" placeholder=\"email\" name=\"email\" [(ngModel)]=\"email\" required=true> <br>\n password:   <input type=\"text\" placeholder=\"password\" name = \"password\" [(ngModel)]=\"password\" required=true> <br>\n    <br>\n    <input type=\"button\" class=\"button\" value=\"Update\" (click)=\"updateCompany()\">\n</form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-coupon/update-coupon.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-coupon/update-coupon.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Update Coupon</p>  <br>\n<div *ngIf=\"test=='company'\">\n\n    <form action=\"\">\n    <input type=\"number\" readonly placeholder=\"couponId\" name=\"couponId\" [(ngModel)]=\"couponId\" required=true> <br>   \n    </form>\n    <br>\n    <!-- decided not to use this button in the end but left it for testing -->\n    <!-- <input type=\"button\" value=\"Fill\" (click)=\"fillInfo()\"> -->\n</div>\n<div *ngIf=\"fill\">\n    <form action=\"\">\n        <select name=\"category\" [(ngModel)]=\"category\" required=true >\n            <option value=\"\" disabled selected>Select category...</option>\n            <option value=\"Sport\">Sport</option>\n            <option value=\"Food\">Food</option>\n            <option value=\"Electronics\">Electronics</option>\n            <option value=\"Spa\">Spa</option>\n        </select> <br>\n        <input type=\"name\" placeholder=\"title\" name=\"title\" [(ngModel)]=\"title\" required=true> <br>\n        <input type=\"name\" placeholder=\"description\" name=\"description\" [(ngModel)]=\"description\" required=true> <br>\n        <input type=\"date\" placeholder=\"startDate\" name=\"startDate\" [(ngModel)]=\"startDate\" required=true> <br>\n        <input type=\"date\" placeholder=\"endDate\" name=\"endDate\" [(ngModel)]=\"endDate\" required=true> <br>\n        <input type=\"number\" placeholder=\"amount\" name=\"amount\" [(ngModel)]=\"amount\" required=true> <br>\n        <input type=\"number\" placeholder=\"price\" name=\"price\" [(ngModel)]=\"price\" required=true> <br>\n        Image: <select name=\"image\" [(ngModel)]=\"image\" required=true >\n            <option value=\"\" disabled selected>Select image...</option>\n            <option value=\"assets/images/SportCoupon.png\">Sport Coupon</option>\n            <option value=\"assets/images/FoodCoupon.png\">Food Coupon</option>\n            <option value=\"assets/images/ElectronicsCoupon.png\">Electronics Coupon</option>\n            <option value=\"assets/images/SpaCoupon.png\">Spa Coupon</option>\n        </select> <br>\n       \n    </form>\n    <input type=\"button\" class=\"button\" value=\"Update\" (click)=\"updateCoupon()\">\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-customer/update-customer.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-customer/update-customer.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Update Customer</p>\n<div *ngIf=\"test=='admin'\">\n    <form action=\"\">\n         Id:   <input type=\"number\" placeholder=\"id\" name=\"id\" [(ngModel)]=\"id\"> <br>\n            <input type=\"button\" value=\"Fill inforamtion\" (click)=\"fillInfo()\"> <br>\n            \n    </form>\n</div>\n<div *ngIf=\"fill\">\n    <form action=\"\">\n        FirstName: <input type=\"name\" placeholder=\"name\" name=\"firstName\" [(ngModel)]=\"firstName\" required=true> <br>\n       LastName: <input type=\"name\" placeholder=\"name\" name=\"lastName\" [(ngModel)]=\"lastName\" required=true> <br>\n        Email:    <input type=\"email\" placeholder=\"email\" name=\"email\" [(ngModel)]=\"email\" required=true> <br>\n        Password:    <input type=\"text\" placeholder=\"password\" name = \"password\" [(ngModel)]=\"password\" required=true> <br>\n            <br>\n            <input type=\"button\" class=\"button\" value=\"Update\" (click)=\"updateCustomer()\">\n    </form>\n    </div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_company_company_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/company/company.component */ "./src/app/components/company/company.component.ts");
/* harmony import */ var _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/customer/customer.component */ "./src/app/components/customer/customer.component.ts");
/* harmony import */ var _components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pagenotfound/pagenotfound.component */ "./src/app/components/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _components_get_all_coupons_get_all_coupons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/get-all-coupons/get-all-coupons.component */ "./src/app/components/get-all-coupons/get-all-coupons.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/add-company/add-company.component */ "./src/app/components/add-company/add-company.component.ts");
/* harmony import */ var _components_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/update-company/update-company.component */ "./src/app/components/update-company/update-company.component.ts");
/* harmony import */ var _components_delete_company_delete_company_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/delete-company/delete-company.component */ "./src/app/components/delete-company/delete-company.component.ts");
/* harmony import */ var _components_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/get-all-companies/get-all-companies.component */ "./src/app/components/get-all-companies/get-all-companies.component.ts");
/* harmony import */ var _components_get_one_company_get_one_company_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/get-one-company/get-one-company.component */ "./src/app/components/get-one-company/get-one-company.component.ts");
/* harmony import */ var _components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/add-customer/add-customer.component */ "./src/app/components/add-customer/add-customer.component.ts");
/* harmony import */ var _components_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/update-customer/update-customer.component */ "./src/app/components/update-customer/update-customer.component.ts");
/* harmony import */ var _components_delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/delete-customer/delete-customer.component */ "./src/app/components/delete-customer/delete-customer.component.ts");
/* harmony import */ var _components_get_all_customers_get_all_customers_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/get-all-customers/get-all-customers.component */ "./src/app/components/get-all-customers/get-all-customers.component.ts");
/* harmony import */ var _components_get_one_customer_get_one_customer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/get-one-customer/get-one-customer.component */ "./src/app/components/get-one-customer/get-one-customer.component.ts");
/* harmony import */ var _components_add_coupon_add_coupon_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/add-coupon/add-coupon.component */ "./src/app/components/add-coupon/add-coupon.component.ts");
/* harmony import */ var _components_update_coupon_update_coupon_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/update-coupon/update-coupon.component */ "./src/app/components/update-coupon/update-coupon.component.ts");
/* harmony import */ var _components_delete_coupon_delete_coupon_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/delete-coupon/delete-coupon.component */ "./src/app/components/delete-coupon/delete-coupon.component.ts");
/* harmony import */ var _components_get_company_coupons_get_company_coupons_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/get-company-coupons/get-company-coupons.component */ "./src/app/components/get-company-coupons/get-company-coupons.component.ts");
/* harmony import */ var _components_get_company_coupons_by_category_get_company_coupons_by_category_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/get-company-coupons-by-category/get-company-coupons-by-category.component */ "./src/app/components/get-company-coupons-by-category/get-company-coupons-by-category.component.ts");
/* harmony import */ var _components_get_company_coupons_by_max_price_get_company_coupons_by_max_price_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/get-company-coupons-by-max-price/get-company-coupons-by-max-price.component */ "./src/app/components/get-company-coupons-by-max-price/get-company-coupons-by-max-price.component.ts");
/* harmony import */ var _components_get_company_details_get_company_details_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/get-company-details/get-company-details.component */ "./src/app/components/get-company-details/get-company-details.component.ts");
/* harmony import */ var _components_get_customer_details_get_customer_details_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/get-customer-details/get-customer-details.component */ "./src/app/components/get-customer-details/get-customer-details.component.ts");
/* harmony import */ var _components_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/purchase-coupon/purchase-coupon.component */ "./src/app/components/purchase-coupon/purchase-coupon.component.ts");
/* harmony import */ var _components_get_customer_coupons_get_customer_coupons_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/get-customer-coupons/get-customer-coupons.component */ "./src/app/components/get-customer-coupons/get-customer-coupons.component.ts");
/* harmony import */ var _components_get_customer_coupons_by_category_get_customer_coupons_by_category_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/get-customer-coupons-by-category/get-customer-coupons-by-category.component */ "./src/app/components/get-customer-coupons-by-category/get-customer-coupons-by-category.component.ts");
/* harmony import */ var _components_get_customer_coupon_by_max_price_get_customer_coupon_by_max_price_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/get-customer-coupon-by-max-price/get-customer-coupon-by-max-price.component */ "./src/app/components/get-customer-coupon-by-max-price/get-customer-coupon-by-max-price.component.ts");































const routes = [
    { path: "admin", component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"] },
    { path: "company", component: _components_company_company_component__WEBPACK_IMPORTED_MODULE_4__["CompanyComponent"] },
    { path: "customer", component: _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_5__["CustomerComponent"] },
    { path: "getAllCoupons", component: _components_get_all_coupons_get_all_coupons_component__WEBPACK_IMPORTED_MODULE_7__["GetAllCouponsComponent"] },
    { path: "login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: "addCompany", component: _components_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_9__["AddCompanyComponent"] },
    { path: "updateCompany/:id", component: _components_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_10__["UpdateCompanyComponent"] },
    { path: "deleteCompany/:id", component: _components_delete_company_delete_company_component__WEBPACK_IMPORTED_MODULE_11__["DeleteCompanyComponent"] },
    { path: "getAllCompanies", component: _components_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_12__["GetAllCompaniesComponent"] },
    { path: "getOneCompany/:id", component: _components_get_one_company_get_one_company_component__WEBPACK_IMPORTED_MODULE_13__["GetOneCompanyComponent"] },
    { path: "addCustomer", component: _components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_14__["AddCustomerComponent"] },
    { path: "updateCustomer/:id", component: _components_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_15__["UpdateCustomerComponent"] },
    { path: "deleteCustomer/:id", component: _components_delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_16__["DeleteCustomerComponent"] },
    { path: "getAllCustomers", component: _components_get_all_customers_get_all_customers_component__WEBPACK_IMPORTED_MODULE_17__["GetAllCustomersComponent"] },
    { path: "getOneCustomer/:id", component: _components_get_one_customer_get_one_customer_component__WEBPACK_IMPORTED_MODULE_18__["GetOneCustomerComponent"] },
    { path: "addCoupon", component: _components_add_coupon_add_coupon_component__WEBPACK_IMPORTED_MODULE_19__["AddCouponComponent"] },
    { path: "updateCoupon/:id", component: _components_update_coupon_update_coupon_component__WEBPACK_IMPORTED_MODULE_20__["UpdateCouponComponent"] },
    { path: "deleteCoupon/:id", component: _components_delete_coupon_delete_coupon_component__WEBPACK_IMPORTED_MODULE_21__["DeleteCouponComponent"] },
    { path: "getCompanyCoupon", component: _components_get_company_coupons_get_company_coupons_component__WEBPACK_IMPORTED_MODULE_22__["GetCompanyCouponsComponent"] },
    { path: "getCompanyCouponByCategory", component: _components_get_company_coupons_by_category_get_company_coupons_by_category_component__WEBPACK_IMPORTED_MODULE_23__["GetCompanyCouponsByCategoryComponent"] },
    { path: "getCompanyCouponByMaxPrice", component: _components_get_company_coupons_by_max_price_get_company_coupons_by_max_price_component__WEBPACK_IMPORTED_MODULE_24__["GetCompanyCouponsByMaxPriceComponent"] },
    { path: "getCompanyDetails", component: _components_get_company_details_get_company_details_component__WEBPACK_IMPORTED_MODULE_25__["GetCompanyDetailsComponent"] },
    { path: "purchaseCoupon/:id", component: _components_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_27__["PurchaseCouponComponent"] },
    { path: "getCustomerCoupons", component: _components_get_customer_coupons_get_customer_coupons_component__WEBPACK_IMPORTED_MODULE_28__["GetCustomerCouponsComponent"] },
    { path: "getCustomerCouponsByCategory", component: _components_get_customer_coupons_by_category_get_customer_coupons_by_category_component__WEBPACK_IMPORTED_MODULE_29__["GetCustomerCouponsByCategoryComponent"] },
    { path: "getCustomerCouponsByMaxPrice", component: _components_get_customer_coupon_by_max_price_get_customer_coupon_by_max_price_component__WEBPACK_IMPORTED_MODULE_30__["GetCustomerCouponByMaxPriceComponent"] },
    { path: "getCustomerDetails", component: _components_get_customer_details_get_customer_details_component__WEBPACK_IMPORTED_MODULE_26__["GetCustomerDetailsComponent"] },
    { path: '', redirectTo: "login", pathMatch: "full" },
    { path: "**", component: _components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_6__["PagenotfoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/app/components/layout/layout.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_company_company_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/company/company.component */ "./src/app/components/company/company.component.ts");
/* harmony import */ var _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/customer/customer.component */ "./src/app/components/customer/customer.component.ts");
/* harmony import */ var _components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/pagenotfound/pagenotfound.component */ "./src/app/components/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_get_all_coupons_get_all_coupons_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/get-all-coupons/get-all-coupons.component */ "./src/app/components/get-all-coupons/get-all-coupons.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _components_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/add-company/add-company.component */ "./src/app/components/add-company/add-company.component.ts");
/* harmony import */ var _components_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/update-company/update-company.component */ "./src/app/components/update-company/update-company.component.ts");
/* harmony import */ var _components_delete_company_delete_company_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/delete-company/delete-company.component */ "./src/app/components/delete-company/delete-company.component.ts");
/* harmony import */ var _components_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/get-all-companies/get-all-companies.component */ "./src/app/components/get-all-companies/get-all-companies.component.ts");
/* harmony import */ var _components_get_one_company_get_one_company_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/get-one-company/get-one-company.component */ "./src/app/components/get-one-company/get-one-company.component.ts");
/* harmony import */ var _components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/add-customer/add-customer.component */ "./src/app/components/add-customer/add-customer.component.ts");
/* harmony import */ var _components_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/update-customer/update-customer.component */ "./src/app/components/update-customer/update-customer.component.ts");
/* harmony import */ var _components_delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/delete-customer/delete-customer.component */ "./src/app/components/delete-customer/delete-customer.component.ts");
/* harmony import */ var _components_get_all_customers_get_all_customers_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/get-all-customers/get-all-customers.component */ "./src/app/components/get-all-customers/get-all-customers.component.ts");
/* harmony import */ var _components_get_one_customer_get_one_customer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/get-one-customer/get-one-customer.component */ "./src/app/components/get-one-customer/get-one-customer.component.ts");
/* harmony import */ var _components_add_coupon_add_coupon_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/add-coupon/add-coupon.component */ "./src/app/components/add-coupon/add-coupon.component.ts");
/* harmony import */ var _components_update_coupon_update_coupon_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/update-coupon/update-coupon.component */ "./src/app/components/update-coupon/update-coupon.component.ts");
/* harmony import */ var _components_delete_coupon_delete_coupon_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/delete-coupon/delete-coupon.component */ "./src/app/components/delete-coupon/delete-coupon.component.ts");
/* harmony import */ var _components_get_company_coupons_get_company_coupons_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/get-company-coupons/get-company-coupons.component */ "./src/app/components/get-company-coupons/get-company-coupons.component.ts");
/* harmony import */ var _components_get_company_coupons_by_category_get_company_coupons_by_category_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/get-company-coupons-by-category/get-company-coupons-by-category.component */ "./src/app/components/get-company-coupons-by-category/get-company-coupons-by-category.component.ts");
/* harmony import */ var _components_get_company_coupons_by_max_price_get_company_coupons_by_max_price_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/get-company-coupons-by-max-price/get-company-coupons-by-max-price.component */ "./src/app/components/get-company-coupons-by-max-price/get-company-coupons-by-max-price.component.ts");
/* harmony import */ var _components_get_company_details_get_company_details_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/get-company-details/get-company-details.component */ "./src/app/components/get-company-details/get-company-details.component.ts");
/* harmony import */ var _components_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/purchase-coupon/purchase-coupon.component */ "./src/app/components/purchase-coupon/purchase-coupon.component.ts");
/* harmony import */ var _components_get_customer_coupons_get_customer_coupons_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/get-customer-coupons/get-customer-coupons.component */ "./src/app/components/get-customer-coupons/get-customer-coupons.component.ts");
/* harmony import */ var _components_get_customer_coupons_by_category_get_customer_coupons_by_category_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/get-customer-coupons-by-category/get-customer-coupons-by-category.component */ "./src/app/components/get-customer-coupons-by-category/get-customer-coupons-by-category.component.ts");
/* harmony import */ var _components_get_customer_coupon_by_max_price_get_customer_coupon_by_max_price_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/get-customer-coupon-by-max-price/get-customer-coupon-by-max-price.component */ "./src/app/components/get-customer-coupon-by-max-price/get-customer-coupon-by-max-price.component.ts");
/* harmony import */ var _components_get_customer_details_get_customer_details_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/get-customer-details/get-customer-details.component */ "./src/app/components/get-customer-details/get-customer-details.component.ts");







































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
            _components_main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
            _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"],
            _components_company_company_component__WEBPACK_IMPORTED_MODULE_11__["CompanyComponent"],
            _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_12__["CustomerComponent"],
            _components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_13__["PagenotfoundComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
            _components_get_all_coupons_get_all_coupons_component__WEBPACK_IMPORTED_MODULE_15__["GetAllCouponsComponent"],
            _components_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_17__["AddCompanyComponent"],
            _components_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_18__["UpdateCompanyComponent"],
            _components_delete_company_delete_company_component__WEBPACK_IMPORTED_MODULE_19__["DeleteCompanyComponent"],
            _components_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_20__["GetAllCompaniesComponent"],
            _components_get_one_company_get_one_company_component__WEBPACK_IMPORTED_MODULE_21__["GetOneCompanyComponent"],
            _components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_22__["AddCustomerComponent"],
            _components_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_23__["UpdateCustomerComponent"],
            _components_delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_24__["DeleteCustomerComponent"],
            _components_get_all_customers_get_all_customers_component__WEBPACK_IMPORTED_MODULE_25__["GetAllCustomersComponent"],
            _components_get_one_customer_get_one_customer_component__WEBPACK_IMPORTED_MODULE_26__["GetOneCustomerComponent"],
            _components_add_coupon_add_coupon_component__WEBPACK_IMPORTED_MODULE_27__["AddCouponComponent"],
            _components_update_coupon_update_coupon_component__WEBPACK_IMPORTED_MODULE_28__["UpdateCouponComponent"],
            _components_delete_coupon_delete_coupon_component__WEBPACK_IMPORTED_MODULE_29__["DeleteCouponComponent"],
            _components_get_company_coupons_get_company_coupons_component__WEBPACK_IMPORTED_MODULE_30__["GetCompanyCouponsComponent"],
            _components_get_company_coupons_by_category_get_company_coupons_by_category_component__WEBPACK_IMPORTED_MODULE_31__["GetCompanyCouponsByCategoryComponent"],
            _components_get_company_coupons_by_max_price_get_company_coupons_by_max_price_component__WEBPACK_IMPORTED_MODULE_32__["GetCompanyCouponsByMaxPriceComponent"],
            _components_get_company_details_get_company_details_component__WEBPACK_IMPORTED_MODULE_33__["GetCompanyDetailsComponent"],
            _components_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_34__["PurchaseCouponComponent"],
            _components_get_customer_coupons_get_customer_coupons_component__WEBPACK_IMPORTED_MODULE_35__["GetCustomerCouponsComponent"],
            _components_get_customer_coupons_by_category_get_customer_coupons_by_category_component__WEBPACK_IMPORTED_MODULE_36__["GetCustomerCouponsByCategoryComponent"],
            _components_get_customer_coupon_by_max_price_get_customer_coupon_by_max_price_component__WEBPACK_IMPORTED_MODULE_37__["GetCustomerCouponByMaxPriceComponent"],
            _components_get_customer_details_get_customer_details_component__WEBPACK_IMPORTED_MODULE_38__["GetCustomerDetailsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/add-company/add-company.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/add-company/add-company.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button{\r\n    background-color: green;\r\n    color:white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtY29tcGFueS9hZGQtY29tcGFueS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWNvbXBhbnkvYWRkLWNvbXBhbnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/add-company/add-company.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/add-company/add-company.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCompanyComponent", function() { return AddCompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var src_app_models_company__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/company */ "./src/app/models/company.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let AddCompanyComponent = class AddCompanyComponent {
    constructor(myService, myLogin, router) {
        this.myService = myService;
        this.myLogin = myLogin;
        this.router = router;
        this.test = localStorage.typeL;
    }
    ngOnInit() {
    }
    addCompany() {
        let c;
        c = new src_app_models_company__WEBPACK_IMPORTED_MODULE_3__["Company"](0, this.name, this.email, this.password);
        this.myService.addCompany(localStorage.token, c).subscribe(c => {
            this.name = null;
            this.email = null;
            this.password = null;
            alert("The company has been added");
        }, err => {
            console.log(err);
            if (err.status === 401) {
                this.myLogin.Logout(localStorage.token).subscribe(res => {
                    alert("You have been logged out");
                    localStorage.token = null;
                    localStorage.typeL = "test";
                    location.href = "http://localhost:8080";
                });
            }
            else if (this.email == null || this.name == null) {
                alert("values are not good");
            }
            else if (err.status === 406)
                alert(err.error);
        });
    }
};
AddCompanyComponent.ctorParameters = () => [
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AddCompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-company',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-company.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-company/add-company.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-company.component.css */ "./src/app/components/add-company/add-company.component.css")).default]
    })
], AddCompanyComponent);



/***/ }),

/***/ "./src/app/components/add-coupon/add-coupon.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/add-coupon/add-coupon.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button{\r\n    background-color: green;\r\n    color:white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtY291cG9uL2FkZC1jb3Vwb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkZC1jb3Vwb24vYWRkLWNvdXBvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/add-coupon/add-coupon.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/add-coupon/add-coupon.component.ts ***!
  \***************************************************************/
/*! exports provided: AddCouponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCouponComponent", function() { return AddCouponComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_companies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/companies.service */ "./src/app/services/companies.service.ts");
/* harmony import */ var src_app_models_coupon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/coupon */ "./src/app/models/coupon.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");





let AddCouponComponent = class AddCouponComponent {
    constructor(myService, myLogin) {
        this.myService = myService;
        this.myLogin = myLogin;
        this.test = localStorage.typeL;
    }
    ngOnInit() {
    }
    addCoupon() {
        let c;
        c = new src_app_models_coupon__WEBPACK_IMPORTED_MODULE_3__["Coupon"](0, this.category, this.title, this.description, this.startDate, this.endDate, this.amount, this.price, this.image);
        this.myService.addCoupon(localStorage.token, c).subscribe(c => {
            alert("Coupon added");
            this.category = null;
            this.title = null;
            this.description = null;
            this.startDate = null;
            this.endDate = null;
            this.amount = null;
            this.price = null;
            this.image = null;
        }, err => {
            if (err.status === 401) {
                this.myLogin.Logout(localStorage.token).subscribe(res => {
                    localStorage.token = null;
                    localStorage.typeL = "test";
                    location.href = "http://localhost:8080";
                });
            }
            else if (err.status != 200) {
                alert("U need to fill everthing or " + err.error);
            }
            else //error 200
             {
                this.category = null;
                this.title = null;
                this.description = null;
                this.startDate = null;
                this.endDate = null;
                this.amount = null;
                this.price = null;
                this.image = null;
            }
            //debug
            // console.log(err)
        });
    }
};
AddCouponComponent.ctorParameters = () => [
    { type: src_app_services_companies_service__WEBPACK_IMPORTED_MODULE_2__["CompaniesService"] },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }
];
AddCouponComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-coupon',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-coupon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-coupon/add-coupon.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-coupon.component.css */ "./src/app/components/add-coupon/add-coupon.component.css")).default]
    })
], AddCouponComponent);



/***/ }),

/***/ "./src/app/components/add-customer/add-customer.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/add-customer/add-customer.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button{\r\n    background-color: green;\r\n    color:white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtY3VzdG9tZXIvYWRkLWN1c3RvbWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZGQtY3VzdG9tZXIvYWRkLWN1c3RvbWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/add-customer/add-customer.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/add-customer/add-customer.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCustomerComponent", function() { return AddCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var src_app_models_customer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/customer */ "./src/app/models/customer.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");





let AddCustomerComponent = class AddCustomerComponent {
    constructor(myService, myLogin) {
        this.myService = myService;
        this.myLogin = myLogin;
        this.test = localStorage.typeL;
    }
    ngOnInit() {
    }
    addCustomer() {
        let c;
        c = new src_app_models_customer__WEBPACK_IMPORTED_MODULE_3__["Customer"](0, this.firstName, this.lastName, this.email, this.password);
        this.myService.addCustomer(localStorage.token, c).subscribe(c => {
            alert("Customer added");
            this.firstName = null;
            this.lastName = null;
            this.email = null;
            this.password = null;
        }, err => {
            if (err.status === 401) {
                this.myLogin.Logout(localStorage.token).subscribe(c => {
                    localStorage.token = null;
                    localStorage.typeL = "test";
                    location.href = "http://localhost:8080";
                });
            }
            else if (this.firstName == null || this.lastName == null || this.email == null)
                alert("values not good");
            else if (err.status === 406)
                alert(err.error);
            console.log(err);
        });
    }
};
AddCustomerComponent.ctorParameters = () => [
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }
];
AddCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-customer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-customer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-customer/add-customer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-customer.component.css */ "./src/app/components/add-customer/add-customer.component.css")).default]
    })
], AddCustomerComponent);



/***/ }),

/***/ "./src/app/components/admin/admin.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/admin/admin.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminComponent = class AdminComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.css */ "./src/app/components/admin/admin.component.css")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/components/company/company.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/company/company.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueS9jb21wYW55LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/company/company.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/company/company.component.ts ***!
  \*********************************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CompanyComponent = class CompanyComponent {
    constructor() { }
    ngOnInit() {
    }
};
CompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/company/company.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company.component.css */ "./src/app/components/company/company.component.css")).default]
    })
], CompanyComponent);



/***/ }),

/***/ "./src/app/components/customer/customer.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/customer/customer.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tZXIvY3VzdG9tZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/customer/customer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/customer/customer.component.ts ***!
  \***********************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CustomerComponent = class CustomerComponent {
    constructor() { }
    ngOnInit() {
    }
};
CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer/customer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer.component.css */ "./src/app/components/customer/customer.component.css")).default]
    })
], CustomerComponent);



/***/ }),

/***/ "./src/app/components/delete-company/delete-company.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/delete-company/delete-company.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button{\r\n    background-color: black;\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZWxldGUtY29tcGFueS9kZWxldGUtY29tcGFueS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RlbGV0ZS1jb21wYW55L2RlbGV0ZS1jb21wYW55LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/delete-company/delete-company.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/delete-company/delete-company.component.ts ***!
  \***********************************************************************/
/*! exports provided: DeleteCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCompanyComponent", function() { return DeleteCompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let DeleteCompanyComponent = class DeleteCompanyComponent {
    constructor(router, myService, myLogin, activatedRout) {
        this.router = router;
        this.myService = myService;
        this.myLogin = myLogin;
        this.activatedRout = activatedRout;
        this.test = localStorage.typeL;
    }
    ngOnInit() {
        this.id = +this.activatedRout.snapshot.params.id;
    }
    deleteCompany() {
        this.myService.deleteCompany(localStorage.token, this.id).subscribe(() => {
            this.id = null, alert("Deleted");
            this.router.navigate(['/getAllCompanies']); //go back to the main table
        }, err => {
            if (err.status === 401) {
                this.myLogin.Logout(localStorage.token).subscribe(res => {
                    localStorage.token = null;
                    localStorage.typeL = "test";
                    location.href = "http://localhost:8080";
                });
            }
            else
                alert(err.error);
            console.log(err);
        });
    }
};
DeleteCompanyComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
DeleteCompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delete-company',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./delete-company.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/delete-company/delete-company.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./delete-company.component.css */ "./src/app/components/delete-company/delete-company.component.css")).default]
    })
], DeleteCompanyComponent);



/***/ }),

/***/ "./src/app/components/delete-coupon/delete-coupon.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/delete-coupon/delete-coupon.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button{\r\n    background-color: black;\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZWxldGUtY291cG9uL2RlbGV0ZS1jb3Vwb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kZWxldGUtY291cG9uL2RlbGV0ZS1jb3Vwb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/delete-coupon/delete-coupon.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/delete-coupon/delete-coupon.component.ts ***!
  \*********************************************************************/
/*! exports provided: DeleteCouponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCouponComponent", function() { return DeleteCouponComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_companies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/companies.service */ "./src/app/services/companies.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let DeleteCouponComponent = class DeleteCouponComponent {
    constructor(router, myService, myLogin, activatedRout) {
        this.router = router;
        this.myService = myService;
        this.myLogin = myLogin;
        this.activatedRout = activatedRout;
        this.test = localStorage.typeL;
    }
    ngOnInit() {
        this.couponId = this.activatedRout.snapshot.params.id;
    }
    deleteCoupon() {
        this.myService.deleteCoupon(localStorage.token, this.couponId).subscribe(ref => {
            alert("Deleted");
            this.couponId = null;
            this.router.navigate(['/getCompanyCoupon']);
        }, err => {
            if (err.status === 401) {
                this.myLogin.Logout(localStorage.token).subscribe(res => {
                    localStorage.token = null;
                    localStorage.typeL = "test";
                    location.href = "http://localhost:8080";
                });
            }
            else
                alert(err.error);
            // console.log(err )
        });
    }
};
DeleteCouponComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_companies_service__WEBPACK_IMPORTED_MODULE_2__["CompaniesService"] },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
DeleteCouponComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delete-coupon',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./delete-coupon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/delete-coupon/delete-coupon.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./delete-coupon.component.css */ "./src/app/components/delete-coupon/delete-coupon.component.css")).default]
    })
], DeleteCouponComponent);



/***/ }),

/***/ "./src/app/components/delete-customer/delete-customer.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/delete-customer/delete-customer.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button{\r\n    background-color: black;\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZWxldGUtY3VzdG9tZXIvZGVsZXRlLWN1c3RvbWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGVsZXRlLWN1c3RvbWVyL2RlbGV0ZS1jdXN0b21lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/delete-customer/delete-customer.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/delete-customer/delete-customer.component.ts ***!
  \*************************************************************************/
/*! exports provided: DeleteCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCustomerComponent", function() { return DeleteCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let DeleteCustomerComponent = class DeleteCustomerComponent {
    constructor(router, myService, myLogin, activatedRout) {
        this.router = router;
        this.myService = myService;
        this.myLogin = myLogin;
        this.activatedRout = activatedRout;
        this.test = localStorage.typeL;
    }
    ngOnInit() {
        this.id = +this.activatedRout.snapshot.params.id;
    }
    deleteCustomer() {
        this.myService.deleteCustomer(localStorage.token, this.id).subscribe(c => {
            this.id = null;
            alert("Deleted");
            this.router.navigate(['/getAllCustomers']);
        }, err => {
            if (err.status === 401) {
                this.myLogin.Logout(localStorage.token).subscribe(res => {
                    localStorage.token = null;
                    localStorage.typeL = "test";
                    location.href = "http://localhost:8080";
                });
            }
            else
                alert(err.error);
        });
    }
};
DeleteCustomerComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
DeleteCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delete-customer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./delete-customer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/delete-customer/delete-customer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./delete-customer.component.css */ "./src/app/components/delete-customer/delete-customer.component.css")).default]
    })
], DeleteCustomerComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/get-all-companies/get-all-companies.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/get-all-companies/get-all-companies.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".prodDiv>h3{\r\n    text-align: center;\r\n    color:blue;\r\n}\r\n\r\n#companyTable {\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n  }\r\n\r\n#companyTable td, #companyTable th {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n  }\r\n\r\n#companyTable tr:nth-child(even){background-color: #f2f2f2;}\r\n\r\n#companyTable tr:hover {background-color: #ddd;}\r\n\r\n#companyTable th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color: #4CAF50;\r\n    color: white;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXQtYWxsLWNvbXBhbmllcy9nZXQtYWxsLWNvbXBhbmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlEQUF5RDtJQUN6RCx5QkFBeUI7SUFDekIsV0FBVztFQUNiOztBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDs7QUFFQSxpQ0FBaUMseUJBQXlCLENBQUM7O0FBRTNELHdCQUF3QixzQkFBc0IsQ0FBQzs7QUFFL0M7SUFDRSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nZXQtYWxsLWNvbXBhbmllcy9nZXQtYWxsLWNvbXBhbmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2REaXY+aDN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjpibHVlO1xyXG59XHJcblxyXG4jY29tcGFueVRhYmxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAjY29tcGFueVRhYmxlIHRkLCAjY29tcGFueVRhYmxlIHRoIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gICNjb21wYW55VGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxyXG4gIFxyXG4gICNjb21wYW55VGFibGUgdHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxyXG4gIFxyXG4gICNjb21wYW55VGFibGUgdGgge1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/components/get-all-companies/get-all-companies.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/get-all-companies/get-all-companies.component.ts ***!
  \*****************************************************************************/
/*! exports provided: GetAllCompaniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllCompaniesComponent", function() { return GetAllCompaniesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");




let GetAllCompaniesComponent = class GetAllCompaniesComponent {
    constructor(myService, myLogin) {
        this.myService = myService;
        this.myLogin = myLogin;
    }
    ngOnInit() {
        this.myService.getAllCompanies(localStorage.token).subscribe((c) => {
            this.companies = c;
        }, (error) => {
            this.myLogin.Logout(localStorage.token).subscribe(response => {
                localStorage.token = null;
                localStorage.typeL = "test";
                location.href = "http://localhost:8080";
            });
            alert("Time out. You have benn loggod off");
        });
    }
};
GetAllCompaniesComponent.ctorParameters = () => [
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
];
GetAllCompaniesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-all-companies',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-all-companies.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-companies/get-all-companies.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-all-companies.component.css */ "./src/app/components/get-all-companies/get-all-companies.component.css")).default]
    })
], GetAllCompaniesComponent);



/***/ }),

/***/ "./src/app/components/get-all-coupons/get-all-coupons.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/get-all-coupons/get-all-coupons.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".prodDiv>h3{\r\n    text-align: center;\r\n    color:blue;\r\n}\r\n.prodDiv>span{\r\n    margin-left: 40px;\r\n    font-size: 15px;\r\n}\r\n#couponTable {\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n  }\r\n#couponTable td, #couponTable th {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n  }\r\n#couponTable tr:nth-child(even){background-color: #f2f2f2;}\r\n#couponTable tr:hover {background-color: #ddd;}\r\n#couponTable th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color: #4CAF50;\r\n    color: white;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXQtYWxsLWNvdXBvbnMvZ2V0LWFsbC1jb3Vwb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUdBO0lBQ0kseURBQXlEO0lBQ3pELHlCQUF5QjtJQUN6QixXQUFXO0VBQ2I7QUFFQTtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0VBQ2Q7QUFFQSxnQ0FBZ0MseUJBQXlCLENBQUM7QUFFMUQsdUJBQXVCLHNCQUFzQixDQUFDO0FBRTlDO0lBQ0UsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2V0LWFsbC1jb3Vwb25zL2dldC1hbGwtY291cG9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2REaXY+aDN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjpibHVlO1xyXG59XHJcbi5wcm9kRGl2PnNwYW57XHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuXHJcbiNjb3Vwb25UYWJsZSB7XHJcbiAgICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgI2NvdXBvblRhYmxlIHRkLCAjY291cG9uVGFibGUgdGgge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgI2NvdXBvblRhYmxlIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cclxuICBcclxuICAjY291cG9uVGFibGUgdHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxyXG4gIFxyXG4gICNjb3Vwb25UYWJsZSB0aCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/components/get-all-coupons/get-all-coupons.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/get-all-coupons/get-all-coupons.component.ts ***!
  \*************************************************************************/
/*! exports provided: GetAllCouponsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllCouponsComponent", function() { return GetAllCouponsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/customers.service */ "./src/app/services/customers.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");




let GetAllCouponsComponent = class GetAllCouponsComponent {
    constructor(myService, myLogin) {
        this.myService = myService;
        this.myLogin = myLogin;
    }
    ngOnInit() {
        this.myService.getAllCoupons(localStorage.token).subscribe((c) => {
            this.coupons = c;
        }, (error) => {
            if (error.status === 401) {
                this.myLogin.Logout(localStorage.token).subscribe(res => {
                    localStorage.token = null;
                    localStorage.typeL = "test";
                    location.href = "http://localhost:8080";
                });
            }
            else
                alert("Time out. You have benn loggod off");
        });
    }
};
GetAllCouponsComponent.ctorParameters = () => [
    { type: src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_2__["CustomersService"] },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
];
GetAllCouponsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-all-coupons',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-all-coupons.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-coupons/get-all-coupons.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-all-coupons.component.css */ "./src/app/components/get-all-coupons/get-all-coupons.component.css")).default]
    })
], GetAllCouponsComponent);



/***/ }),

/***/ "./src/app/components/get-all-customers/get-all-customers.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/get-all-customers/get-all-customers.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#customerTable {\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n  }\r\n  \r\n  #customerTable td, #customerTable th {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n  }\r\n  \r\n  #customerTable tr:nth-child(even){background-color: #f2f2f2;}\r\n  \r\n  #customerTable tr:hover {background-color: #ddd;}\r\n  \r\n  #customerTable th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color: #4CAF50;\r\n    color: white;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXQtYWxsLWN1c3RvbWVycy9nZXQtYWxsLWN1c3RvbWVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseURBQXlEO0lBQ3pELHlCQUF5QjtJQUN6QixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsWUFBWTtFQUNkOztFQUVBLGtDQUFrQyx5QkFBeUIsQ0FBQzs7RUFFNUQseUJBQXlCLHNCQUFzQixDQUFDOztFQUVoRDtJQUNFLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dldC1hbGwtY3VzdG9tZXJzL2dldC1hbGwtY3VzdG9tZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY3VzdG9tZXJUYWJsZSB7XHJcbiAgICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgI2N1c3RvbWVyVGFibGUgdGQsICNjdXN0b21lclRhYmxlIHRoIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gICNjdXN0b21lclRhYmxlIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cclxuICBcclxuICAjY3VzdG9tZXJUYWJsZSB0cjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2RkZDt9XHJcbiAgXHJcbiAgI2N1c3RvbWVyVGFibGUgdGgge1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/components/get-all-customers/get-all-customers.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/get-all-customers/get-all-customers.component.ts ***!
  \*****************************************************************************/
/*! exports provided: GetAllCustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllCustomersComponent", function() { return GetAllCustomersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");




let GetAllCustomersComponent = class GetAllCustomersComponent {
    constructor(myService, myLogin) {
        this.myService = myService;
        this.myLogin = myLogin;
        this.token = localStorage.token;
    }
    ngOnInit() {
        this.myService.getAllCustomers(localStorage.token).subscribe((c) => {
            this.customers = c;
        }, (error) => {
            if (error.status === 401) {
                this.myLogin.Logout(localStorage.token).subscribe(res => {
                    localStorage.token = null;
                    localStorage.typeL = "test";
                    location.href = "http://localhost:8080";
                });
            }
            else
                alert("Time out. You have benn loggod off");
        });
    }
};
GetAllCustomersComponent.ctorParameters = () => [
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
];
GetAllCustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-all-customers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-all-customers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-customers/get-all-customers.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-all-customers.component.css */ "./src/app/components/get-all-customers/get-all-customers.component.css")).default]
    })
], GetAllCustomersComponent);



/***/ }),

/***/ "./src/app/components/get-company-coupons-by-category/get-company-coupons-by-category.component.css":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/get-company-coupons-by-category/get-company-coupons-by-category.component.css ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".prodDiv>h3{\r\n    text-align: center;\r\n    color:blue;\r\n}\r\n\r\n#couponTable {\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n  }\r\n\r\n#couponTable td, #couponTable th {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n  }\r\n\r\n#couponTable tr:nth-child(even){background-color: #f2f2f2;}\r\n\r\n#couponTable tr:hover {background-color: #ddd;}\r\n\r\n#couponTable th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color: #4CAF50;\r\n    color: white;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXQtY29tcGFueS1jb3Vwb25zLWJ5LWNhdGVnb3J5L2dldC1jb21wYW55LWNvdXBvbnMtYnktY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5REFBeUQ7SUFDekQseUJBQXlCO0lBQ3pCLFdBQVc7RUFDYjs7QUFFQTtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0VBQ2Q7O0FBRUEsZ0NBQWdDLHlCQUF5QixDQUFDOztBQUUxRCx1QkFBdUIsc0JBQXNCLENBQUM7O0FBRTlDO0lBQ0UsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2V0LWNvbXBhbnktY291cG9ucy1ieS1jYXRlZ29yeS9nZXQtY29tcGFueS1jb3Vwb25zLWJ5LWNhdGVnb3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZERpdj5oM3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOmJsdWU7XHJcbn1cclxuXHJcbiNjb3Vwb25UYWJsZSB7XHJcbiAgICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgI2NvdXBvblRhYmxlIHRkLCAjY291cG9uVGFibGUgdGgge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgI2NvdXBvblRhYmxlIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cclxuICBcclxuICAjY291cG9uVGFibGUgdHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxyXG4gIFxyXG4gICNjb3Vwb25UYWJsZSB0aCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/components/get-company-coupons-by-category/get-company-coupons-by-category.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/get-company-coupons-by-category/get-company-coupons-by-category.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: GetCompanyCouponsByCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCompanyCouponsByCategoryComponent", function() { return GetCompanyCouponsByCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_companies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/companies.service */ "./src/app/services/companies.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");




let GetCompanyCouponsByCategoryComponent = class GetCompanyCouponsByCategoryComponent {
    constructor(myService, myLogin) {
        this.myService = myService;
        this.myLogin = myLogin;
        this.test = localStorage.typeL;
    }
    ngOnInit() {
    }
    getCouponByCategory() {
        this.myService.getCouponByCategory(localStorage.token, this.category).subscribe((c) => {
            this.coupons = c;
        }, (error) => {
            if (error.status === 401) {
                this.myLogin.Logout(localStorage.token).subscribe(res => {
                    localStorage.token = null;
                    localStorage.typeL = "test";
                    location.href = "http://localhost:8080";
                });
                alert("Time out. You have benn loggod off");
            }
            else
                alert("Search is empty. pick a category");
        });
    }
};
GetCompanyCouponsByCategoryComponent.ctorParameters = () => [
    { type: src_app_services_companies_service__WEBPACK_IMPORTED_MODULE_2__["CompaniesService"] },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
];
GetCompanyCouponsByCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-company-coupons-by-category',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-company-coupons-by-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-company-coupons-by-category/get-company-coupons-by-category.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-company-coupons-by-category.component.css */ "./src/app/components/get-company-coupons-by-category/get-company-coupons-by-category.component.css")).default]
    })
], GetCompanyCouponsByCategoryComponent);



/***/ }),

/***/ "./src/app/components/get-company-coupons-by-max-price/get-company-coupons-by-max-price.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/get-company-coupons-by-max-price/get-company-coupons-by-max-price.component.css ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".prodDiv>h3{\r\n    text-align: center;\r\n    color:blue;\r\n}\r\n\r\n#couponTable {\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n  }\r\n\r\n#couponTable td, #couponTable th {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n  }\r\n\r\n#couponTable tr:nth-child(even){background-color: #f2f2f2;}\r\n\r\n#couponTable tr:hover {background-color: #ddd;}\r\n\r\n#couponTable th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color: #4CAF50;\r\n    color: white;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXQtY29tcGFueS1jb3Vwb25zLWJ5LW1heC1wcmljZS9nZXQtY29tcGFueS1jb3Vwb25zLWJ5LW1heC1wcmljZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlEQUF5RDtJQUN6RCx5QkFBeUI7SUFDekIsV0FBVztFQUNiOztBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDs7QUFFQSxnQ0FBZ0MseUJBQXlCLENBQUM7O0FBRTFELHVCQUF1QixzQkFBc0IsQ0FBQzs7QUFFOUM7SUFDRSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nZXQtY29tcGFueS1jb3Vwb25zLWJ5LW1heC1wcmljZS9nZXQtY29tcGFueS1jb3Vwb25zLWJ5LW1heC1wcmljZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2REaXY+aDN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjpibHVlO1xyXG59XHJcblxyXG4jY291cG9uVGFibGUge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gICNjb3Vwb25UYWJsZSB0ZCwgI2NvdXBvblRhYmxlIHRoIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gICNjb3Vwb25UYWJsZSB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XHJcbiAgXHJcbiAgI2NvdXBvblRhYmxlIHRyOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO31cclxuICBcclxuICAjY291cG9uVGFibGUgdGgge1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/components/get-company-coupons-by-max-price/get-company-coupons-by-max-price.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/get-company-coupons-by-max-price/get-company-coupons-by-max-price.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: GetCompanyCouponsByMaxPriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCompanyCouponsByMaxPriceComponent", function() { return GetCompanyCouponsByMaxPriceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_companies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/companies.service */ "./src/app/services/companies.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");




let GetCompanyCouponsByMaxPriceComponent = class GetCompanyCouponsByMaxPriceComponent {
    constructor(myService, myLogin) {
        this.myService = myService;
        this.myLogin = myLogin;
        this.test = localStorage.typeL;
    }
    ngOnInit() {
    }
    getCouponByMaxPrice() {
        this.myService.getCouponByMaxPrice(localStorage.token, this.price).subscribe((c) => {
            this.coupons = c;
            console.log("c:" + c.length);
        }, (error) => {
            if (error.status === 401) {
                this.myLogin.Logout(localStorage.token).subscribe(res => {
                    localStorage.token = null;
                    localStorage.typeL = "test";
                    location.href = "http://localhost:8080";
                });
                alert("Time out. You have benn loggod off");
            }
            else
                alert("Search is empty . pick a price");
        });
    }
};
GetCompanyCouponsByMaxPriceComponent.ctorParameters = () => [
    { type: src_app_services_companies_service__WEBPACK_IMPORTED_MODULE_2__["CompaniesService"] },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
];
GetCompanyCouponsByMaxPriceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-company-coupons-by-max-price',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-company-coupons-by-max-price.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-company-coupons-by-max-price/get-company-coupons-by-max-price.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-company-coupons-by-max-price.component.css */ "./src/app/components/get-company-coupons-by-max-price/get-company-coupons-by-max-price.component.css")).default]
    })
], GetCompanyCouponsByMaxPriceComponent);



/***/ }),

/***/ "./src/app/components/get-company-coupons/get-company-coupons.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/get-company-coupons/get-company-coupons.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".prodDiv>h3{\r\n    text-align: center;\r\n    color:blue;\r\n}\r\n\r\n#couponTable {\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n  }\r\n\r\n#couponTable td, #couponTable th {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n  }\r\n\r\n#couponTable tr:nth-child(even){background-color: #f2f2f2;}\r\n\r\n#couponTable tr:hover {background-color: #ddd;}\r\n\r\n#couponTable th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color: #4CAF50;\r\n    color: white;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXQtY29tcGFueS1jb3Vwb25zL2dldC1jb21wYW55LWNvdXBvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5REFBeUQ7SUFDekQseUJBQXlCO0lBQ3pCLFdBQVc7RUFDYjs7QUFFQTtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0VBQ2Q7O0FBRUEsZ0NBQWdDLHlCQUF5QixDQUFDOztBQUUxRCx1QkFBdUIsc0JBQXNCLENBQUM7O0FBRTlDO0lBQ0UsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2V0LWNvbXBhbnktY291cG9ucy9nZXQtY29tcGFueS1jb3Vwb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZERpdj5oM3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOmJsdWU7XHJcbn1cclxuXHJcbiNjb3Vwb25UYWJsZSB7XHJcbiAgICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgI2NvdXBvblRhYmxlIHRkLCAjY291cG9uVGFibGUgdGgge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgI2NvdXBvblRhYmxlIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cclxuICBcclxuICAjY291cG9uVGFibGUgdHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxyXG4gIFxyXG4gICNjb3Vwb25UYWJsZSB0aCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/components/get-company-coupons/get-company-coupons.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/get-company-coupons/get-company-coupons.component.ts ***!
  \*********************************************************************************/
/*! exports provided: GetCompanyCouponsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCompanyCouponsComponent", function() { return GetCompanyCouponsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_companies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/companies.service */ "./src/app/services/companies.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");




let GetCompanyCouponsComponent = class GetCompanyCouponsComponent {
    constructor(myService, myLogin) {
        this.myService = myService;
        this.myLogin = myLogin;
        this.test = localStorage.typeL;
    }
    ngOnInit() {
        this.myService.getCompanyCoupons(localStorage.token).subscribe((c) => {
            this.coupons = c;
        }, (error) => {
            if (error.status === 401) {
                this.myLogin.Logout(localStorage.token).subscribe(res => {
                    localStorage.token = null;
                    localStorage.typeL = "test";
                    location.href = "http://localhost:8080";
                });
            }
            else
                alert("Time out. You have benn loggod off");
        });
    }
};
GetCompanyCouponsComponent.ctorParameters = () => [
    { type: src_app_services_companies_service__WEBPACK_IMPORTED_MODULE_2__["CompaniesService"] },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
];
GetCompanyCouponsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-company-coupons',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-company-coupons.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-company-coupons/get-company-coupons.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-company-coupons.component.css */ "./src/app/components/get-company-coupons/get-company-coupons.component.css")).default]
    })
], GetCompanyCouponsComponent);



/***/ }),

/***/ "./src/app/components/get-company-details/get-company-details.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/get-company-details/get-company-details.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n#companyTable {\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n  }\r\n  \r\n  #companyTable td, #companyTable th {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n  }\r\n  \r\n  #companyTable tr:nth-child(even){background-color: #f2f2f2;}\r\n  \r\n  #companyTable tr:hover {background-color: #ddd;}\r\n  \r\n  #companyTable th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color: #4CAF50;\r\n    color: white;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXQtY29tcGFueS1kZXRhaWxzL2dldC1jb21wYW55LWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSx5REFBeUQ7SUFDekQseUJBQXlCO0lBQ3pCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0VBQ2Q7O0VBRUEsaUNBQWlDLHlCQUF5QixDQUFDOztFQUUzRCx3QkFBd0Isc0JBQXNCLENBQUM7O0VBRS9DO0lBQ0UsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2V0LWNvbXBhbnktZGV0YWlscy9nZXQtY29tcGFueS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI2NvbXBhbnlUYWJsZSB7XHJcbiAgICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgI2NvbXBhbnlUYWJsZSB0ZCwgI2NvbXBhbnlUYWJsZSB0aCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gIH1cclxuICBcclxuICAjY29tcGFueVRhYmxlIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cclxuICBcclxuICAjY29tcGFueVRhYmxlIHRyOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO31cclxuICBcclxuICAjY29tcGFueVRhYmxlIHRoIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/components/get-company-details/get-company-details.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/get-company-details/get-company-details.component.ts ***!
  \*********************************************************************************/
/*! exports provided: GetCompanyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCompanyDetailsComponent", function() { return GetCompanyDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_companies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/companies.service */ "./src/app/services/companies.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");




let GetCompanyDetailsComponent = class GetCompanyDetailsComponent {
    constructor(myService, myLogin) {
        this.myService = myService;
        this.myLogin = myLogin;
        this.test = localStorage.typeL;
    }
    ngOnInit() {
        this.myService.getCompanyDetails(localStorage.token).subscribe((c) => {
            this.company = c;
        }, (error) => {
            if (error.status === 401) {
                this.myLogin.Logout(localStorage.token).subscribe(res => {
                    localStorage.token = null;
                    localStorage.typeL = "test";
                    location.href = "http://localhost:8080";
                });
            }
            else
                alert("Time out. You have benn loggod off");
        });
    }
};
GetCompanyDetailsComponent.ctorParameters = () => [
    { type: src_app_services_companies_service__WEBPACK_IMPORTED_MODULE_2__["CompaniesService"] },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
];
GetCompanyDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-company-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-company-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-company-details/get-company-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-company-details.component.css */ "./src/app/components/get-company-details/get-company-details.component.css")).default]
    })
], GetCompanyDetailsComponent);



/***/ }),

/***/ "./src/app/components/get-customer-coupon-by-max-price/get-customer-coupon-by-max-price.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/get-customer-coupon-by-max-price/get-customer-coupon-by-max-price.component.css ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".prodDiv>h3{\r\n    text-align: center;\r\n    color:blue;\r\n}\r\n\r\n#couponTable {\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n  }\r\n\r\n#couponTable td, #couponTable th {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n  }\r\n\r\n#couponTable tr:nth-child(even){background-color: #f2f2f2;}\r\n\r\n#couponTable tr:hover {background-color: #ddd;}\r\n\r\n#couponTable th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color: #4CAF50;\r\n    color: white;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXQtY3VzdG9tZXItY291cG9uLWJ5LW1heC1wcmljZS9nZXQtY3VzdG9tZXItY291cG9uLWJ5LW1heC1wcmljZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlEQUF5RDtJQUN6RCx5QkFBeUI7SUFDekIsV0FBVztFQUNiOztBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDs7QUFFQSxnQ0FBZ0MseUJBQXlCLENBQUM7O0FBRTFELHVCQUF1QixzQkFBc0IsQ0FBQzs7QUFFOUM7SUFDRSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nZXQtY3VzdG9tZXItY291cG9uLWJ5LW1heC1wcmljZS9nZXQtY3VzdG9tZXItY291cG9uLWJ5LW1heC1wcmljZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2REaXY+aDN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjpibHVlO1xyXG59XHJcblxyXG4jY291cG9uVGFibGUge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gICNjb3Vwb25UYWJsZSB0ZCwgI2NvdXBvblRhYmxlIHRoIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gICNjb3Vwb25UYWJsZSB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XHJcbiAgXHJcbiAgI2NvdXBvblRhYmxlIHRyOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO31cclxuICBcclxuICAjY291cG9uVGFibGUgdGgge1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/components/get-customer-coupon-by-max-price/get-customer-coupon-by-max-price.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/get-customer-coupon-by-max-price/get-customer-coupon-by-max-price.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: GetCustomerCouponByMaxPriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCustomerCouponByMaxPriceComponent", function() { return GetCustomerCouponByMaxPriceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/customers.service */ "./src/app/services/customers.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");




let GetCustomerCouponByMaxPriceComponent = class GetCustomerCouponByMaxPriceComponent {
    constructor(myService, myLogin) {
        this.myService = myService;
        this.myLogin = myLogin;
        this.test = localStorage.typeL;
    }
    ngOnInit() {
    }
    getCouponByMaxPrice() {
        this.myService.getCustomerCouponsMaxPrice(localStorage.token, this.price).subscribe((c) => {
            this.coupons = c;
            console.log("c:" + c.length);
        }, (error) => {
            if (error.status === 401) {
                this.myLogin.Logout(localStorage.token).subscribe(res => {
                    localStorage.token = null;
                    localStorage.typeL = "test";
                    location.href = "http://localhost:8080";
                });
                alert("Time out. You have benn loggod off");
            }
            else
                alert("Search is empty. pick a price");
        });
    }
};
GetCustomerCouponByMaxPriceComponent.ctorParameters = () => [
    { type: src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_2__["CustomersService"] },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
];
GetCustomerCouponByMaxPriceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-customer-coupon-by-max-price',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-customer-coupon-by-max-price.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-customer-coupon-by-max-price/get-customer-coupon-by-max-price.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-customer-coupon-by-max-price.component.css */ "./src/app/components/get-customer-coupon-by-max-price/get-customer-coupon-by-max-price.component.css")).default]
    })
], GetCustomerCouponByMaxPriceComponent);



/***/ }),

/***/ "./src/app/components/get-customer-coupons-by-category/get-customer-coupons-by-category.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/get-customer-coupons-by-category/get-customer-coupons-by-category.component.css ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".prodDiv>h3{\r\n    text-align: center;\r\n    color:blue;\r\n}\r\n#couponTable {\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n  }\r\n#couponTable td, #couponTable th {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n  }\r\n#couponTable tr:nth-child(even){background-color: #f2f2f2;}\r\n#couponTable tr:hover {background-color: #ddd;}\r\n#couponTable th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color: #4CAF50;\r\n    color: white;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXQtY3VzdG9tZXItY291cG9ucy1ieS1jYXRlZ29yeS9nZXQtY3VzdG9tZXItY291cG9ucy1ieS1jYXRlZ29yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDtBQUNBO0lBQ0kseURBQXlEO0lBQ3pELHlCQUF5QjtJQUN6QixXQUFXO0VBQ2I7QUFFQTtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0VBQ2Q7QUFFQSxnQ0FBZ0MseUJBQXlCLENBQUM7QUFFMUQsdUJBQXVCLHNCQUFzQixDQUFDO0FBRTlDO0lBQ0UsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2V0LWN1c3RvbWVyLWNvdXBvbnMtYnktY2F0ZWdvcnkvZ2V0LWN1c3RvbWVyLWNvdXBvbnMtYnktY2F0ZWdvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kRGl2Pmgze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6Ymx1ZTtcclxufVxyXG4jY291cG9uVGFibGUge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gICNjb3Vwb25UYWJsZSB0ZCwgI2NvdXBvblRhYmxlIHRoIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gICNjb3Vwb25UYWJsZSB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XHJcbiAgXHJcbiAgI2NvdXBvblRhYmxlIHRyOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO31cclxuICBcclxuICAjY291cG9uVGFibGUgdGgge1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/components/get-customer-coupons-by-category/get-customer-coupons-by-category.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/get-customer-coupons-by-category/get-customer-coupons-by-category.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: GetCustomerCouponsByCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCustomerCouponsByCategoryComponent", function() { return GetCustomerCouponsByCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/customers.service */ "./src/app/services/customers.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");




let GetCustomerCouponsByCategoryComponent = class GetCustomerCouponsByCategoryComponent {
    constructor(myService, myLogin) {
        this.myService = myService;
        this.myLogin = myLogin;
        this.test = localStorage.typeL;
    }
    ngOnInit() {
    }
    getCouponByCategory() {
        this.myService.getCustomerCouponsCategory(localStorage.token, this.category).subscribe((c) => {
            this.coupons = c;
        }, (error) => {
            if (error.status === 401) {
                this.myLogin.Logout(localStorage.token).subscribe(res => {
                    localStorage.token = null;
                    localStorage.typeL = "test";
                    location.href = "http://localhost:8080";
                });
                alert("Time out. You have benn loggod off");
            }
            else
                alert("Search is empty pick a category");
        });
    }
};
GetCustomerCouponsByCategoryComponent.ctorParameters = () => [
    { type: src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_2__["CustomersService"] },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
];
GetCustomerCouponsByCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-customer-coupons-by-category',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-customer-coupons-by-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-customer-coupons-by-category/get-customer-coupons-by-category.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-customer-coupons-by-category.component.css */ "./src/app/components/get-customer-coupons-by-category/get-customer-coupons-by-category.component.css")).default]
    })
], GetCustomerCouponsByCategoryComponent);



/***/ }),

/***/ "./src/app/components/get-customer-coupons/get-customer-coupons.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/get-customer-coupons/get-customer-coupons.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".prodDiv>h3{\r\n    text-align: center;\r\n    color:blue;\r\n}\r\n\r\n#couponTable {\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n  }\r\n\r\n#couponTable td, #couponTable th {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n  }\r\n\r\n#couponTable tr:nth-child(even){background-color: #f2f2f2;}\r\n\r\n#couponTable tr:hover {background-color: #ddd;}\r\n\r\n#couponTable th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color: #4CAF50;\r\n    color: white;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXQtY3VzdG9tZXItY291cG9ucy9nZXQtY3VzdG9tZXItY291cG9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlEQUF5RDtJQUN6RCx5QkFBeUI7SUFDekIsV0FBVztFQUNiOztBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDs7QUFFQSxnQ0FBZ0MseUJBQXlCLENBQUM7O0FBRTFELHVCQUF1QixzQkFBc0IsQ0FBQzs7QUFFOUM7SUFDRSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nZXQtY3VzdG9tZXItY291cG9ucy9nZXQtY3VzdG9tZXItY291cG9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2REaXY+aDN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjpibHVlO1xyXG59XHJcblxyXG4jY291cG9uVGFibGUge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gICNjb3Vwb25UYWJsZSB0ZCwgI2NvdXBvblRhYmxlIHRoIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gICNjb3Vwb25UYWJsZSB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XHJcbiAgXHJcbiAgI2NvdXBvblRhYmxlIHRyOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO31cclxuICBcclxuICAjY291cG9uVGFibGUgdGgge1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/components/get-customer-coupons/get-customer-coupons.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/get-customer-coupons/get-customer-coupons.component.ts ***!
  \***********************************************************************************/
/*! exports provided: GetCustomerCouponsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCustomerCouponsComponent", function() { return GetCustomerCouponsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/customers.service */ "./src/app/services/customers.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");




let GetCustomerCouponsComponent = class GetCustomerCouponsComponent {
    constructor(myService, myLogin) {
        this.myService = myService;
        this.myLogin = myLogin;
        this.test = localStorage.typeL;
    }
    ngOnInit() {
        this.myService.getCustomerCoupons(localStorage.token).subscribe((c) => {
            this.coupons = c;
        }, (error) => {
            if (error.status === 401) {
                this.myLogin.Logout(localStorage.token).subscribe(res => {
                    localStorage.token = null;
                    localStorage.typeL = "test";
                    location.href = "http://localhost:8080";
                });
            }
            else
                alert("Time out. You have benn loggod off");
        });
    }
};
GetCustomerCouponsComponent.ctorParameters = () => [
    { type: src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_2__["CustomersService"] },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
];
GetCustomerCouponsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-customer-coupons',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-customer-coupons.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-customer-coupons/get-customer-coupons.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-customer-coupons.component.css */ "./src/app/components/get-customer-coupons/get-customer-coupons.component.css")).default]
    })
], GetCustomerCouponsComponent);



/***/ }),

/***/ "./src/app/components/get-customer-details/get-customer-details.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/get-customer-details/get-customer-details.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#customerTable {\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n  }\r\n  \r\n  #customerTable td, #customerTable th {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n  }\r\n  \r\n  #customerTable tr:nth-child(even){background-color: #f2f2f2;}\r\n  \r\n  #customerTable tr:hover {background-color: #ddd;}\r\n  \r\n  #customerTable th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color: #4CAF50;\r\n    color: white;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXQtY3VzdG9tZXItZGV0YWlscy9nZXQtY3VzdG9tZXItZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseURBQXlEO0lBQ3pELHlCQUF5QjtJQUN6QixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsWUFBWTtFQUNkOztFQUVBLGtDQUFrQyx5QkFBeUIsQ0FBQzs7RUFFNUQseUJBQXlCLHNCQUFzQixDQUFDOztFQUVoRDtJQUNFLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dldC1jdXN0b21lci1kZXRhaWxzL2dldC1jdXN0b21lci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY3VzdG9tZXJUYWJsZSB7XHJcbiAgICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgI2N1c3RvbWVyVGFibGUgdGQsICNjdXN0b21lclRhYmxlIHRoIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gICNjdXN0b21lclRhYmxlIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cclxuICBcclxuICAjY3VzdG9tZXJUYWJsZSB0cjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2RkZDt9XHJcbiAgXHJcbiAgI2N1c3RvbWVyVGFibGUgdGgge1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/components/get-customer-details/get-customer-details.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/get-customer-details/get-customer-details.component.ts ***!
  \***********************************************************************************/
/*! exports provided: GetCustomerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCustomerDetailsComponent", function() { return GetCustomerDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/customers.service */ "./src/app/services/customers.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");




let GetCustomerDetailsComponent = class GetCustomerDetailsComponent {
    constructor(myService, myLogin) {
        this.myService = myService;
        this.myLogin = myLogin;
        this.test = localStorage.typeL;
    }
    ngOnInit() {
        this.myService.getCustomerDetails(localStorage.token).subscribe((c) => {
            this.customer = c;
        }, (error) => {
            if (error.status === 401) {
                this.myLogin.Logout(localStorage.token).subscribe(res => {
                    localStorage.token = null;
                    localStorage.typeL = "test";
                    location.href = "http://localhost:8080";
                });
            }
            else
                alert("Time out. You have benn loggod off");
        });
    }
};
GetCustomerDetailsComponent.ctorParameters = () => [
    { type: src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_2__["CustomersService"] },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
];
GetCustomerDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-customer-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-customer-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-customer-details/get-customer-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-customer-details.component.css */ "./src/app/components/get-customer-details/get-customer-details.component.css")).default]
    })
], GetCustomerDetailsComponent);



/***/ }),

/***/ "./src/app/components/get-one-company/get-one-company.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/get-one-company/get-one-company.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n#companyTable {\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n  }\r\n  \r\n  #companyTable td, #companyTable th {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n  }\r\n  \r\n  #companyTable tr:nth-child(even){background-color: #f2f2f2;}\r\n  \r\n  #companyTable tr:hover {background-color: #ddd;}\r\n  \r\n  #companyTable th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color: #4CAF50;\r\n    color: white;\r\n  }\r\n  \r\n  .buttonDelete{\r\n    background-color: black;\r\n    color:white;\r\n  }\r\n  \r\n  .buttonUpdate{\r\n  background-color: blueviolet;\r\n  color:white;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXQtb25lLWNvbXBhbnkvZ2V0LW9uZS1jb21wYW55LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0kseURBQXlEO0lBQ3pELHlCQUF5QjtJQUN6QixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsWUFBWTtFQUNkOztFQUVBLGlDQUFpQyx5QkFBeUIsQ0FBQzs7RUFFM0Qsd0JBQXdCLHNCQUFzQixDQUFDOztFQUUvQztJQUNFLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsV0FBVztFQUNiOztFQUVGO0VBQ0UsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2V0LW9uZS1jb21wYW55L2dldC1vbmUtY29tcGFueS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNjb21wYW55VGFibGUge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gICNjb21wYW55VGFibGUgdGQsICNjb21wYW55VGFibGUgdGgge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgI2NvbXBhbnlUYWJsZSB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XHJcbiAgXHJcbiAgI2NvbXBhbnlUYWJsZSB0cjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2RkZDt9XHJcbiAgXHJcbiAgI2NvbXBhbnlUYWJsZSB0aCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uRGVsZXRle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICB9XHJcblxyXG4uYnV0dG9uVXBkYXRle1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/components/get-one-company/get-one-company.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/get-one-company/get-one-company.component.ts ***!
  \*************************************************************************/
/*! exports provided: GetOneCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOneCompanyComponent", function() { return GetOneCompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let GetOneCompanyComponent = class GetOneCompanyComponent {
    constructor(myService, myLogin, activatedRout) {
        this.myService = myService;
        this.myLogin = myLogin;
        this.activatedRout = activatedRout;
        this.test = localStorage.typeL;
    }
    ngOnInit() {
        this.id = this.activatedRout.snapshot.params.id;
        this.getOneCompany();
    }
    getOneCompany() {
        this.myService.getOneCompany(localStorage.token, this.id).subscribe(c => {
            this.company = c;
        }, err => {
            if (err.status === 401) {
                this.myLogin.Logout(localStorage.token).subscribe(res => {
                    localStorage.token = null;
                    localStorage.typeL = "test";
                    location.href = "http://localhost:8080";
                });
                alert("Time out. You have benn loggod off");
            }
            else
                alert("Search is empty.");
        });
    }
};
GetOneCompanyComponent.ctorParameters = () => [
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
GetOneCompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-one-company',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-one-company.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-one-company/get-one-company.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-one-company.component.css */ "./src/app/components/get-one-company/get-one-company.component.css")).default]
    })
], GetOneCompanyComponent);



/***/ }),

/***/ "./src/app/components/get-one-customer/get-one-customer.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/get-one-customer/get-one-customer.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#customerTable {\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n  }\r\n  \r\n  #customerTable td, #customerTable th {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n  }\r\n  \r\n  #customerTable tr:nth-child(even){background-color: #f2f2f2;}\r\n  \r\n  #customerTable tr:hover {background-color: #ddd;}\r\n  \r\n  #customerTable th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color: #4CAF50;\r\n    color: white;\r\n  }\r\n  \r\n  .buttonDelete{\r\n    background-color: black;\r\n    color:white;\r\n  }\r\n  \r\n  .buttonUpdate{\r\n  background-color: blueviolet;\r\n  color:white;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXQtb25lLWN1c3RvbWVyL2dldC1vbmUtY3VzdG9tZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlEQUF5RDtJQUN6RCx5QkFBeUI7SUFDekIsV0FBVztFQUNiOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDs7RUFFQSxrQ0FBa0MseUJBQXlCLENBQUM7O0VBRTVELHlCQUF5QixzQkFBc0IsQ0FBQzs7RUFFaEQ7SUFDRSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsWUFBWTtFQUNkOztFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFdBQVc7RUFDYjs7RUFFRjtFQUNFLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1giLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dldC1vbmUtY3VzdG9tZXIvZ2V0LW9uZS1jdXN0b21lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2N1c3RvbWVyVGFibGUge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gICNjdXN0b21lclRhYmxlIHRkLCAjY3VzdG9tZXJUYWJsZSB0aCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gIH1cclxuICBcclxuICAjY3VzdG9tZXJUYWJsZSB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XHJcbiAgXHJcbiAgI2N1c3RvbWVyVGFibGUgdHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxyXG4gIFxyXG4gICNjdXN0b21lclRhYmxlIHRoIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLmJ1dHRvbkRlbGV0ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgfVxyXG5cclxuLmJ1dHRvblVwZGF0ZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/components/get-one-customer/get-one-customer.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/get-one-customer/get-one-customer.component.ts ***!
  \***************************************************************************/
/*! exports provided: GetOneCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOneCustomerComponent", function() { return GetOneCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let GetOneCustomerComponent = class GetOneCustomerComponent {
    constructor(myService, myLogin, activatedRout) {
        this.myService = myService;
        this.myLogin = myLogin;
        this.activatedRout = activatedRout;
        this.test = localStorage.typeL;
    }
    ngOnInit() {
        this.id = this.activatedRout.snapshot.params.id;
        this.getOneCustomer();
    }
    getOneCustomer() {
        this.myService.getOneCustomer(localStorage.token, this.id).subscribe(c => {
            this.customer = c;
        }, err => {
            if (err.status === 401) {
                this.myLogin.Logout(localStorage.token).subscribe(res => {
                    localStorage.token = null;
                    localStorage.typeL = "test";
                    location.href = "http://localhost:8080";
                });
            }
            else
                alert("Time out. You have benn loggod off");
        });
    }
};
GetOneCustomerComponent.ctorParameters = () => [
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
GetOneCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-one-customer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-one-customer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-one-customer/get-one-customer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-one-customer.component.css */ "./src/app/components/get-one-customer/get-one-customer.component.css")).default]
    })
], GetOneCustomerComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/layout/layout.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/layout/layout.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div{\r\n    height: 100%;\r\n    display: grid;\r\n    grid-template-columns: 20% 80%;\r\n    grid-template-rows: 10% 80% 10%;\r\n}\r\n\r\ndiv>*{\r\nborder: black solid 2px;\r\n}\r\n\r\nheader,footer{\r\n    grid-column: span 2;\r\n}\r\n\r\nmain{\r\n    overflow: auto;\r\n    padding-bottom: 100px;\r\n   \r\n    \r\n}\r\n\r\nheader{\r\n    background-color: lightblue;\r\n}\r\n\r\nnav{\r\n    background-color:lightpink;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDhCQUE4QjtJQUM5QiwrQkFBK0I7QUFDbkM7O0FBRUE7QUFDQSx1QkFBdUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCOzs7QUFHekI7O0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7O0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSA4MCUgMTAlO1xyXG59XHJcblxyXG5kaXY+KntcclxuYm9yZGVyOiBibGFjayBzb2xpZCAycHg7XHJcbn1cclxuXHJcbmhlYWRlcixmb290ZXJ7XHJcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xyXG59XHJcblxyXG5tYWlue1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgIFxyXG4gICAgXHJcbn1cclxuaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG59XHJcbm5hdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRwaW5rO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/layout/layout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/layout/layout.component.ts ***!
  \*******************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LayoutComponent = class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/layout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./layout.component.css */ "./src/app/components/layout/layout.component.css")).default]
    })
], LayoutComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p{\r\n    background-image: url('welcome.png');\r\n    background-size: contain;\r\n}\r\n.button{\r\n    background-color: green;\r\n    color:white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQXVGO0lBQ3ZGLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJDOlxcQW5ndWxhclByb2plY3RzXFxjb3Vwb25Qcm9qZWN0XFxzcmNcXGFzc2V0c1xcaW1hZ2VzXFx3ZWxjb21lLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG4uYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var src_app_models_client_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/client-type.enum */ "./src/app/models/client-type.enum.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginComponent = class LoginComponent {
    constructor(myService, router) {
        this.myService = myService;
        this.router = router;
    }
    ngOnInit() {
    }
    loginMethod() {
        this.myService.Login(this.email, this.password, this.clientType).subscribe(response => {
            //alert(response) // alert("ok" + this.clientType);
            if (response.toString() == "Login Failed, check password or email")
                alert(response);
            else
                switch (this.clientType) {
                    case src_app_models_client_type_enum__WEBPACK_IMPORTED_MODULE_3__["ClientType"].Administrator:
                        localStorage.typeL = "admin";
                        localStorage.token = response;
                        location.hash = ('/admin');
                        location.reload();
                        break;
                    case src_app_models_client_type_enum__WEBPACK_IMPORTED_MODULE_3__["ClientType"].Company:
                        localStorage.typeL = "company";
                        localStorage.token = response;
                        location.hash = ('/company');
                        location.reload();
                        break;
                    case src_app_models_client_type_enum__WEBPACK_IMPORTED_MODULE_3__["ClientType"].Customer:
                        localStorage.typeL = "customer";
                        localStorage.token = response;
                        location.hash = ('/customer');
                        location.reload();
                        break;
                    //location.href="http://localhost:4200/customer" \\location.href="http://localhost:4200/company" ; \\ location.href="http://localhost:4200/admin"
                }
        }, err => {
            alert("pick admin/customer/company");
        });
    }
    logoutMethod() {
        this.myService.Logout(localStorage.token).subscribe(response => {
            alert("Goodbye");
            localStorage.token = null;
            localStorage.typeL = "test";
            location.href = "http://localhost:8080";
        }, err => {
            alert("Time out. You have benn loggod off");
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/main/main.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/main/main.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainComponent = class MainComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.component.css */ "./src/app/components/main/main.component.css")).default]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/components/nav/nav.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/nav/nav.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button{\r\n    background-color: red;\r\n    color:white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");



let NavComponent = class NavComponent {
    constructor(myService) {
        this.myService = myService;
        this.test = localStorage.typeL;
    }
    ngOnInit() {
    }
    logoutMethod() {
        this.myService.Logout(localStorage.token).subscribe(response => {
            alert("Goodbye");
            localStorage.token = null;
            localStorage.typeL = null;
            location.href = "http://localhost:8080";
        }, err => {
            alert(err.error);
        });
    }
};
NavComponent.ctorParameters = () => [
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
];
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.css */ "./src/app/components/nav/nav.component.css")).default]
    })
], NavComponent);



/***/ }),

/***/ "./src/app/components/pagenotfound/pagenotfound.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/pagenotfound/pagenotfound.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZW5vdGZvdW5kL3BhZ2Vub3Rmb3VuZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/pagenotfound/pagenotfound.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/pagenotfound/pagenotfound.component.ts ***!
  \*******************************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PagenotfoundComponent = class PagenotfoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PagenotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pagenotfound',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pagenotfound.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pagenotfound/pagenotfound.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/components/pagenotfound/pagenotfound.component.css")).default]
    })
], PagenotfoundComponent);



/***/ }),

/***/ "./src/app/components/purchase-coupon/purchase-coupon.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/purchase-coupon/purchase-coupon.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button{\r\n    background-color: blue;\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wdXJjaGFzZS1jb3Vwb24vcHVyY2hhc2UtY291cG9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHVyY2hhc2UtY291cG9uL3B1cmNoYXNlLWNvdXBvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/purchase-coupon/purchase-coupon.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/purchase-coupon/purchase-coupon.component.ts ***!
  \*************************************************************************/
/*! exports provided: PurchaseCouponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseCouponComponent", function() { return PurchaseCouponComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/customers.service */ "./src/app/services/customers.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let PurchaseCouponComponent = class PurchaseCouponComponent {
    constructor(router, MyService, myLogin, activatedRout) {
        this.router = router;
        this.MyService = MyService;
        this.myLogin = myLogin;
        this.activatedRout = activatedRout;
        this.test = localStorage.typeL;
    }
    ngOnInit() {
        this.CouponId = this.activatedRout.snapshot.params.id;
    }
    purchaseCoupon() {
        this.MyService.purchaseCoupon(localStorage.token, this.CouponId).subscribe(c => {
            alert("Purchase has been successful");
            this.CouponId = null;
            this.router.navigate(['/getAllCoupons']);
        }, err => {
            if (err.status === 401) {
                this.myLogin.Logout(localStorage.token).subscribe(res => {
                    localStorage.token = null;
                    localStorage.typeL = "test";
                    location.href = "http://localhost:8080";
                });
            }
            else
                alert(err.error);
        });
    }
};
PurchaseCouponComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_2__["CustomersService"] },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
PurchaseCouponComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-purchase-coupon',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./purchase-coupon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/purchase-coupon/purchase-coupon.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./purchase-coupon.component.css */ "./src/app/components/purchase-coupon/purchase-coupon.component.css")).default]
    })
], PurchaseCouponComponent);



/***/ }),

/***/ "./src/app/components/update-company/update-company.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/update-company/update-company.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button{\r\n    background-color: blueviolet;\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91cGRhdGUtY29tcGFueS91cGRhdGUtY29tcGFueS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VwZGF0ZS1jb21wYW55L3VwZGF0ZS1jb21wYW55LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/update-company/update-company.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/update-company/update-company.component.ts ***!
  \***********************************************************************/
/*! exports provided: UpdateCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCompanyComponent", function() { return UpdateCompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var src_app_models_company__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/company */ "./src/app/models/company.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let UpdateCompanyComponent = class UpdateCompanyComponent {
    constructor(myService, myLogin, activatedRout, router) {
        this.myService = myService;
        this.myLogin = myLogin;
        this.activatedRout = activatedRout;
        this.router = router;
        this.test = localStorage.typeL;
    }
    ngOnInit() {
        this.id = this.activatedRout.snapshot.params.id;
        this.fill = true;
        this.fillInfo();
    }
    updateCompany() {
        let c;
        c = new src_app_models_company__WEBPACK_IMPORTED_MODULE_3__["Company"](this.id, this.name, this.email, this.password);
        if (c.email == "") {
            alert("email is empty");
            return;
        }
        if (c.password == "") {
            alert("password is empty");
            return;
        }
        this.myService.updateCompany(localStorage.token, c).subscribe(() => {
            alert("Update has been successful");
            this.fillOut();
            this.router.navigate(['/getAllCompanies']);
        }, err => {
            if (err.status === 401) {
                this.myLogin.Logout(localStorage.token).subscribe(res => {
                    localStorage.token = null;
                    localStorage.typeL = "test";
                    location.href = "http://localhost:8080";
                });
            }
            else
                alert(err.error);
        });
    }
    fillInfo() {
        this.myService.getOneCompany(localStorage.token, this.id).subscribe(c => {
            this.fill = true;
            this.name = c.name;
            this.email = c.email;
            this.password = c.password;
        }, err => {
            alert("id not found "); //working but make this alert 
        });
    }
    fillOut() {
        this.fill = false;
    }
};
UpdateCompanyComponent.ctorParameters = () => [
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
UpdateCompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-company',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-company.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-company/update-company.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-company.component.css */ "./src/app/components/update-company/update-company.component.css")).default]
    })
], UpdateCompanyComponent);



/***/ }),

/***/ "./src/app/components/update-coupon/update-coupon.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/update-coupon/update-coupon.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button{\r\n    background-color: blueviolet;\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91cGRhdGUtY291cG9uL3VwZGF0ZS1jb3Vwb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91cGRhdGUtY291cG9uL3VwZGF0ZS1jb3Vwb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/update-coupon/update-coupon.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/update-coupon/update-coupon.component.ts ***!
  \*********************************************************************/
/*! exports provided: UpdateCouponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCouponComponent", function() { return UpdateCouponComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_companies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/companies.service */ "./src/app/services/companies.service.ts");
/* harmony import */ var src_app_models_coupon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/coupon */ "./src/app/models/coupon.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let UpdateCouponComponent = class UpdateCouponComponent {
    constructor(router, myService, myLogin, activatedRout) {
        this.router = router;
        this.myService = myService;
        this.myLogin = myLogin;
        this.activatedRout = activatedRout;
        this.test = localStorage.typeL;
    }
    ngOnInit() {
        this.couponId = this.activatedRout.snapshot.params.id;
        this.fill = true;
        this.fillInfo();
    }
    updateCoupon() {
        let c;
        c = new src_app_models_coupon__WEBPACK_IMPORTED_MODULE_3__["Coupon"](this.couponId, this.category, this.title, this.description, this.startDate, this.endDate, this.amount, this.price, this.image);
        this.myService.updateCoupon(localStorage.token, c).subscribe(c => {
            alert("Update has been successful ");
            this.couponId = null;
            this.category = null;
            this.title = null;
            this.description = null;
            this.startDate = null;
            this.endDate = null;
            this.amount = null;
            this.price = null;
            this.image = null;
            this.fill = false;
            this.router.navigate(['/getCompanyCoupon']);
        }, err => {
            if (err.status === 401) {
                this.myLogin.Logout(localStorage.token).subscribe(res => {
                    localStorage.token = null;
                    localStorage.typeL = "test";
                    location.href = "http://localhost:8080";
                });
            }
            else
                alert(err.error);
            // console.log(err)
        });
    }
    fillInfo() {
        this.myService.getCompanyCoupons(localStorage.token).subscribe(c => {
            let i;
            for (i = 0; i < c.length; i++) {
                if (c[i].id == this.couponId) {
                    this.fill = true;
                    this.category = c[i].category;
                    this.title = c[i].title;
                    this.description = c[i].description;
                    this.startDate = c[i].startDate;
                    this.endDate = c[i].endDate;
                    this.amount = c[i].amount;
                    this.price = c[i].price;
                    this.image = c[i].image;
                    break;
                }
            }
        });
    }
};
UpdateCouponComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_companies_service__WEBPACK_IMPORTED_MODULE_2__["CompaniesService"] },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
UpdateCouponComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-coupon',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-coupon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-coupon/update-coupon.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-coupon.component.css */ "./src/app/components/update-coupon/update-coupon.component.css")).default]
    })
], UpdateCouponComponent);



/***/ }),

/***/ "./src/app/components/update-customer/update-customer.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/update-customer/update-customer.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button{\r\n    background-color: blueviolet;\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91cGRhdGUtY3VzdG9tZXIvdXBkYXRlLWN1c3RvbWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBkYXRlLWN1c3RvbWVyL3VwZGF0ZS1jdXN0b21lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/update-customer/update-customer.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/update-customer/update-customer.component.ts ***!
  \*************************************************************************/
/*! exports provided: UpdateCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCustomerComponent", function() { return UpdateCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var src_app_models_customer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/customer */ "./src/app/models/customer.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let UpdateCustomerComponent = class UpdateCustomerComponent {
    constructor(router, myService, myLogin, activatedRout) {
        this.router = router;
        this.myService = myService;
        this.myLogin = myLogin;
        this.activatedRout = activatedRout;
        this.test = localStorage.typeL;
    }
    ngOnInit() {
        this.id = +this.activatedRout.snapshot.params.id;
        this.fill = true;
        this.fillInfo();
    }
    updateCustomer() {
        let c;
        c = new src_app_models_customer__WEBPACK_IMPORTED_MODULE_3__["Customer"](this.id, this.firstName, this.lastName, this.email, this.password);
        this.myService.updateCustomer(localStorage.token, c).subscribe(c => {
            alert("Update has been successful");
            this.fillOut();
            this.router.navigate(['/getAllCustomers']);
        }, err => {
            if (err.status === 401) {
                this.myLogin.Logout(localStorage.token).subscribe(res => {
                    localStorage.token = null;
                    localStorage.typeL = "test";
                    location.href = "http://localhost:8080";
                });
            }
            else
                alert(err.error);
        });
    }
    fillInfo() {
        this.myService.getOneCustomer(localStorage.token, this.id).subscribe(c => {
            this.fill = true;
            this.firstName = c.firstName;
            this.lastName = c.lastName;
            this.email = c.email;
            this.password = c.password;
        }, err => {
            alert(err.error); //working but make this alert 
        });
    }
    fillOut() {
        this.fill = false;
    }
};
UpdateCustomerComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
UpdateCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-customer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-customer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-customer/update-customer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-customer.component.css */ "./src/app/components/update-customer/update-customer.component.css")).default]
    })
], UpdateCustomerComponent);



/***/ }),

/***/ "./src/app/models/client-type.enum.ts":
/*!********************************************!*\
  !*** ./src/app/models/client-type.enum.ts ***!
  \********************************************/
/*! exports provided: ClientType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientType", function() { return ClientType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var ClientType;
(function (ClientType) {
    ClientType["Administrator"] = "Administrator";
    ClientType["Company"] = "Company";
    ClientType["Customer"] = "Customer";
})(ClientType || (ClientType = {}));


/***/ }),

/***/ "./src/app/models/company.ts":
/*!***********************************!*\
  !*** ./src/app/models/company.ts ***!
  \***********************************/
/*! exports provided: Company */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Company", function() { return Company; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Company {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}


/***/ }),

/***/ "./src/app/models/coupon.ts":
/*!**********************************!*\
  !*** ./src/app/models/coupon.ts ***!
  \**********************************/
/*! exports provided: Coupon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coupon", function() { return Coupon; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Coupon {
    constructor(id, category, title, description, startDate, endDate, amount, price, image) {
        this.id = id;
        this.category = category;
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.amount = amount;
        this.price = price;
        this.image = image;
    }
}


/***/ }),

/***/ "./src/app/models/customer.ts":
/*!************************************!*\
  !*** ./src/app/models/customer.ts ***!
  \************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Customer {
    constructor(id, firstName, lastName, email, password) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}


/***/ }),

/***/ "./src/app/services/admin.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/admin.service.ts ***!
  \*******************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AdminService = class AdminService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    //company
    addCompany(token, company) {
        return this.httpClient.post("http://localhost:8080/admin/addCompany/" + token, company);
    }
    updateCompany(token, company) {
        return this.httpClient.put("http://localhost:8080/admin/updateCompany/" + token, company);
    }
    deleteCompany(token, companyId) {
        return this.httpClient.delete("http://localhost:8080/admin/deleteCompany/" + token + "/" + companyId);
    }
    getAllCompanies(token) {
        return this.httpClient.get("http://localhost:8080/admin/getAllCompanies/" + token);
    }
    getOneCompany(token, companyId) {
        return this.httpClient.get("http://localhost:8080/admin/getOneCompany/" + token + "/" + companyId);
    }
    //customer
    addCustomer(token, customer) {
        return this.httpClient.post("http://localhost:8080/admin/addCustomer/" + token, customer);
    }
    updateCustomer(token, customer) {
        return this.httpClient.put("http://localhost:8080/admin/updateCustomer/" + token, customer);
    }
    deleteCustomer(token, customerId) {
        return this.httpClient.delete("http://localhost:8080/admin/deleteCustomer/" + token + "/" + customerId);
    }
    getAllCustomers(token) {
        return this.httpClient.get("http://localhost:8080/admin/getAllCustomers/" + token);
    }
    getOneCustomer(token, customerId) {
        return this.httpClient.get("http://localhost:8080/admin/getOneCustomer/" + token + "/" + customerId);
    }
};
AdminService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AdminService);



/***/ }),

/***/ "./src/app/services/companies.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/companies.service.ts ***!
  \***********************************************/
/*! exports provided: CompaniesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesService", function() { return CompaniesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CompaniesService = class CompaniesService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    addCoupon(token, coupon) {
        return this.httpClient.post("http://localhost:8080/companies/addCoupon/" + token, coupon);
    }
    updateCoupon(token, coupon) {
        return this.httpClient.put("http://localhost:8080/companies/updateCoupon/" + token, coupon);
    }
    deleteCoupon(token, couponId) {
        return this.httpClient.delete("http://localhost:8080/companies/deleteCoupon/" + token + "/" + couponId);
    }
    getCompanyCoupons(token) {
        return this.httpClient.get("http://localhost:8080/companies/getCompanyCoupon/" + token);
    }
    getCouponByCategory(token, category) {
        return this.httpClient.get("http://localhost:8080/companies/getComapnyCouponCategory/" + token + "/" + category);
    }
    getCouponByMaxPrice(token, price) {
        return this.httpClient.get("http://localhost:8080/companies/getComapnyCouponMaxPrice/" + token + "/" + price);
    }
    getCompanyDetails(token) {
        return this.httpClient.get("http://localhost:8080/companies/getComapnyDetails/" + token);
    }
};
CompaniesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CompaniesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CompaniesService);



/***/ }),

/***/ "./src/app/services/customers.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/customers.service.ts ***!
  \***********************************************/
/*! exports provided: CustomersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersService", function() { return CustomersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CustomersService = class CustomersService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    purchaseCoupon(token, couponId) {
        return this.httpClient.post("http://localhost:8080/customers/PurchaseCoupon/" + token + "/" + couponId, String);
    }
    getCustomerCoupons(token) {
        return this.httpClient.get("http://localhost:8080/customers/getCustomerCoupons/" + token);
    }
    getCustomerCouponsCategory(token, category) {
        return this.httpClient.get("http://localhost:8080/customers/getCustomerCouponsCategory/" + token + "/" + category);
    }
    getCustomerCouponsMaxPrice(token, price) {
        return this.httpClient.get("http://localhost:8080/customers/getCustomerCouponsMaxPrice/" + token + "/" + price);
    }
    getCustomerDetails(token) {
        return this.httpClient.get("http://localhost:8080/customers/getCustomerDetails/" + token);
    }
    getAllCoupons(token) {
        return this.httpClient.get("http://localhost:8080/customers/getAllCoupons/" + token);
    }
};
CustomersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CustomersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CustomersService);



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let LoginService = class LoginService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    Login(email, password, clientType) {
        return this.httpClient.post("http://localhost:8080/loginCon/login/" + email + "/" + password + "/" + clientType, null, { responseType: "text" });
    }
    // public Login(email:string,password:string,clientType:ClientType){
    //   return this.httpClient.post("http://localhost:8080/loginCon/login/" + email + "/" + password + "/" + clientType,null,
    //   ); // should not get response type text because then ignore the throw error message
    // }
    Logout(token) {
        return this.httpClient.post("http://localhost:8080/loginCon/logout/" + token, null, { responseType: "text" });
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\AngularProjects\couponProject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map