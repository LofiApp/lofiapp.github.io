"use strict";
(self["webpackChunklofi_gr"] = self["webpackChunklofi_gr"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ 8043);
/* harmony import */ var _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/about-page/about-page.component */ 7218);
/* harmony import */ var _pages_label_page_label_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/label-page/label-page.component */ 8558);
/* harmony import */ var _pages_shop_page_shop_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/shop-page/shop-page.component */ 396);
/* harmony import */ var _pages_submission_page_submission_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/submission-page/submission-page.component */ 8319);
/* harmony import */ var _pages_artists_page_artists_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/artists-page/artists-page.component */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);


// Import pages








const routes = [{
  path: '',
  component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__.HomePageComponent
}, {
  path: 'home',
  redirectTo: '',
  pathMatch: 'full'
}, {
  path: 'releases',
  component: _pages_label_page_label_page_component__WEBPACK_IMPORTED_MODULE_3__.LabelPageComponent
}, {
  path: 'releases/aphrodites-memories',
  redirectTo: '/releases',
  pathMatch: 'full'
}, {
  path: 'artists',
  component: _pages_artists_page_artists_page_component__WEBPACK_IMPORTED_MODULE_6__.ArtistsPageComponent
}, {
  path: 'shop',
  component: _pages_shop_page_shop_page_component__WEBPACK_IMPORTED_MODULE_4__.ShopPageComponent
}, {
  path: 'submissions',
  component: _pages_submission_page_submission_page_component__WEBPACK_IMPORTED_MODULE_5__.SubmissionPageComponent
}, {
  path: 'about',
  component: _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_2__.AboutPageComponent
}];
const extraOptions = {
  useHash: true
};
class AppRoutingModule {}
(0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppRoutingModule, "\u0275fac", function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
});
(0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppRoutingModule, "\u0275mod", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
}));
(0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppRoutingModule, "\u0275inj", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes, extraOptions), _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
}));
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/header/header.component */ 7876);
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/footer/footer.component */ 6017);






class AppComponent {
  constructor(translateService) {
    (0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "translateService", void 0);
    this.translateService = translateService;
    // Register translation languages.
    translateService.addLangs(['en', 'gr']);
    // Get the language from local storage.
    let storedLang = localStorage.getItem('lang');
    if (!(storedLang == 'en' || storedLang == 'gr')) {
      // Get the browser's language.
      const browserLang = translateService.getBrowserLang();
      console.log('The browser lang: ', browserLang);
      if (browserLang == 'el') {
        // Set a default language.
        translateService.setDefaultLang('gr');
        localStorage.setItem('lang', 'gr');
      } else {
        // Set a default language.
        translateService.setDefaultLang('en');
        localStorage.setItem('lang', 'en');
      }
    } else {
      // Set the stored language as the default.
      translateService.setDefaultLang(storedLang);
    }
  }
  ngOnInit() {}
}
(0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppComponent, "\u0275fac", function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService));
});
(0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 4,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-header")(2, "router-outlet")(3, "app-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "httpTranslateLoaderFactory": () => (/* binding */ httpTranslateLoaderFactory)
/* harmony export */ });
/* harmony import */ var D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ 8043);
/* harmony import */ var _pages_shop_page_shop_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/shop-page/shop-page.component */ 396);
/* harmony import */ var _pages_submission_page_submission_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/submission-page/submission-page.component */ 8319);
/* harmony import */ var _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/about-page/about-page.component */ 7218);
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/header/header.component */ 7876);
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/footer/footer.component */ 6017);
/* harmony import */ var ngx_facebook__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-facebook */ 8710);
/* harmony import */ var _pages_label_page_label_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/label-page/label-page.component */ 8558);
/* harmony import */ var _pages_artists_page_artists_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/artists-page/artists-page.component */ 4762);
/* harmony import */ var _layout_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/carousel/carousel.component */ 3259);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/http-loader */ 359);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);





// Page Imports




// Layout Imports


// Third Party Imports











// Factory function required during AOT compilation
function httpTranslateLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__.TranslateHttpLoader(http);
}
class AppModule {}
(0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppModule, "\u0275fac", function AppModule_Factory(t) {
  return new (t || AppModule)();
});
(0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppModule, "\u0275mod", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
}));
(0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppModule, "\u0275inj", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModule,
  // Third Party Imports
  ngx_facebook__WEBPACK_IMPORTED_MODULE_17__.FacebookModule.forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule.forRoot({
    loader: {
      provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateLoader,
      useFactory: httpTranslateLoaderFactory,
      deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClient]
    }
  })]
}));
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__.HomePageComponent, _pages_shop_page_shop_page_component__WEBPACK_IMPORTED_MODULE_4__.ShopPageComponent, _pages_submission_page_submission_page_component__WEBPACK_IMPORTED_MODULE_5__.SubmissionPageComponent, _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_6__.AboutPageComponent, _layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__.HeaderComponent, _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__.FooterComponent, _pages_label_page_label_page_component__WEBPACK_IMPORTED_MODULE_9__.LabelPageComponent, _pages_artists_page_artists_page_component__WEBPACK_IMPORTED_MODULE_10__.ArtistsPageComponent, _layout_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_11__.CarouselComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModule, ngx_facebook__WEBPACK_IMPORTED_MODULE_17__.FacebookModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule]
  });
})();

/***/ }),

/***/ 3259:
/*!*******************************************************!*\
  !*** ./src/app/layout/carousel/carousel.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselComponent": () => (/* binding */ CarouselComponent)
/* harmony export */ });
/* harmony import */ var D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);






function CarouselComponent_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 3)(4, "div", 5)(5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const image_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", image_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", image_r1.src, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", image_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](image_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](image_r1.short);
  }
}
function CarouselComponent_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CarouselComponent_1_ng_template_0_Template, 9, 5, "ng-template", 1);
  }
}
class CarouselComponent {
  constructor(config, translate) {
    (0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "translate", void 0);
    (0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showNavigationArrows", false);
    (0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showNavigationIndicators", false);
    (0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "images", [{
      title: '',
      short: '',
      link: "https://lofi.gr/#/releases",
      src: "../../../assets/images/banners/duskhorizon.jpg"
    }, {
      title: '',
      short: '',
      link: "https://lofi.gr/#/releases",
      src: "../../../assets/images/banners/aphrodite.jpg"
    }, {
      title: '',
      short: '',
      link: "https://discord.gg/3McA7S8",
      src: "../../../assets/images/banners/discord.jpg"
    }, {
      title: '',
      short: '',
      link: "https://youtu.be/SUyQ2rddBiw?list=PLUelkIwR8-aEKzTFEG5wY0UWXtfHyB5st",
      src: "../../../assets/images/banners/radio.jpg"
    }]);
    // The current browser language.
    (0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "currentLang", void 0);
    this.translate = translate;
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
    config.interval = 7000;
    config.keyboard = true;
    config.pauseOnHover = false;
    this.translateCarousel();
  }
  translateCarousel() {
    // asynchronous - gets translations then completes.
    this.translate.get(['HOME.CAROUSEL']).subscribe(translations => {
      for (let i = 0; i < this.images.length; i++) {
        let slideTranslation = translations['HOME.CAROUSEL'][(i + 1).toString()];
        console.log('The translation: ', slideTranslation);
        this.images[i].title = slideTranslation.TITLE;
        this.images[i].short = slideTranslation.SHORT;
      }
      // console.log('The translations: ', translations)
    });
  }

  onClick(targetElement) {
    if (targetElement.classList.contains('language')) {
      this.translateCarousel();
    }
  }
}
(0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(CarouselComponent, "\u0275fac", function CarouselComponent_Factory(t) {
  return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbCarouselConfig), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService));
});
(0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(CarouselComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CarouselComponent,
  selectors: [["ngbd-carousel-navigation"]],
  hostBindings: function CarouselComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselComponent_click_HostBindingHandler($event) {
        return ctx.onClick($event.target);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbCarouselConfig] // add NgbCarouselConfig to the component providers
  )],
  decls: 2,
  vars: 1,
  consts: [[4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "wrapper"], ["alt", "image-link", 3, "href"], ["alt", "Random first slide", 1, "carousel-image", 3, "src"], [1, "carousel-caption"]],
  template: function CarouselComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-carousel");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CarouselComponent_1_Template, 1, 0, null, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.images);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbCarousel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbSlide],
  styles: [".carousel[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  max-width: 1000px;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n}\n\n.carousel-image[_ngcontent-%COMP%] {\n  height: 100vh;\n  min-height: -webkit-fill-available;\n  object-fit: cover;\n  width: 100%;\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n\n.carousel-caption[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.4);\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  top: 68%;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 22px 10px 0px 10px;\n  font-family: \"Comfortaa\", cursive;\n  z-index: 1;\n}\n\np[_ngcontent-%COMP%] {\n  padding: 0 2px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0L2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUVBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0FBREY7O0FBSUE7RUFDRSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSxVQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0FBREYiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNhcm91c2VsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG5cclxuICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLmNhcm91c2VsLWltYWdlIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG1pbi1oZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA2cHg7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jYXB0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiA2OCU7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBwYWRkaW5nOiAyMnB4IDEwcHggMHB4IDEwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ29tZm9ydGFhXCIsIGN1cnNpdmU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxucHtcclxuICBwYWRkaW5nOiAwIDJweDtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 6017:
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 8699);



class FooterComponent {
  constructor() {
    // A variable of type number to hold the current year.
    (0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "currentYear", new Date().getFullYear());
  }
  ngOnInit() {}
}
(0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(FooterComponent, "\u0275fac", function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
});
(0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(FooterComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 25,
  vars: 10,
  consts: [[1, "panel"], [1, "notice"], ["href", "https://inhinito.com"], ["id", "inhinito-logo", "src", "../../../assets/images/logo/inhinito_logo.png", "alt", "Inhinito Logo"], ["id", "current-year"], ["id", "social-links"], ["title", "Youtube", "href", "https://www.youtube.com/channel/UCTwkZdqG9nlyZJGwXkgqvCg/"], ["src", "../../../assets/images/social/youtube.svg", "alt", "Youtube", 1, "images"], ["title", "Instagram", "href", "https://www.instagram.com/lofi.gr/"], ["src", "../../../assets/images/social/instagram.svg", "alt", "Instagram", 1, "images"], ["title", "Facebook", "href", "https://www.facebook.com/lofi.gr/"], ["src", "../../../assets/images/social/facebook.svg", "alt", "Instagram", 1, "images"], ["title", "Twitter", "href", "https://twitter.com/LofiGr"], ["src", "../../../assets/images/social/twitter.svg", "alt", "Twitter", 1, "images"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "footer")(2, "article", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 5)(17, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 4, "FOOTER.HEADLINE"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 6, "FOOTER.COPYRIGHT-1"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.currentYear, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 8, "FOOTER.COPYRIGHT-2"), " ");
    }
  },
  dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
  styles: [".fb-like[_ngcontent-%COMP%] {\n  margin-top: -7px !important;\n  margin-bottom: 10px !important;\n}\n\n#inhinito-logo[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  width: 100%;\n  max-width: 430px;\n}\n\n#social-links[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQUY7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBREYiLCJzb3VyY2VzQ29udGVudCI6WyIuZmItbGlrZSB7XHJcbiAgbWFyZ2luLXRvcDogLTdweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbiNpbmhpbml0by1sb2dvIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA0MzBweDtcclxufVxyXG5cclxuXHJcbiNzb2NpYWwtbGlua3Mge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
}));

/***/ }),

/***/ 7876:
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);

// Import router.






const _c0 = function (a0) {
  return {
    "selected-lang": a0
  };
};
class HeaderComponent {
  constructor(router, renderer, metaTagService, titleService, translateService) {
    (0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "router", void 0);
    (0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "renderer", void 0);
    (0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "metaTagService", void 0);
    (0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "titleService", void 0);
    (0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "translateService", void 0);
    // The currently selected language.
    (0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "currentLang", 'en');
    // Flag to check if this is the user's first visit to a page.
    (0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "firstVisit", true);
    // Sets initial value to true to show loading spinner on first load.
    (0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "loading", true);
    (0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "menu", void 0);
    (0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "burger", void 0);
    (0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "closeBurger", void 0);
    // CSS selector for everything inside the sidebar menu.
    (0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "outsideBurger", '#menubar *');
    this.router = router;
    this.renderer = renderer;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.translateService = translateService;
    this.router.events.subscribe(e => {
      this.navigationInterceptor(e);
    });
  }
  ngOnInit() {
    // Get the language from local storage.
    let storedLang = localStorage.getItem('lang');
    this.translateLanguageTo(storedLang);
    this.menu = document.getElementById("menubar");
    this.burger = document.getElementById('hamburger');
    this.closeBurger = document.getElementById("close-burger");
    /*--------TOUCH EVENTS---------*/
    this.renderer.listen('document', 'touchstart', handleTouchStart);
    this.renderer.listen('document', 'touchmove', handleTouchMove);
    var xDown = null;
    var yDown = null;
    function getTouches(evt) {
      return evt.touches; // browser API
    }

    function handleTouchStart(evt) {
      const firstTouch = getTouches(evt)[0];
      xDown = firstTouch.clientX;
      yDown = firstTouch.clientY;
    }
    ;
    function handleTouchMove(evt) {
      if (!xDown || !yDown) {
        return;
      }
      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;
      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;
      let menu = document.getElementById("menubar");
      let burger = document.getElementById('hamburger');
      // Most significant
      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        /* left swipe */
        if (xDiff > 0) {
          // Check if the side-menu is closed so you can open it.
          // menu.classList.add('open');
          // burger.classList.add('open');
          /* right swipe */
        } else {
          // Check if the side-menu is opened so you can close it.
          menu.classList.remove('open');
          burger.classList.remove('open');
        }
      } else {
        if (yDiff > 0) {
          /* up swipe */
        } else {
          /* down swipe */
        }
      }
      /* reset values */
      xDown = null;
      yDown = null;
    }
    ;
  }
  // Switch language.
  translateLanguageTo(lang) {
    // Check if the language has changed.
    if (this.currentLang !== lang) {
      // Calling this method loads the corresponding [lang].json file and
      // updates the language on the page without reloading the application.
      this.translateService.use(lang);
      // Set the currently selected language.
      this.currentLang = lang;
      // Set the currently selected language to the local storage.
      localStorage.setItem('lang', lang);
      // Animate the ring.
      this.animateRing();
    }
  }
  /**
   * Animate the ring around the logi.gr logo.
   */
  animateRing() {
    // Get the ring.
    let ring = document.getElementsByClassName('ring');
    // Clone the ring div element.
    var ringClone = ring[0].cloneNode(true);
    // Replace the existing ring with its clone to restart its animation.
    ring[0].parentNode.replaceChild(ringClone, ring[0]);
  }
  // Shows and hides the loading spinner during RouterEvent changes.
  navigationInterceptor(event) {
    // Navigation Start.
    if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationStart) {
      // Animate the ring.
      this.animateRing();
      // Raise the navigation flag.
      this.loading = true;
    }
    // Navigation End.
    if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
      // Google Tag for analytics
      // gtag('config', 'UA-151194258-1', {
      //   'page_path': event.urlAfterRedirects
      // });
      // Set the title and meta tags for each page upon navigating there.
      if (this.router.url == '' || this.router.url == '/') {
        this.titleService.setTitle('LoFi.gr - Greek LoFi Community');
        this.metaTagService.updateTag({
          name: 'description',
          content: 'Greek LoFi Community - LoFi Greece'
        });
        this.metaTagService.updateTag({
          name: 'keywords',
          content: 'lofi, lo fi, lo-fi, community, chill, beats, radio, aesthetic, aesthetics, Inhinito, inhinito, greek, greece, hellas'
        });
      } else if (this.router.url == '/releases') {
        this.titleService.setTitle('LoFi.gr - Record Label Releases');
        this.metaTagService.updateTag({
          name: 'description',
          content: 'Greek LoFi Record Label Releases'
        });
        this.metaTagService.updateTag({
          name: 'keywords',
          content: 'lofi, lo fi, lo-fi, releases, label, record label, record, music, team, community, chill, beats, radio, hiphop, hip hop, hip-hop, Inhinito, inhinito, greek, greece, hellas'
        });
      } else if (this.router.url == '/artists') {
        this.titleService.setTitle('LoFi.gr - Greek LoFi Artists');
        this.metaTagService.updateTag({
          name: 'description',
          content: 'Greek LoFi Community Artists'
        });
        this.metaTagService.updateTag({
          name: 'keywords',
          content: 'lofi, lo fi, lo-fi, artists, music, hiphop, hip hop, hip-hop, submit, community, chill, beats, radio, artists, artist, beatmaker, beatmakers, beat-maker, beat-makers, inhinito, greek, greece, hellas'
        });
      } else if (this.router.url == '/about') {
        this.titleService.setTitle('LoFi.gr - About the Greek LoFi Community');
        this.metaTagService.updateTag({
          name: 'description',
          content: 'Greek LoFi Community - About LoFi Greece'
        });
        this.metaTagService.updateTag({
          name: 'keywords',
          content: 'lofi, lo fi, lo-fi, information, info, team, community, chill, beats, radio, aesthetic, aesthetics, Inhinito, inhinito, greek, greece, hellas'
        });
      }
      // Upon navigating to the other page, get the menu items.
      let menuItems = this.menu.getElementsByTagName("UL")[0];
      // Loop through each menu item.
      for (var i = 1; i < menuItems.children.length; i++) {
        // The list item's link.
        let item = menuItems.children[i].getElementsByTagName("A")[0];
        // Set the rest of the item's back to their original background.
        item.setAttribute('style', 'background: transparent');
        // Check which page does the current URL match.
        if (item.getAttribute('routerLink') == this.router.url) {
          // Set the background of the selected item menu to a shade of purple.
          item.setAttribute('style', 'background: #ffffff85; box-shadow:none');
        }
      }
      // Drop the navigation flag.
      this.loading = false;
      if (!this.firstVisit) {
        // Close the sidebar menu.
        this.toggleMenu();
      }
      this.firstVisit = false;
    }
    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationCancel) {
      // Drop the navigation flag.
      this.loading = false;
    }
    if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationError) {
      // Drop the navigation flag.
      this.loading = false;
    }
  }
  toggleMenu() {
    let width = window.innerWidth;
    if (width <= 750) {
      //If open close it, if closed open it.
      if (!this.menu.classList.contains('open')) {
        // Open up the sidebar menu.
        this.menu.classList.add('open');
        // Fade out the hamburger button.
        this.burger.classList.add('open');
      } else {
        // Close out the sidebar menu.
        this.menu.classList.remove('open');
        // Fade in the hamburger button.
        this.burger.classList.remove('open');
      }
    }
  }
  // Hamburger menu open.
  onOpenMenu() {
    this.toggleMenu();
  }
  // Hamburger menu close.
  onCloseMenu() {
    this.toggleMenu();
  }
  // Click event-listener for the document's body.
  onKeyUp(event) {
    // Check if the side-menu is opened.
    if (this.menu.classList.contains('open')) {
      // Only close the menu if the user has clicked outside the menu.
      if (!event.target.matches(this.outsideBurger) && event.target != this.burger) {
        this.toggleMenu();
      }
    }
  }
}
(0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(HeaderComponent, "\u0275fac", function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService));
});
(0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(HeaderComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_click_HostBindingHandler($event) {
        return ctx.onKeyUp($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
    }
  },
  decls: 32,
  vars: 18,
  consts: [[1, "language-selection"], ["type", "button", 1, "language", 3, "ngClass", "click"], ["id", "hamburger-container"], ["id", "hamburger", "type", "button", "value", "\u2630", "tabindex", "0", "aria-label", "Menu button", 3, "click"], ["routerLink", "/", "id", "logo-container"], [1, "ring"], ["id", "logo", "src", "../../../assets/images/logo/circle_logo.png", "alt", "LoFi.gr logo"], ["id", "menubar"], [1, "ulmenu"], ["id", "close-burger", 3, "click"], ["routerLink", "/"], ["routerLink", "/releases"], ["routerLink", "/artists"], ["routerLink", "/about"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header")(1, "div", 0)(2, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_2_listener() {
        return ctx.translateLanguageTo("en");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "English");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_4_listener() {
        return ctx.translateLanguageTo("gr");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 2)(7, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_input_click_7_listener() {
        return ctx.onOpenMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4)(9, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7)(12, "nav")(13, "ul", 8)(14, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_14_listener() {
        return ctx.onCloseMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u2715");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "li")(17, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "li")(21, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "li")(25, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "li")(29, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](31, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](14, _c0, ctx.currentLang === "en"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](16, _c0, ctx.currentLang === "gr"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 6, "NAVBAR.HOME"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 8, "NAVBAR.RELEASES"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 10, "NAVBAR.ARTISTS"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](31, 12, "NAVBAR.ABOUT"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
  styles: ["@media screen and (min-width: 1120px) and (max-width: 1420px) {\n  header[_ngcontent-%COMP%]   .speaker-index[_ngcontent-%COMP%] {\n    margin-top: 75px;\n  }\n  header[_ngcontent-%COMP%]   .speaker-content[_ngcontent-%COMP%] {\n    margin-top: -50px;\n  }\n}\n@media screen and (min-width: 970px) and (max-width: 1119px) {\n  header[_ngcontent-%COMP%]   .speaker-index[_ngcontent-%COMP%] {\n    margin-top: 70px;\n  }\n  header[_ngcontent-%COMP%]   .speaker-content[_ngcontent-%COMP%] {\n    margin-top: -55px;\n  }\n}\n@media screen and (min-width: 751px) and (max-width: 969px) {\n  header[_ngcontent-%COMP%]   .speaker-index[_ngcontent-%COMP%] {\n    margin-top: 60px;\n  }\n  header[_ngcontent-%COMP%]   .speaker-content[_ngcontent-%COMP%] {\n    margin-top: -65px;\n  }\n}\n@media screen and (max-width: 750px) {\n  header[_ngcontent-%COMP%]   .language-selection[_ngcontent-%COMP%] {\n    top: 5px;\n    right: 7px;\n  }\n  header[_ngcontent-%COMP%]   .language-selection[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 10.5px;\n    margin-left: 6px;\n  }\n  #hamburger-container[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  #menubar.open[_ngcontent-%COMP%] {\n    \n    transform: translate(0, 0) !important;\n    overflow: unset;\n    \n    height: 100%;\n  }\n  header[_ngcontent-%COMP%]   .ulmenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 18px;\n    display: block;\n  }\n  div[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    height: 100%;\n    z-index: 2;\n  }\n  nav[_ngcontent-%COMP%]   .ulmenu[_ngcontent-%COMP%] {\n    height: 150%;\n    text-align: center;\n    border-radius: 0;\n    margin: 0;\n    width: 100%;\n  }\n  header[_ngcontent-%COMP%]   .ring[_ngcontent-%COMP%] {\n    top: 16px !important;\n    margin-left: 17px !important;\n  }\n  body[_ngcontent-%COMP%]   #logo[_ngcontent-%COMP%] {\n    width: 85px;\n    max-width: 300px;\n  }\n  .ulmenu[_ngcontent-%COMP%] {\n    top: 0 !important;\n    background: linear-gradient(340deg, rgba(238, 205, 158, 0.55) 13%, rgba(245, 206, 140, 0.89) 51%, #f5ce8c 100%) !important;\n  }\n  nav[_ngcontent-%COMP%]   #close-burger[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .ulmenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n  ul[_ngcontent-%COMP%]   .linews[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n  header[_ngcontent-%COMP%]   #menubar[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 70%;\n    right: 0;\n    z-index: 10000000000;\n    \n    position: fixed;\n    transform: translate(106%, 0);\n    transition: transform 0.2s ease;\n  }\n  header[_ngcontent-%COMP%]   #hamburger[_ngcontent-%COMP%] {\n    display: block;\n  }\n  main[_ngcontent-%COMP%]   .panelclass[_ngcontent-%COMP%] {\n    top: 13%;\n  }\n  main[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n    top: 75px;\n  }\n  body[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n}\n.language-selection[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  right: 11px;\n  top: 7px;\n}\n\n.language-selection[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-left: 10px;\n  background: #fbd38f;\n  color: #5d0c97;\n  border-radius: 7px;\n  border: none;\n  padding: 5px 12px 3px 12px;\n  font-family: \"Comfortaa\", cursive;\n  box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.5294117647);\n  transition: all 0.15s ease-out;\n  font-weight: bold;\n}\n\n.language-selection[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #f0c7ff;\n}\n\n.language-selection[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  background: #f4e6f9 !important;\n}\n\n.selected-lang[_ngcontent-%COMP%] {\n  background: #fee4fd !important;\n  box-shadow: 0px 0px 26px 0px rgba(73, 58, 7, 0.5294117647) !important;\n  color: inherit;\n}\n\n.speaker[_ngcontent-%COMP%] {\n  float: right;\n  width: 60px;\n  max-width: 100%;\n  cursor: pointer;\n}\n\n.speaker-index[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  margin-top: 85px;\n}\n\n.speaker-content[_ngcontent-%COMP%] {\n  margin-right: 15px;\n  margin-top: -35px;\n}\n\n#hamburger-container[_ngcontent-%COMP%] {\n  display: none;\n  height: 53px;\n  margin-top: 50px;\n  z-index: 4;\n}\n\n#hamburger-container[_ngcontent-%COMP%]::before {\n  content: \"\";\n  background: radial-gradient(circle, #ffca7e 5%, rgba(255, 202, 126, 0.81) 70%, rgba(255, 253, 228, 0.58) 140%);\n  width: 100%;\n  height: 53px;\n  z-index: 4;\n  position: absolute;\n  left: 0;\n}\n\n#hamburger[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  right: 0;\n  top: 50px;\n  margin-right: 28px;\n  z-index: 1000;\n  opacity: 1;\n  color: white;\n  font-weight: bold;\n  width: 53px;\n  height: 53px;\n  font-size: 25px;\n  cursor: pointer;\n  background-color: rgba(110, 59, 152, 0.768627451);\n  border: none;\n  box-shadow: 0px 0px 15px 0px #6e3b98;\n  transition: box-shadow 0.2s ease-in-out;\n}\n\n#hamburger.open[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n#hamburger[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 15px 0px #fee4fd;\n}\n\n#hamburger[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n#close-burger[_ngcontent-%COMP%] {\n  display: none;\n  -webkit-user-select: none;\n          user-select: none;\n  color: #8203a9;\n  font-weight: bolder;\n  font-size: 4vh;\n  margin-top: 25px;\n  margin-right: 12px;\n  margin-bottom: 15px;\n  padding-right: 30px;\n  padding-bottom: 7px;\n  padding-top: 23px;\n  padding-left: 10px;\n  width: -moz-fit-content;\n  width: fit-content;\n  cursor: pointer;\n  margin-left: auto;\n}\n\n#close-burger[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n\n#close-burger[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.ulmenu[_ngcontent-%COMP%] {\n  position: absolute !important;\n  top: 17px;\n  z-index: 3;\n  text-align: right;\n  list-style-type: none;\n  margin-top: 27px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 0 0%;\n  width: 100%;\n  background: rgb(255, 202, 126);\n  background: linear-gradient(140deg, rgba(255, 202, 126, 0.4574872185) 13%, rgba(245, 206, 140, 0.76) 51%, #f5ce8c 100%);\n  box-shadow: 0px 0px 23px -5px rgba(17, 17, 17, 0.5490196078);\n}\n\n.ulmenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 18px;\n  display: inline-block;\n  border-bottom: none;\n}\n\n.ulmenu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"Comfortaa\", cursive;\n  color: #753d8f;\n  font-weight: 600;\n  display: block;\n  text-align: center;\n  text-decoration: none;\n  transition: background 0.2s ease-out;\n}\n\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 11px 22px;\n}\n\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  box-shadow: inset 0px 0px 20px 5px #fce0c1;\n  transition: box-shadow 0.2s ease;\n}\n\n#menubar[_ngcontent-%COMP%] {\n  top: 0px;\n}\n\n#logo[_ngcontent-%COMP%] {\n  max-width: 100px;\n  box-shadow: 0px 0px 30px 0px #614955;\n  cursor: pointer;\n  border-radius: 50%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n\n.ring[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 8;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  border-radius: 50%;\n  overflow: hidden;\n  top: 8px;\n  margin-left: 1.5%;\n  padding: 10px;\n  box-shadow: 0px 0px 35px -10px #6e3b98;\n}\n\n.ring[_ngcontent-%COMP%]::before {\n  opacity: 0;\n  border-radius: 50%;\n  content: \"\";\n  position: absolute;\n  z-index: -2;\n  left: -50%;\n  top: -50%;\n  width: 200%;\n  height: 200%;\n  background-color: #6e3b98;\n  background-repeat: no-repeat;\n  background-size: 50% 50%, 50% 50%;\n  background-position: 0 0, 100% 0, 100% 100%, 0 100%;\n  background-image: linear-gradient(#6e3b98, #6e3b98), linear-gradient(mediumpurple, mediumpurple), linear-gradient(#3d418d, #3d418d), linear-gradient(#99c4f1, #99c4f1);\n  animation: _ngcontent-%COMP%_rotate 0.9s, _ngcontent-%COMP%_fade 1s;\n}\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before {\n  box-sizing: border-box;\n}\n@keyframes _ngcontent-%COMP%_rotate {\n  100% {\n    transform: rotate(1turn);\n  }\n}\n@keyframes _ngcontent-%COMP%_fade {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGdCQUFBO0VBQ0Y7RUFFQTtJQUNFLGlCQUFBO0VBQUY7QUFDRjtBQUdBO0VBQ0U7SUFDRSxnQkFBQTtFQURGO0VBSUE7SUFDRSxpQkFBQTtFQUZGO0FBQ0Y7QUFLQTtFQUNFO0lBQ0UsZ0JBQUE7RUFIRjtFQU1BO0lBQ0UsaUJBQUE7RUFKRjtBQUNGO0FBT0E7RUFDRTtJQUNFLFFBQUE7SUFDQSxVQUFBO0VBTEY7RUFRQTtJQUNFLGlCQUFBO0lBQ0EsZ0JBQUE7RUFORjtFQVNBO0lBQ0UseUJBQUE7RUFQRjtFQVVBO0lBQ0UseURBQUE7SUFDQSxxQ0FBQTtJQUNBLGVBQUE7SUFDQSxnRUFBQTtJQUNBLFlBQUE7RUFSRjtFQVdBO0lBQ0UsZUFBQTtJQUNBLGNBQUE7RUFURjtFQVlBO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUFWRjtFQWFBO0lBQ0UsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtFQVhGO0VBY0E7SUFDRSxvQkFBQTtJQUNBLDRCQUFBO0VBWkY7RUFlQTtJQUNJLFdBQUE7SUFDQSxnQkFBQTtFQWJKO0VBZ0JBO0lBQ0UsaUJBQUE7SUFDQSwwSEFBQTtFQWRGO0VBaUJBO0lBQ0UsY0FBQTtFQWZGO0VBa0JBO0lBQ0UsYUFBQTtFQWhCRjtFQW1CQTtJQUNFLGVBQUE7RUFqQkY7RUFvQkE7SUFDRSxZQUFBO0lBQ0EsVUFBQTtJQUNBLFFBQUE7SUFDQSxvQkFBQTtJQUVBLHlCQUFBO0lBQ0EsZUFBQTtJQUNBLDZCQUFBO0lBQ0EsK0JBQUE7RUFuQkY7RUFzQkE7SUFDRSxjQUFBO0VBcEJGO0VBdUJBO0lBQ0UsUUFBQTtFQXJCRjtFQXdCQTtJQUNFLFNBQUE7RUF0QkY7RUF5QkE7SUFDRSxnQkFBQTtFQXZCRjtBQUNGO0FBMEJBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUF4QkY7O0FBMkJBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQ0FBQTtFQUNBLHdEQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQXhCRjs7QUEyQkE7RUFDRSxtQkFBQTtBQXhCRjs7QUEyQkE7RUFDRSw4QkFBQTtBQXhCRjs7QUEyQkE7RUFDRSw4QkFBQTtFQUNBLHFFQUFBO0VBQ0EsY0FBQTtBQXhCRjs7QUEyQkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBeEJGOztBQTJCQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUF4QkY7O0FBMkJBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQXhCRjs7QUEyQkE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQXhCRjs7QUEyQkE7RUFDRSxXQUFBO0VBQ0EsOEdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7QUF4QkY7O0FBMkJBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlEQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsdUNBQUE7QUF4QkY7O0FBMkJBO0VBQ0UsVUFBQTtBQXhCRjs7QUEyQkE7RUFDRSxvQ0FBQTtBQXhCRjs7QUEyQkE7RUFDRSxhQUFBO0FBeEJGOztBQTJCQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQXhCRjs7QUEyQkE7RUFDRSxZQUFBO0FBeEJGOztBQTJCQTtFQUNFLGFBQUE7QUF4QkY7O0FBMkJBO0VBQ0UsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsdUhBQUE7RUFDQSw0REFBQTtBQXhCRjs7QUEyQkE7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQXhCRjs7QUEyQkE7RUFDRSxpQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBS0Esb0NBQUE7QUF6QkY7O0FBNEJBO0VBQ0Usa0JBQUE7QUF6QkY7O0FBNkJBO0VBR0UsMENBQUE7RUFDQSxnQ0FBQTtBQTFCRjs7QUE2QkE7RUFDRSxRQUFBO0FBMUJGOztBQThCQTtFQUNFLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBM0JGOztBQStCQSwrQkFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNDQUFBO0FBNUJGOztBQStCQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLGlDQUFBO0VBQ0EsbURBQUE7RUFFQSxzS0FBQTtFQUlBLCtCQUFBO0FBL0JGOztBQWtDQTs7RUFFRSxzQkFBQTtBQS9CRjtBQXlDQTtFQUNFO0lBRUUsd0JBQUE7RUFoQ0Y7QUFDRjtBQXlDQTtFQUNFO0lBQUksVUFBQTtFQTNCSjtFQTRCQTtJQUFLLFVBQUE7RUF6Qkw7RUEwQkE7SUFBTSxVQUFBO0VBdkJOO0FBQ0Y7QUF5QkEsNkJBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTIwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDIwcHgpIHtcclxuICBoZWFkZXIgLnNwZWFrZXItaW5kZXgge1xyXG4gICAgbWFyZ2luLXRvcDogNzVweDtcclxuICB9XHJcblxyXG4gIGhlYWRlciAuc3BlYWtlci1jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTcwcHgpIGFuZCAobWF4LXdpZHRoOiAxMTE5cHgpIHtcclxuICBoZWFkZXIgLnNwZWFrZXItaW5kZXgge1xyXG4gICAgbWFyZ2luLXRvcDogNzBweDtcclxuICB9XHJcblxyXG4gIGhlYWRlciAuc3BlYWtlci1jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IC01NXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzUxcHgpIGFuZCAobWF4LXdpZHRoOiA5NjlweCkge1xyXG4gIGhlYWRlciAuc3BlYWtlci1pbmRleCB7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIH1cclxuXHJcbiAgaGVhZGVyIC5zcGVha2VyLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogLTY1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xyXG4gIGhlYWRlciAubGFuZ3VhZ2Utc2VsZWN0aW9uIHtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgcmlnaHQ6IDdweDtcclxuICB9XHJcblxyXG4gIGhlYWRlciAubGFuZ3VhZ2Utc2VsZWN0aW9uIGJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDEwLjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgfVxyXG5cclxuICAjaGFtYnVyZ2VyLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgI21lbnViYXIub3BlbiB7XHJcbiAgICAvKiBUaGlzIHRyYXNmb3JtIG1vdmVzIHRoZSBkcmF3ZXIgYmFjayBpbnRvIHRoZSBjYW52YXMuICovXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IHVuc2V0O1xyXG4gICAgLyogRml4IHRoZSBzaWRlIG1lbnUgdG8gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIHNjcmVlbiB3aGVuIG9wZW4gKi9cclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIGhlYWRlciAudWxtZW51IGxpIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgZGl2IG5hdiB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuXHJcbiAgbmF2IC51bG1lbnUge1xyXG4gICAgaGVpZ2h0OiAxNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgaGVhZGVyIC5yaW5nIHtcclxuICAgIHRvcDogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE3cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGJvZHkgI2xvZ28ge1xyXG4gICAgICB3aWR0aDogODVweDtcclxuICAgICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICB9XHJcblxyXG4gIC51bG1lbnUge1xyXG4gICAgdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzQwZGVnLCByZ2IoMjM4IDIwNSAxNTggLyA1NSUpIDEzJSwgcmdiKDI0NSAyMDYgMTQwIC8gODklKSA1MSUsICNmNWNlOGMgMTAwJSkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIG5hdiAjY2xvc2UtYnVyZ2VyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLnVsbWVudSBsaSBhIHtcclxuICAgIHBhZGRpbmc6IDE4cHg7XHJcbiAgfVxyXG5cclxuICB1bCAubGluZXdzIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICB9XHJcblxyXG4gIGhlYWRlciAjbWVudWJhciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDAwMDAwMDAwMDtcclxuXHJcbiAgICAvKiBIaWRlIG1lbnUgb2ZmIHNjcmVlbiAqL1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTA2JSwgMCk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xyXG4gIH1cclxuXHJcbiAgaGVhZGVyICNoYW1idXJnZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICBtYWluIC5wYW5lbGNsYXNzIHtcclxuICAgIHRvcDogMTMlO1xyXG4gIH1cclxuXHJcbiAgbWFpbiB2aWRlbyB7XHJcbiAgICB0b3A6IDc1cHg7XHJcbiAgfVxyXG5cclxuICBib2R5IC5wYW5lbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmxhbmd1YWdlLXNlbGVjdGlvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgcmlnaHQ6IDExcHg7XHJcbiAgdG9wOiA3cHg7XHJcbn1cclxuXHJcbi5sYW5ndWFnZS1zZWxlY3Rpb24gYnV0dG9uIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZiZDM4ZjtcclxuICBjb2xvcjogIzVkMGM5NztcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDVweCAxMnB4IDNweCAxMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNvbWZvcnRhYVwiLCBjdXJzaXZlO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjZweCAwcHggIzAwMDAwMDg3O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLW91dDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmxhbmd1YWdlLXNlbGVjdGlvbiBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmMGM3ZmY7XHJcblxyXG59XHJcbi5sYW5ndWFnZS1zZWxlY3Rpb24gYnV0dG9uOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogI2Y0ZTZmOSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VsZWN0ZWQtbGFuZyB7XHJcbiAgYmFja2dyb3VuZDogI2ZlZTRmZCAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjZweCAwcHggIzQ5M2EwNzg3ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5zcGVha2VyIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNwZWFrZXItaW5kZXgge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBtYXJnaW4tdG9wOiA4NXB4O1xyXG59XHJcblxyXG4uc3BlYWtlci1jb250ZW50IHtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogLTM1cHg7XHJcbn1cclxuXHJcbiNoYW1idXJnZXItY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGhlaWdodDogNTNweDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIHotaW5kZXg6IDQ7XHJcbn1cclxuXHJcbiNoYW1idXJnZXItY29udGFpbmVyOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgI2ZmY2E3ZSA1JSwgcmdiYSgyNTUsIDIwMiwgMTI2LCAwLjgxKSA3MCUsIHJnYmEoMjU1LCAyNTMsIDIyOCwgMC41OCkgMTQwJSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1M3B4O1xyXG4gIHotaW5kZXg6IDQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbiNoYW1idXJnZXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogNTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDI4cHg7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB3aWR0aDogNTNweDtcclxuICBoZWlnaHQ6IDUzcHg7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmUzYjk4YzQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAwcHggIzZlM2I5ODtcclxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbiNoYW1idXJnZXIub3BlbiB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuI2hhbWJ1cmdlcjpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCAjZmVlNGZkO1xyXG59XHJcblxyXG4jaGFtYnVyZ2VyOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4jY2xvc2UtYnVyZ2VyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGNvbG9yOiAjODIwM2E5O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgZm9udC1zaXplOiA0dmg7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbiAgcGFkZGluZy10b3A6IDIzcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbiNjbG9zZS1idXJnZXI6aG92ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2Nsb3NlLWJ1cmdlcjpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnVsbWVudSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgdG9wOiAxN3B4O1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbi10b3A6IDI3cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDAgMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwyMDIsMTI2KTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCByZ2JhKDI1NSwgMjAyLCAxMjYsIDAuNDU3NDg3MjE4NSkgMTMlLCByZ2IoMjQ1IDIwNiAxNDAgLyA3NiUpIDUxJSwgI2Y1Y2U4YyAxMDAlKTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDIzcHggLTVweCAjMTExMTExOGM7XHJcbn1cclxuXHJcbi51bG1lbnUgbGkge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuLnVsbWVudSBhIHtcclxuICBmb250LWZhbWlseTogXCJDb21mb3J0YWFcIiwgY3Vyc2l2ZTtcclxuICBjb2xvcjogIzc1M2Q4ZjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMnMgZWFzZS1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4ycyBlYXNlLW91dDtcclxuICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4ycyBlYXNlLW91dDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4ycyBlYXNlLW91dDtcclxufVxyXG5cclxubGkgYSB7XHJcbiAgcGFkZGluZzogMTFweCAyMnB4O1xyXG5cclxufVxyXG5cclxubGkgYTpob3ZlciB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDIwcHggNXB4ICNmY2UwYzE7XHJcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDIwcHggNXB4ICNmY2UwYzE7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAyMHB4IDVweCAjZmNlMGMxO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4jbWVudWJhciB7XHJcbiAgdG9wOiAwcHg7XHJcbn1cclxuXHJcblxyXG4jbG9nbyB7XHJcbiAgbWF4LXdpZHRoOiAxMDBweDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDMwcHggMHB4ICM2MTQ5NTU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcblxyXG4vKiBTdGFydCBvZiBsb2FkaW5nIGFuaW1hdGlvbiAqL1xyXG4ucmluZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDg7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdG9wOiA4cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEuNSU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDM1cHggLTEwcHggIzZlM2I5ODtcclxufVxyXG5cclxuLnJpbmc6OmJlZm9yZSB7XHJcbiAgb3BhY2l0eTogMDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IC0yO1xyXG4gIGxlZnQ6IC01MCU7XHJcbiAgdG9wOiAtNTAlO1xyXG4gIHdpZHRoOiAyMDAlO1xyXG4gIGhlaWdodDogMjAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmUzYjk4O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA1MCUgNTAlLCA1MCUgNTAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCM2ZTNiOTgpLCB0bygjNmUzYjk4KSksIC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20obWVkaXVtcHVycGxlKSwgdG8obWVkaXVtcHVycGxlKSksIC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oIzNkNDE4ZCksIHRvKCMzZDQxOGQpKSwgLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjOTljNGYxKSwgdG8oIzk5YzRmMSkpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjNmUzYjk4LCAjNmUzYjk4KSwgbGluZWFyLWdyYWRpZW50KG1lZGl1bXB1cnBsZSwgbWVkaXVtcHVycGxlKSwgbGluZWFyLWdyYWRpZW50KCMzZDQxOGQsICMzZDQxOGQpLCBsaW5lYXItZ3JhZGllbnQoIzk5YzRmMSwgIzk5YzRmMSk7XHJcblxyXG4gIC8vIENvbWJpbmUgdGhlIHJvdGF0ZSB3aXRoIHRoZSBmYWRlLW91dCBhbmltYXRpb24uXHJcbiAgLy8gYW5pbWF0aW9uOiByb3RhdGUgNHMsIGZhZGVPdXQgNnM7XHJcbiAgYW5pbWF0aW9uOiByb3RhdGUgMC45cywgZmFkZSAxcztcclxufVxyXG5cclxuKixcclxuKjo6YmVmb3JlIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4vLyBSb3RhdGUgdGhlIHJpbmcgYW5pbWF0aW9uLlxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlIHtcclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMXR1cm4pO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMXR1cm4pO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDF0dXJuKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDF0dXJuKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEZhZGUgb3V0IHRoZSByaW5nIGFuaW1hdGlvbi5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUge1xyXG4gIDAlIHtvcGFjaXR5OiAwO31cclxuICA1MCUge29wYWNpdHk6IDE7fVxyXG4gIDEwMCUge29wYWNpdHk6IDA7fVxyXG59XHJcbkBrZXlmcmFtZXMgZmFkZSB7XHJcbiAgMCUge29wYWNpdHk6IDA7fVxyXG4gIDUwJSB7b3BhY2l0eTogMTt9XHJcbiAgMTAwJSB7b3BhY2l0eTogMDt9XHJcbn1cclxuXHJcbi8qIEVuZCBvZiBsb2FkaW5nIGFuaW1hdGlvbiAqL1xyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
}));

/***/ }),

/***/ 7218:
/*!**********************************************************!*\
  !*** ./src/app/pages/about-page/about-page.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageComponent": () => (/* binding */ AboutPageComponent)
/* harmony export */ });
/* harmony import */ var D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 8699);




class AboutPageComponent {
  constructor() {}
  ngOnInit() {}
  ngAfterViewInit() {
    // @ts-ignore
    twttr.widgets.load();
  }
}
(0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AboutPageComponent, "\u0275fac", function AboutPageComponent_Factory(t) {
  return new (t || AboutPageComponent)();
});
(0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AboutPageComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AboutPageComponent,
  selectors: [["app-about-page"]],
  decls: 116,
  vars: 52,
  consts: [[1, "page-container"], [1, "panel"], [1, "inner-panel"], [1, "lofi-header"], [1, "notice"], ["href", "https://discord.gg/3McA7S8"], [1, "panel", "yellow-panel"], ["href", "https://www.messenger.com/t/LoFi.gr"], [1, "team-members"], ["href", "https://open.spotify.com/artist/1UUfEEstgd64AnExToS403"], ["src", "../../../assets/images/team/neoplasma.jpg", "alt", "team member neoplasma", 1, "member-photo", "images"], [1, "member-name"], ["href", "http://nikitas.io"], ["src", "../../../assets/images/team/nikitas.jpg", "alt", "team member nikitas", 1, "member-photo", "images"], ["href", "https://www.instagram.com/iotakos/"], ["src", "../../../assets/images/team/iotakos.jpg", "alt", "team member iotakos", 1, "member-photo", "images"], ["href", "https://open.spotify.com/artist/4ZguwlmrdElUZaO36dRTbn"], ["src", "../../../assets/images/team/ondivil.jpg", "alt", "team ondi vil", 1, "member-photo", "images"], ["href", "https://www.instagram.com/mati0.10/"], ["src", "../../../assets/images/team/mati.jpg", "alt", "team member mati", 1, "member-photo", "images"], ["src", "../../../assets/images/team/member.png", "alt", "team member photo", 1, "member-photo", "images"], ["id", "email", "href", "mailto:lofi.greece@gmail.com"], [1, "inner-panel", "twitter-panel"], ["data-lang", "el", "data-width", "833", "data-height", "440", "data-dnt", "true", "data-theme", "light", "href", "https://twitter.com/LofiGr?ref_src=twsrc%5Etfw", 1, "twitter-timeline"], [1, "panel", "purple-panel"]],
  template: function AboutPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "article", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6)(13, "div", 2)(14, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "article", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " \uD83D\uDE0A ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 8)(26, "figure")(27, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "figcaption")(30, "h3", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Neoplasma");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "music");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "figure")(35, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "figcaption")(38, "h3", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Nikitas I/O");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "software / marketing");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "figure")(43, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "figcaption")(46, "h3", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Iotakos");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "videography");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "figure")(51, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "img", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "figcaption")(54, "h3", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Ondi Vil");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "music");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 8)(59, "figure")(60, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "figcaption")(63, "h3", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Mati");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "illustration");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "figure")(68, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "figcaption")(71, "h3", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](73, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](75, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 1)(78, "div", 2)(79, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](81, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "article", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](84, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "lofi.greece@gmail.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 22)(88, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](90, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](93, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Tweets by LofiGr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 24)(97, "div", 2)(98, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](100, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "article", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](103, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 6)(105, "div", 2)(106, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](108, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "article", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](111, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "br")(113, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](115, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@simpleFadeAnimation", "in");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 18, "ABOUT.HEADERS.LABEL"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 20, "ABOUT.CONTENT.LABEL"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 22, "ABOUT.CONTENT.DISCORD"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 24, "ABOUT.HEADERS.TEAM"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 26, "ABOUT.CONTENT.TEAM"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 28, "ABOUT.CONTENT.CHAT"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](51);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](73, 30, "ABOUT.CONTENT.YOU"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](75, 32, "ABOUT.CONTENT.TALENT"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](81, 34, "ABOUT.HEADERS.CONTACT"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](84, 36, "ABOUT.CONTENT.CONTACT"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](90, 38, "ABOUT.HEADERS.TWEET"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](93, 40, "ABOUT.CONTENT.TWEET"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](100, 42, "ABOUT.HEADERS.DEFINITION"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](103, 44, "ABOUT.CONTENT.DEFINITION"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](108, 46, "ABOUT.HEADERS.CORPORATE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](111, 48, "ABOUT.CONTENT.CORPORATE"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](115, 50, "ABOUT.CONTENT.GEMI"), " ");
    }
  },
  dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
  styles: [".twitter-panel[_ngcontent-%COMP%] {\n  background: white;\n  margin-top: 25px;\n  margin-bottom: 25px;\n  width: 95%;\n}\n\n.purple-panel[_ngcontent-%COMP%] {\n  background-color: rgba(174, 23, 112, 0.25);\n  padding-bottom: 20px;\n  margin-bottom: -20px;\n}\n\n.yellow-panel[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  background-color: rgba(255, 202, 126, 0.7);\n  padding-bottom: 25px;\n}\n\n#email[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 5px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.twitter-panel[_ngcontent-%COMP%]   .lofi-header[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  margin-bottom: 5px;\n}\n\n.twitter-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed black;\n  padding-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYWJvdXQtcGFnZS9hYm91dC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsMENBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLDBDQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBQTtFQUNBLG9CQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIudHdpdHRlci1wYW5lbHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgd2lkdGg6IDk1JTtcclxufVxyXG5cclxuLnB1cnBsZS1wYW5lbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NCAyMyAxMTIgLyAyNSUpO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IC0yMHB4O1xyXG59XHJcblxyXG4ueWVsbG93LXBhbmVsIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMDIsIDEyNiwgMC43KTtcclxuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuI2VtYWlsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udHdpdHRlci1wYW5lbCAubG9maS1oZWFkZXIge1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnR3aXR0ZXItcGFuZWwgcCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBibGFjaztcclxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  data: {
    animation: [
    // the fade-in/fade-out animation.
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('simpleFadeAnimation', [
    // the "in" style determines the "resting" state of the element when it is visible.
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)('in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
      opacity: 1
    })),
    // fade in when created. this could also be written as transition('void => *')
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
      opacity: 0
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)(800)]),
    // fade out when destroyed. this could also be written as transition('void => *')
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)(':leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)(800, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
      opacity: 0
    })))])]
  }
}));

/***/ }),

/***/ 4762:
/*!**************************************************************!*\
  !*** ./src/app/pages/artists-page/artists-page.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArtistsPageComponent": () => (/* binding */ ArtistsPageComponent)
/* harmony export */ });
/* harmony import */ var D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 8699);





function ArtistsPageComponent_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ArtistsPageComponent_button_15_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.loadMore());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "ARTISTS.BUTTONS.LOAD-MORE"));
  }
}
class ArtistsPageComponent {
  constructor() {
    (0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "artistIDs", ['4ZguwlmrdElUZaO36dRTbn', '1UUfEEstgd64AnExToS403', '2vBwAFEqxBRaAvR6F69jXy', '03BWUMpkLVCRUZY8g7C4kF', '2yTDt06lsG7dGqJuCbR88I', '6evg3DBRRbN4YNlzbeS6VN', '0Ql2lWx1D8fNVnaW9AM8td', '47URGV6M9iPbmVXkucAQWk', '3PLqmSa29zyLdTGINzLqCZ', '1aIxUlGmHt0gWTsHWz9wNC', '33FKoUeAEFuzVHGBd9IhcL', '4CSOdm2yCuB71TxCfV105e', '4agrt7irb8WmdQHjACTT6t', '3tbv8PcwIqfWdsgdGcWgdY', '0MrN8mIBO80rDPdOiNYPIR', '6MdmDH4ws2thbEQsYGUL7g', '6oiMfPHT1vKJjbWvqMNAvU', '1N2neBJzN922SxIO8RG7NA', '1wQ0eF0v7bU4P3m3bFRRd5' // 19. Malenus
    ]);
    // Λείπουν μόνο fukuro και carriers.
    // The artist container in the DOM.
    (0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "artistContainer", void 0);
    // Current artist.
    (0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "currentIndex", 0);
    // Increment the artists by this amount.
    (0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "increment", 4);
    // Flag to check if all artists have been appended.
    (0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "noMore", false);
  }
  ngOnInit() {
    // Shuffle the artist IDs.
    this.artistIDs = this.shuffle(this.artistIDs);
    // Get the artist container where all new artists will be appended.
    this.artistContainer = document.getElementById('artist-container');
    // Load the first arists.
    this.loadMore();
  }
  /**
   * Shuffle the artist IDs.
   * @param array The array to shuffle.
   * @returns A shuffled array.
   */
  shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }
  /**
   * Load more artists.
   */
  loadMore() {
    // Add more artists to the DOM.
    for (let index = 0; index < this.increment; index++) {
      // Check if all artist have been appended.
      if (this.noMore == false) {
        // Check if the index has surpased the artist IDs array length.
        if (this.currentIndex + index < this.artistIDs.length) {
          // Get the ID of the next artist.
          const artistID = this.artistIDs[this.currentIndex + index];
          // Append the new artist.
          this.appendArtist(artistID);
        } else {
          // All artist have been appended.
          this.noMore = true;
        }
      }
    }
    // Increment the current index by the number of artists that were added.
    this.currentIndex += this.increment;
    // Check if we've reached the end of the artistIDs array.
    if (this.currentIndex == this.artistIDs.length) {
      this.noMore = true;
    }
  }
  /**
   * Append a single artist to the DOM.
   * @param artistID
   */
  appendArtist(artistID) {
    // Create an artist element.
    let artist = `
      <iframe src="https://open.spotify.com/embed/artist/${artistID}?utm_source=generator" style="border-radius: 12px; margin-bottom: 30px;" width="100%" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    `;
    // Add the new artist to the arist container.
    this.artistContainer.insertAdjacentHTML('beforeend', artist);
  }
}
(0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ArtistsPageComponent, "\u0275fac", function ArtistsPageComponent_Factory(t) {
  return new (t || ArtistsPageComponent)();
});
(0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ArtistsPageComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ArtistsPageComponent,
  selectors: [["app-artists-page"]],
  decls: 16,
  vars: 11,
  consts: [[1, "page-container"], [1, "panel"], [1, "inner-panel"], [1, "lofi-header"], [1, "notice"], ["id", "artist-container"], ["class", "special-button bn24", 3, "click", 4, "ngIf"], [1, "special-button", "bn24", 3, "click"]],
  template: function ArtistsPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "article", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h4")(10, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " \uD83D\uDC47");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ArtistsPageComponent_button_15_Template, 3, 3, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@simpleFadeAnimation", "in");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 5, "ARTISTS.HEADERS.ARTISTS"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 7, "ARTISTS.CONTENT.ARTISTS"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 9, "ARTISTS.CONTENT.RANDOM"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.noMore);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
  styles: ["h4[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  margin-bottom: 35px;\n}\n\n.special-button.bn24[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  background-image: linear-gradient(to right, #6253e1, #852d91, #8f57fc, #e7639f);\n  box-shadow: 0 4px 15px 0 rgba(126, 52, 161, 0.75);\n  padding-bottom: 2px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYXJ0aXN0cy1wYWdlL2FydGlzdHMtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSwrRUFBQTtFQUNBLGlEQUFBO0VBQ0EsbUJBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImg0IHtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbn1cclxuXHJcbi5zcGVjaWFsLWJ1dHRvbi5ibjI0IHtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNjI1M2UxLCAjODUyZDkxLCAjOGY1N2ZjLCAjZTc2MzlmKTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IDAgcmdiYSgxMjYsIDUyLCAxNjEsIDAuNzUpO1xyXG4gIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  data: {
    animation: [
    // the fade-in/fade-out animation.
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('simpleFadeAnimation', [
    // the "in" style determines the "resting" state of the element when it is visible.
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
      opacity: 1
    })),
    // fade in when created. this could also be written as transition('void => *')
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
      opacity: 0
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(800)]),
    // fade out when destroyed. this could also be written as transition('void => *')
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)(':leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(800, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
      opacity: 0
    })))])]
  }
}));

/***/ }),

/***/ 8043:
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageComponent": () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _layout_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layout/carousel/carousel.component */ 3259);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 8699);






class HomePageComponent {
  constructor() {}
  ngOnInit() {}
}
(0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(HomePageComponent, "\u0275fac", function HomePageComponent_Factory(t) {
  return new (t || HomePageComponent)();
});
(0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(HomePageComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HomePageComponent,
  selectors: [["app-home-page"]],
  decls: 60,
  vars: 34,
  consts: [["id", "intro-panel"], ["id", "header", 1, "after-carousel"], [1, "panel"], [1, "inner-panel"], [1, "lofi-header"], [1, "notice"], ["routerLink", "/releases"], [1, "special-button", "bn24"], ["id", "album-cover", "src", "../../../assets/images/duskhorizon.jpg", "alt", "Dusk Horizon Cover Art"], [1, "panel", "yellow-panel"], ["title", "Discord Server", "href", "https://discord.gg/3McA7S8"], [1, "special-button", "bn25"], ["src", "https://discordapp.com/widget?id=616589672050589698&theme=light", "width", "90%", "height", "350", "allowtransparency", "true", "frameborder", "0"], ["id", "header"], [1, "panel", "album-panel"], ["id", "album-cover", "src", "../../../assets/images/aphrodite.jpg", "alt", "Aphrodite's Memories Cover Art"], ["width", "560", "height", "315", "src", "https://www.youtube.com/embed/videoseries?list=PLUelkIwR8-aEKzTFEG5wY0UWXtfHyB5st", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-../../../assets; gyroscope; picture-in-picture", "allowfullscreen", "", 1, "youtube-widget"]],
  template: function HomePageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ngbd-carousel-navigation");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h1", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "article", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 6)(13, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "br")(17, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 9)(19, "div", 3)(20, "h1", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "article", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "main")(28, "div")(29, "a", 10)(30, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](32, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "iframe", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 13)(35, "div", 14)(36, "div", 3)(37, "h1", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](39, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "article", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](42, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "a", 6)(45, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](47, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "br")(49, "img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 13)(51, "div", 2)(52, "div", 3)(53, "h1", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](55, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "article", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](58, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "iframe", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@simpleFadeAnimation", "in");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 12, "HOME.HEADERS.RELEASE-2"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 14, "HOME.CONTENT.RELEASE-2"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 16, "HOME.BUTTONS.LISTEN"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 18, "HOME.HEADERS.COMMUNITY"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 20, "HOME.CONTENT.COMMUNITY"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](32, 22, "HOME.BUTTONS.JOIN"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](39, 24, "HOME.HEADERS.RELEASE-1"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](42, 26, "HOME.CONTENT.RELEASE-1"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](47, 28, "HOME.BUTTONS.LISTEN"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](55, 30, "HOME.HEADERS.RADIO"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](58, 32, "HOME.CONTENT.RADIO"), " ");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _layout_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__.CarouselComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
  styles: [".after-carousel[_ngcontent-%COMP%] {\n  margin-top: 100vh;\n}\n\n#album-cover[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 20px;\n  max-width: 500px;\n}\n\n.discord-header[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.album-panel[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom right, rgba(240, 46, 12, 0.4196078431), rgba(255, 202, 126, 0.4588235294));\n}\n\n.yellow-panel[_ngcontent-%COMP%] {\n  background: #fac67d;\n}\n\n.emoji-link[_ngcontent-%COMP%] {\n  font-size: 70px;\n  margin-top: 47px;\n  margin-bottom: 52px;\n  cursor: pointer;\n  display: block;\n}\n\n#fb-share[_ngcontent-%COMP%] {\n  display: inline;\n  font-weight: bold;\n}\n\nspan[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n#submit-mixtape[_ngcontent-%COMP%] {\n  width: 90px;\n  border-radius: 7px;\n  margin-top: 12px;\n  cursor: pointer;\n}\n\n.special-button.bn24[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, #6253e1, #852d91, #a3a1ff, #d7a2d3);\n  box-shadow: 0 4px 15px 0 rgba(126, 52, 161, 0.75);\n}\n\n.special-button.bn25[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 25px;\n  background-image: linear-gradient(to right, #a7a4ff, #5563b8, #3b14b9, #a510be);\n  box-shadow: 0 4px 15px 0 rgba(52, 55, 161, 0.75);\n  width: 180px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUdBO0VBQ0UsZ0hBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUFhLGFBQUE7QUFDYjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUNBO0VBQ0UsK0VBQUE7RUFPQSxpREFBQTtBQUpGOztBQU9BO0VBQ0UsZUFBQTtFQUNFLG1CQUFBO0VBQ0YsK0VBQUE7RUFDQSxnREFBQTtFQUNBLFlBQUE7QUFKRiIsInNvdXJjZXNDb250ZW50IjpbIi5hZnRlci1jYXJvdXNlbCB7XHJcbiAgbWFyZ2luLXRvcDogMTAwdmg7XHJcbn1cclxuXHJcbiNhbGJ1bS1jb3ZlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG4uZGlzY29yZC1oZWFkZXIge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuXHJcbi5hbGJ1bS1wYW5lbCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgI2YwMmUwYzZiLCAjZmZjYTdlNzUpO1xyXG59XHJcblxyXG4ueWVsbG93LXBhbmVsIHtcclxuICBiYWNrZ3JvdW5kOiAjZmFjNjdkO1xyXG59XHJcblxyXG4uZW1vamktbGlua3tcclxuICBmb250LXNpemU6IDcwcHg7XHJcbiAgbWFyZ2luLXRvcDogNDdweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuI2ZiLXNoYXJle1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuc3Bhbjpmb2N1cyB7IG91dGxpbmU6IG5vbmU7IH1cclxuXHJcbiNzdWJtaXQtbWl4dGFwZXtcclxuICB3aWR0aDogOTBweDtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgbWFyZ2luLXRvcDogMTJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zcGVjaWFsLWJ1dHRvbi5ibjI0IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIHRvIHJpZ2h0LFxyXG4gICAgICAjNjI1M2UxLFxyXG4gICAgICAjODUyZDkxLFxyXG4gICAgICAjYTNhMWZmLFxyXG4gICAgICAjZDdhMmQzXHJcbiAgICApO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDEyNiwgNTIsIDE2MSwgMC43NSk7XHJcbn1cclxuXHJcbi5zcGVjaWFsLWJ1dHRvbi5ibjI1IHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2E3YTRmZiwgIzU1NjNiOCwgIzNiMTRiOSwgI2E1MTBiZSk7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCAwIHJnYig1MiA1NSAxNjEgLyA3NSUpO1xyXG4gIHdpZHRoOiAxODBweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  data: {
    animation: [
    // the fade-in/fade-out animation.
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('simpleFadeAnimation', [
    // the "in" style determines the "resting" state of the element when it is visible.
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
      opacity: 1
    })),
    // fade in when created. this could also be written as transition('void => *')
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
      opacity: 0
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)(800)]),
    // fade out when destroyed. this could also be written as transition('void => *')
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)(':leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)(800, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
      opacity: 0
    })))])]
  }
}));

/***/ }),

/***/ 8558:
/*!**********************************************************!*\
  !*** ./src/app/pages/label-page/label-page.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelPageComponent": () => (/* binding */ LabelPageComponent)
/* harmony export */ });
/* harmony import */ var D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 8699);






class LabelPageComponent {
  constructor(router) {
    (0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "router", void 0);
    //Play the sound.
    (0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "soundFlag", false);
    (0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "audioTrack2", void 0);
    (0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "audioTrack1", void 0);
    this.router = router;
    // Get sound effects for this page.
    this.audioTrack2 = new Audio('../../../assets/audio/duskhorizon-sample.mp3');
    this.audioTrack2.volume = 0.5;
    this.audioTrack1 = new Audio('../../../assets/audio/aphrodite-sample.mp3');
    this.audioTrack1.volume = 0.5;
  }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (!(event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.audioTrack2.pause();
    this.audioTrack1.pause();
  }
  sound2() {
    let audioImage1 = document.getElementsByClassName('toggle-sound')[1];
    let audioImage2 = document.getElementsByClassName('toggle-sound')[0];
    if (this.audioTrack2.paused) {
      // Play the second track.
      this.audioTrack2.play();
      // Change the audio image of the 2nd track.
      audioImage2.setAttribute('src', '../../../assets/images/icons/pause.png');
      if (!this.audioTrack2.paused) {
        // Pause the first track.
        this.audioTrack1.pause();
        // Change the audio image of the 1st track.
        audioImage1.setAttribute('src', '../../../assets/images/icons/play.png');
      }
    } else {
      this.audioTrack2.pause();
      audioImage2.setAttribute('src', '../../../assets/images/icons/play.png');
    }
    this.audioTrack2.onended = function () {
      audioImage2.setAttribute('src', '../../../assets/images/icons/play.png');
    };
  }
  sound1() {
    let audioImage1 = document.getElementsByClassName('toggle-sound')[1];
    let audioImage2 = document.getElementsByClassName('toggle-sound')[0];
    if (this.audioTrack1.paused) {
      // Play the first track.
      this.audioTrack1.play();
      // Change the audio image.
      audioImage1.setAttribute('src', '../../../assets/images/icons/pause.png');
      if (!this.audioTrack2.paused) {
        // Pause the second track.
        this.audioTrack2.pause();
        // Change the audio image of the 1st track.
        audioImage2.setAttribute('src', '../../../assets/images/icons/play.png');
      }
    } else {
      this.audioTrack1.pause();
      audioImage1.setAttribute('src', '../../../assets/images/icons/play.png');
    }
    this.audioTrack1.onended = function () {
      audioImage1.setAttribute('src', '../../../assets/images/icons/play.png');
    };
  }
  toggleSound2() {
    this.sound2();
  }
  toggleSound1() {
    this.sound1();
  }
}
(0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(LabelPageComponent, "\u0275fac", function LabelPageComponent_Factory(t) {
  return new (t || LabelPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
});
(0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(LabelPageComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: LabelPageComponent,
  selectors: [["app-label-page"]],
  decls: 124,
  vars: 67,
  consts: [[1, "page-container"], [1, "panel"], [1, "inner-panel"], [1, "lofi-header"], [1, "notice"], [1, "cover", "cover-2", 3, "click"], ["src", "../../../assets/images/icons/play.png", "alt", "play sample button", 1, "toggle-sound"], [1, "sample"], [1, "bg"], ["href", "https://open.spotify.com/album/7GButMFLBz24hBHB1pKhNP", 1, "platform-link"], [1, "platform"], ["src", "../../../assets/images/platforms/logo-spotify.svg", "alt", "spotify logo", 1, "platform-logo"], [1, "platform-action"], ["href", "https://www.deezer.com/us/album/425921607", 1, "platform-link"], ["src", "../../../assets/images/platforms/logo-deezer.svg", "alt", "deezer logo", 1, "platform-logo"], ["href", "https://music.amazon.com/albums/B0C1H9BF7X", 1, "platform-link"], ["src", "../../../assets/images/platforms/logo-amazonmusic.svg", "alt", "amazon music logo", 1, "platform-logo"], ["href", "https://www.amazon.com/dp/B0C1H9BF7X", 1, "platform-link"], ["src", "../../../assets/images/platforms/logo-amazon.svg", "alt", "amazon logo", 1, "platform-logo"], ["href", "https://music.apple.com/us/album/dusk-horizon/1680664224", 1, "platform-link"], ["src", "../../../assets/images/platforms/logo-applemusic.svg", "alt", "apple music logo", 1, "platform-logo"], ["href", "https://play.anghami.com/album/1037937327?refer=found", 1, "platform-link"], ["src", "../../../assets/images/platforms/logo-anghami.svg", "alt", "anghami logo", 1, "platform-logo"], ["href", "https://lnk.dmsmusic.co/variousartists_duskhorizon/ms-pandora-6", 1, "platform-link"], [1, "platform", "last-platform"], ["src", "../../../assets/images/platforms/logo-pandora.svg", "alt", "pandora logo", 1, "platform-logo"], [1, "cover", "cover-1", 3, "click"], ["href", "https://open.spotify.com/album/1BJuBDisqlZzkPYVYAJzxl", 1, "platform-link"], ["href", "https://www.deezer.com/en/album/305146947", 1, "platform-link"], ["href", "https://music.amazon.com/albums/B09W8LV98Q?tag=fndcmpgns-20", 1, "platform-link"], ["href", "https://www.amazon.com/dp/B09W8LV98Q?tag=fndcmpgns-20", 1, "platform-link"], ["href", "https://music.apple.com/gr/album/aphrodites-memories/1615636083", 1, "platform-link"], ["href", "https://play.anghami.com/album/1027009819?refer=found", 1, "platform-link"], ["href", "https://lnk.dmsmusic.co/variousartists_aphroditesmemories/ms-pandora-5", 1, "platform-link"], [1, "panel", "yellow"], ["src", "https://www.youtube.com/embed/xWEn3OWUHJI", "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 1, "youtube-widget"]],
  template: function LabelPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "article", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ul")(11, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LabelPageComponent_Template_div_click_11_listener() {
        return ctx.toggleSound2();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "li", 8)(17, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "a", 9)(21, "li", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "a", 13)(27, "li", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "img", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](31, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "a", 15)(33, "li", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](37, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "a", 17)(39, "li", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](43, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "a", 19)(45, "li", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](49, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "a", 21)(51, "li", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](55, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "a", 23)(57, "li", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "img", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](61, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "ul")(64, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LabelPageComponent_Template_div_click_64_listener() {
        return ctx.toggleSound1();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](68, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "li", 8)(70, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](72, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "a", 27)(74, "li", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](78, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "a", 28)(80, "li", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "img", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](84, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "a", 29)(86, "li", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](90, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "a", 30)(92, "li", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](93, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](96, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "a", 31)(98, "li", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](102, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "a", 32)(104, "li", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](105, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](108, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "a", 33)(110, "li", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](111, "img", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](114, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "div", 34)(116, "div", 2)(117, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](119, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "article", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](122, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](123, "iframe", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@simpleFadeAnimation", "in");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 23, "RELEASES.HEADERS.LABEL"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 25, "RELEASES.CONTENT.LABEL"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 27, "RELEASES.CONTENT.SAMPLE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 29, "RELEASES.HEADERS.ALBUM-2"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 31, "RELEASES.BUTTONS.LISTEN"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](31, 33, "RELEASES.BUTTONS.LISTEN"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](37, 35, "RELEASES.BUTTONS.LISTEN"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](43, 37, "RELEASES.BUTTONS.BUY"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](49, 39, "RELEASES.BUTTONS.LISTEN"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](55, 41, "RELEASES.BUTTONS.LISTEN"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](61, 43, "RELEASES.BUTTONS.LISTEN"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](68, 45, "RELEASES.CONTENT.SAMPLE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](72, 47, "RELEASES.HEADERS.ALBUM-1"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](78, 49, "RELEASES.BUTTONS.LISTEN"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](84, 51, "RELEASES.BUTTONS.LISTEN"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](90, 53, "RELEASES.BUTTONS.LISTEN"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](96, 55, "RELEASES.BUTTONS.BUY"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](102, 57, "RELEASES.BUTTONS.LISTEN"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](108, 59, "RELEASES.BUTTONS.LISTEN"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](114, 61, "RELEASES.BUTTONS.LISTEN"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](119, 63, "RELEASES.HEADERS.VIDEO-1"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](122, 65, "RELEASES.CONTENT.VIDEO-1"), " ");
    }
  },
  dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
  styles: ["#embed[_ngcontent-%COMP%] {\n  margin-bottom: -5px;\n}\n\n.cover[_ngcontent-%COMP%] {\n  position: relative;\n  background-size: cover;\n  cursor: pointer;\n  width: 100%;\n  padding-bottom: 100%;\n}\n\n.cover-1[_ngcontent-%COMP%] {\n  background-image: url('aphrodite.jpg');\n}\n\n.cover-2[_ngcontent-%COMP%] {\n  background-image: url('duskhorizon.jpg');\n}\n\n.cover[_ngcontent-%COMP%]:hover   .toggle-sound[_ngcontent-%COMP%] {\n  transform: translate(-50%, -50%) scale(1.2);\n  -ms-transform: translate(-50%, -50%) scale(1.2);\n}\n\n.toggle-sound[_ngcontent-%COMP%] {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transition: all 0.2s ease-in-out;\n}\n\n.special-button.bn19[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, #f5ce62, #e43603, #b22b44, #e85a19);\n  box-shadow: 0 4px 15px 0 rgba(229, 66, 10, 0.75);\n}\n\nh4[_ngcontent-%COMP%] {\n  font-size: clamp(10px, 4vw, 22px) !important;\n}\n\nul[_ngcontent-%COMP%] {\n  padding: 0;\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 90%;\n  max-width: 400px;\n  list-style: none;\n  box-shadow: 0px 0px 20px -5px rgba(0, 0, 0, 0.7);\n}\n\n.platform[_ngcontent-%COMP%] {\n  display: flex;\n  background: rgba(255, 255, 255, 0.631372549);\n  border-bottom: 1px solid gray;\n  justify-content: space-between;\n  padding: 10px 0 10px 15px;\n}\n\n.last-platform[_ngcontent-%COMP%] {\n  border-bottom: none !important;\n}\n\n.platform-link[_ngcontent-%COMP%] {\n  color: #1688b3;\n}\n\n.platform-link[_ngcontent-%COMP%]:hover {\n  color: #28389d;\n}\n\n.platform-logo[_ngcontent-%COMP%] {\n  min-width: 120px;\n  max-width: 250px;\n  width: 60%;\n  padding-right: 20%;\n  text-align: right;\n  border-right: 1px solid gray;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.platform-action[_ngcontent-%COMP%] {\n  width: 30%;\n  font-size: clamp(7px, 5vw, 20px);\n  margin: auto;\n}\n\n.bg[_ngcontent-%COMP%] {\n  color: white;\n  width: 100%;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-size: 300% 300%;\n  background-image: linear-gradient(-45deg, #733a5d 0%, #a52b44 25%, #c0505c 51%, #660116 100%);\n  animation: _ngcontent-%COMP%_AnimateBG 10s ease infinite;\n}\n\n@keyframes _ngcontent-%COMP%_AnimateBG {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n.bg[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  font-size: clamp(17px, 5vw, 25px);\n}\n\n.yellow[_ngcontent-%COMP%] {\n  background: rgba(255, 202, 126, 0.7);\n}\n\n.sample[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  color: white;\n  background: rgba(0, 0, 0, 0.831372549);\n  padding: 10px;\n  border-top-left-radius: 10px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbGFiZWwtcGFnZS9sYWJlbC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQ0FBQTtBQUNGOztBQUNBO0VBQ0Usd0NBQUE7QUFFRjs7QUFDQTtFQUNFLDJDQUFBO0VBQ0EsK0NBQUE7QUFFRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEsZ0NBQUE7RUFFQSxnQ0FBQTtBQUFGOztBQUlBO0VBQ0UsK0VBQUE7RUFDQSxnREFBQTtBQURGOztBQUlBO0VBQ0UsNENBQUE7QUFERjs7QUFJQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdEQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsNENBQUE7RUFDQSw2QkFBQTtFQUVBLDhCQUFBO0VBQ0EseUJBQUE7QUFGRjs7QUFLQTtFQUNFLDhCQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0FBRkY7O0FBSUE7RUFDRSxjQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLFVBQUE7RUFFQSxnQ0FBQTtFQUNBLFlBQUE7QUFGRjs7QUFLQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2RkFBQTtFQUNBLHNDQUFBO0FBRkY7O0FBS0E7RUFDRTtJQUFHLDJCQUFBO0VBREg7RUFFQTtJQUFJLDZCQUFBO0VBQ0o7RUFBQTtJQUFLLDJCQUFBO0VBR0w7QUFDRjtBQURBO0VBQ0UsY0FBQTtFQUNBLGlDQUFBO0FBR0Y7O0FBQ0E7RUFDRSxvQ0FBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0FBRUYiLCJzb3VyY2VzQ29udGVudCI6WyIjZW1iZWQge1xyXG4gIG1hcmdpbi1ib3R0b206IC01cHg7XHJcbn1cclxuXHJcbi5jb3ZlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMDAlO1xyXG59XHJcblxyXG4uY292ZXItMSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYXBocm9kaXRlLmpwZyk7XHJcbn1cclxuLmNvdmVyLTIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2R1c2tob3Jpem9uLmpwZyk7XHJcbn1cclxuXHJcbi5jb3Zlcjpob3ZlciAudG9nZ2xlLXNvdW5ke1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEuMik7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEuMik7XHJcblxyXG59XHJcblxyXG4udG9nZ2xlLXNvdW5kIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblxyXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcblxyXG4uc3BlY2lhbC1idXR0b24uYm4xOSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjVjZTYyLCAjZTQzNjAzLCAjYjIyYjQ0LCAjZTg1YTE5KTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IDAgcmdiYSgyMjksIDY2LCAxMCwgMC43NSk7XHJcbn1cclxuXHJcbmg0IHtcclxuICBmb250LXNpemU6IGNsYW1wKDEwcHgsIDR2dywgMjJweCkgIWltcG9ydGFudDtcclxufVxyXG5cclxudWwge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IC01cHggcmdiKDAgMCAwIC8gNzAlKTtcclxufVxyXG5cclxuLnBsYXRmb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmZhMTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcclxuXHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDE1cHg7XHJcbn1cclxuXHJcbi5sYXN0LXBsYXRmb3JtIHtcclxuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wbGF0Zm9ybS1saW5re1xyXG4gIGNvbG9yOiAjMTY4OGIzO1xyXG59XHJcbi5wbGF0Zm9ybS1saW5rOmhvdmVye1xyXG4gIGNvbG9yOiAjMjgzODlkO1xyXG59XHJcblxyXG4ucGxhdGZvcm0tbG9nbyB7XHJcbiAgbWluLXdpZHRoOiAxMjBweDtcclxuICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgcGFkZGluZy1yaWdodDogMjAlO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyYXk7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59XHJcblxyXG4ucGxhdGZvcm0tYWN0aW9uIHtcclxuICB3aWR0aDogMzAlO1xyXG5cclxuICBmb250LXNpemU6IGNsYW1wKDdweCwgNXZ3LCAyMHB4KTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5iZyB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAzMDAlIDMwMCU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzczM2E1ZCAwJSwgI2E1MmI0NCAyNSUsICNjMDUwNWMgNTElLCAjNjYwMTE2IDEwMCUpO1xyXG4gIGFuaW1hdGlvbjogQW5pbWF0ZUJHIDEwcyBlYXNlIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIEFuaW1hdGVCRyB7XHJcbiAgMCV7YmFja2dyb3VuZC1wb3NpdGlvbjowJSA1MCV9XHJcbiAgNTAle2JhY2tncm91bmQtcG9zaXRpb246MTAwJSA1MCV9XHJcbiAgMTAwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAlIDUwJX1cclxufVxyXG5cclxuLmJnIGgxIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBmb250LXNpemU6IGNsYW1wKDE3cHgsIDV2dywgMjVweCk7XHJcbn1cclxuXHJcblxyXG4ueWVsbG93IHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjAyLCAxMjYsIDAuNyk7XHJcbn1cclxuXHJcbi5zYW1wbGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6ICMwMDAwMDBkNDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  data: {
    animation: [
    // the fade-in/fade-out animation.
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('simpleFadeAnimation', [
    // the "in" style determines the "resting" state of the element when it is visible.
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
      opacity: 1
    })),
    // fade in when created. this could also be written as transition('void => *')
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
      opacity: 0
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(800)]),
    // fade out when destroyed. this could also be written as transition('void => *')
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)(':leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(800, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
      opacity: 0
    })))])]
  }
}));

/***/ }),

/***/ 396:
/*!********************************************************!*\
  !*** ./src/app/pages/shop-page/shop-page.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopPageComponent": () => (/* binding */ ShopPageComponent)
/* harmony export */ });
/* harmony import */ var D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class ShopPageComponent {
  constructor() {}
  ngOnInit() {}
}
(0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ShopPageComponent, "\u0275fac", function ShopPageComponent_Factory(t) {
  return new (t || ShopPageComponent)();
});
(0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ShopPageComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ShopPageComponent,
  selectors: [["app-shop-page"]],
  decls: 3,
  vars: 1,
  consts: [["id", "intro-panel"], ["data-href", "https://www.facebook.com/LoFi.gr/", "data-width", "250", "data-layout", "standard", "data-action", "like", "data-size", "large", "data-show-faces", "true", "data-share", "false", 1, "fb-like"]],
  template: function ShopPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " shop-page works! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@simpleFadeAnimation", "in");
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
  data: {
    animation: [
    // the fade-in/fade-out animation.
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('simpleFadeAnimation', [
    // the "in" style determines the "resting" state of the element when it is visible.
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)('in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
      opacity: 1
    })),
    // fade in when created. this could also be written as transition('void => *')
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
      opacity: 0
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)(800)]),
    // fade out when destroyed. this could also be written as transition('void => *')
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(':leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)(800, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
      opacity: 0
    })))])]
  }
}));

/***/ }),

/***/ 8319:
/*!********************************************************************!*\
  !*** ./src/app/pages/submission-page/submission-page.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmissionPageComponent": () => (/* binding */ SubmissionPageComponent)
/* harmony export */ });
/* harmony import */ var D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class SubmissionPageComponent {
  constructor() {}
  ngOnInit() {
    // Scroll to the top of the page.
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - currentScroll / 8);
      }
    })();
  }
}
(0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(SubmissionPageComponent, "\u0275fac", function SubmissionPageComponent_Factory(t) {
  return new (t || SubmissionPageComponent)();
});
(0,D_D_Programs_wamp_www_Angular_Development_Lofi_gr_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(SubmissionPageComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SubmissionPageComponent,
  selectors: [["app-submission-page"]],
  decls: 40,
  vars: 1,
  consts: [["id", "intro-panel"], [1, "panel"], [1, "lofi-header"], [1, "notice"], ["id", "criteria-panel"], [1, "criteria-header"], ["title", "Discord Server", "href", "https://discord.gg/3McA7S8"], ["href", "https://en.wikipedia.org/wiki/Parental_Advisory"], ["id", "submit-letters", "src", "../../../assets/images/tape.gif", "alt", "Submission Mixtape"]],
  template: function SubmissionPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Submit your LoFi content");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "article", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " \u039A\u03AC\u03BD\u03B5 submit \u03C4\u03B7 LoFi \u03C4\u03AD\u03C7\u03BD\u03B7 \u03C3\u03BF\u03C5 \u03B5\u03AF\u03C4\u03B5 \u03B1\u03C5\u03C4\u03AE \u03B5\u03AF\u03BD\u03B1\u03B9 \u03BC\u03BF\u03C5\u03C3\u03B9\u03BA\u03AE \u03B5\u03AF\u03C4\u03B5 digital art \u03BA\u03B1\u03B9 \u03B4\u03CE\u03C3\u03B5 \u03BC\u03B9\u03B1 \u03B5\u03C5\u03BA\u03B1\u03B9\u03C1\u03AF\u03B1 \u03C3\u03C4\u03B7 \u03B4\u03BF\u03C5\u03BB\u03B5\u03B9\u03AC \u03C3\u03BF\u03C5 \u03BD\u03B1 \u03B5\u03BC\u03C6\u03B1\u03BD\u03B9\u03C3\u03C4\u03B5\u03AF \u03C3\u03C4\u03B1 project \u03C4\u03BF\u03C5 Greek LoFi Community. \u039F\u03B9 content curators \u03BC\u03B1\u03C2 \u03B5\u03BB\u03AD\u03B3\u03C7\u03BF\u03C5\u03BD \u03C4\u03B1 submissions \u03BA\u03B1\u03B9 \u03B1\u03BD \u03B7 \u03C5\u03C0\u03BF\u03B2\u03BF\u03BB\u03AE \u03C3\u03BF\u03C5 \u03C4\u03B1\u03B9\u03C1\u03B9\u03AC\u03B6\u03B5\u03B9 \u03C3\u03B5 \u03BA\u03AC\u03C0\u03BF\u03B9\u03BF \u03B1\u03C0\u03CC \u03C4\u03B1 project \u03BC\u03B1\u03C2 \u03CC\u03C0\u03C9\u03C2 \u03C4\u03BF Greek LoFi Radio, \u03BC\u03B5\u03BB\u03BB\u03BF\u03BD\u03C4\u03B9\u03BA\u03AC playlists, video clips, lofi edits \u03AE vlogs \u03C4\u03C9\u03BD live event \u03BC\u03B1\u03C2, \u03B8\u03B1 \u03C3\u03B5 \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03BF\u03C5\u03BC\u03B5 \u03B3\u03B9\u03B1 \u03C4\u03BF artist feature. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u039A\u03C1\u03B9\u03C4\u03AE\u03C1\u03B9\u03B1 \u03A5\u03C0\u03BF\u03B2\u03BF\u03BB\u03AE\u03C2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, ": ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ol")(12, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " \u03A0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03B5\u03AF\u03C3\u03B1\u03B9 \u03BC\u03AD\u03BB\u03BF\u03C2 \u03C3\u03C4\u03BF\u03BD ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Discord Server");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " \u03BC\u03B1\u03C2. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " \u03A0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03B5\u03AF\u03C3\u03B1\u03B9 \u03B1\u03C0\u03CC \u03C4\u03B7\u03BD ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u0395\u03BB\u03BB\u03AC\u03B4\u03B1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " \u03AE \u03C4\u03B7\u03BD ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\u039A\u03CD\u03C0\u03C1\u03BF");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, ". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " \u0397 \u03C5\u03C0\u03BF\u03B2\u03BF\u03BB\u03AE \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u039C\u0397\u039D");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " \u03C0\u03B5\u03C1\u03B9\u03AD\u03C7\u03B5\u03B9 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "explicit \u03C0\u03B5\u03C1\u03B9\u03B5\u03C7\u03CC\u03BC\u03B5\u03BD\u03BF");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, ". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "\u03A6\u03CC\u03C1\u03BC\u03B1 \u03A5\u03C0\u03BF\u03B2\u03BF\u03BB\u03AE\u03C2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, ": ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Submissions comming soon... ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@simpleFadeAnimation", "in");
    }
  },
  styles: [".criteria-header[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: larger;\n}\n\n#criteria-panel[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin-top: 15px;\n  background: rgba(255, 202, 126, 0.7);\n  border-radius: 10px;\n}\n\n#submit-letters[_ngcontent-%COMP%] {\n  width: 88.8%;\n  margin-bottom: 15px;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc3VibWlzc2lvbi1wYWdlL3N1Ym1pc3Npb24tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQUYiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JpdGVyaWEtaGVhZGVye1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG59XHJcblxyXG4jY3JpdGVyaWEtcGFuZWx7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMDIsIDEyNiwgMC43KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5cclxuI3N1Ym1pdC1sZXR0ZXJze1xyXG4gIHdpZHRoOiA4OC44JTtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  data: {
    animation: [
    // the fade-in/fade-out animation.
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('simpleFadeAnimation', [
    // the "in" style determines the "resting" state of the element when it is visible.
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)('in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
      opacity: 1
    })),
    // fade in when created. this could also be written as transition('void => *')
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
      opacity: 0
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)(800)]),
    // fade out when destroyed. this could also be written as transition('void => *')
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(':leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)(800, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
      opacity: 0
    })))])]
  }
}));

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./polyfills */ 7435);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 7435:
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js */ 4946);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_localize_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/localize/init */ 6344);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 * because those flags need to be set before `zone.js` being loaded, and webpack
 * will put import in the top of bundle, so user need to create a separate file
 * in this directory (for example: zone-flags.ts), and put the following flags
 * into that file, and then add the following code before importing zone.js.
 * import './zone-flags';
 *
 * The flags allowed in zone-flags.ts are listed here.
 *
 * The following flags will work for all browsers.
 *
 * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
 * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
 * (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
 *
 *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
 *  with the following flag, it will bypass `zone.js` patch for IE/Edge
 *
 *  (window as any).__Zone_enable_cross_context_check = true;
 *
 */
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map