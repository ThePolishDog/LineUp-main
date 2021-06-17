/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


/***/ }),

/***/ "./src/components/assets/fire.png":
/*!****************************************!*\
  !*** ./src/components/assets/fire.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/9f7a1179419675f14a95b358db13c960-fire.png\");\n\n//# sourceURL=webpack://threejsik/./src/components/assets/fire.png?");

/***/ }),

/***/ "./src/components/Camera.js":
/*!**********************************!*\
  !*** ./src/components/Camera.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Camera)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\n\r\nclass Camera extends three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera {\r\n    constructor(fov, width, height) {\r\n        super(fov, width / height, 0.1, 10000)\r\n\r\n        this.width = width\r\n        this.height = height\r\n        this.updateSize();\r\n        // resize\r\n        window.addEventListener('resize', () => this.updateSize(), false);\r\n    }\r\n\r\n    updateSize() {\r\n        // aspect ratio kamery\r\n        this.aspect = this.width / this.height;\r\n        this.updateProjectionMatrix();\r\n    }\r\n\r\n\r\n}\n\n//# sourceURL=webpack://threejsik/./src/components/Camera.js?");

/***/ }),

/***/ "./src/components/Fireplace.js":
/*!*************************************!*\
  !*** ./src/components/Fireplace.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Fireplace)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _assets_fire_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/fire.png */ \"./src/components/assets/fire.png\");\n/* harmony import */ var _Particle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Particle */ \"./src/components/Particle.js\");\n\r\n\r\n\r\n\r\nclass Fireplace extends three__WEBPACK_IMPORTED_MODULE_2__.Object3D {\r\n\r\n    constructor() {\r\n        super()\r\n            //tablica na cząsteczki\r\n        this.particles = []\r\n            // przewidywana ilość cząsteczek\r\n        this.count = 100\r\n            // materiał cząsteczki, rzecz najważniejsza\r\n            // jego właściwość blending decyduje o tym, że cząsteczki mieszają się\r\n            // ze sobą\r\n\r\n        this.particleMaterial = new three__WEBPACK_IMPORTED_MODULE_2__.SpriteMaterial({\r\n            color: 0xff0000,\r\n            map: new three__WEBPACK_IMPORTED_MODULE_2__.TextureLoader().load(_assets_fire_png__WEBPACK_IMPORTED_MODULE_0__.default),\r\n            transparent: true,\r\n            opacity: 0.8,\r\n            depthWrite: false,\r\n            blending: three__WEBPACK_IMPORTED_MODULE_2__.AdditiveBlending\r\n        });\r\n        // dodajemy światło, aby ognisko emitowało oświetlenie na scenie\r\n        this.point = new three__WEBPACK_IMPORTED_MODULE_2__.PointLight(0xff0000, 20, 20)\r\n\r\n\r\n        this.init()\r\n    }\r\n\r\n    init() {\r\n\r\n        // w pętli tworzymy odpowiednią ilość cząsteczek klasy Particle\r\n        // dodajemy do this (kontener3D) i tablicy\r\n        for (var i = 0; this.count > i; i++) {\r\n            var particle = new _Particle__WEBPACK_IMPORTED_MODULE_1__.default(this.particleMaterial)\r\n            this.add(particle)\r\n            this.particles.push(particle);\r\n        }\r\n\r\n\r\n\r\n    }\r\n\r\n\r\n\r\n    update() {\r\n        // tutaj w pętli wykonujemy funkcję update każdej cząsteczki,\r\n        // którą mamy w tablicy       \r\n        // particle.update()\r\n        for (var i = 0; this.count > i; i++) {\r\n            this.particles[i].update();\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://threejsik/./src/components/Fireplace.js?");

/***/ }),

/***/ "./src/components/Ico.js":
/*!*******************************!*\
  !*** ./src/components/Ico.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ico)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nclass Ico extends three__WEBPACK_IMPORTED_MODULE_0__.Mesh {\r\n\r\n    constructor() {\r\n            super(new three__WEBPACK_IMPORTED_MODULE_0__.IcosahedronGeometry(), new three__WEBPACK_IMPORTED_MODULE_0__.MeshNormalMaterial({ side: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide }))\r\n        }\r\n        // obrót\r\n    update() {\r\n        this.rotation.y += 0.02\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://threejsik/./src/components/Ico.js?");

/***/ }),

/***/ "./src/components/MainMulticamera.js":
/*!*******************************************!*\
  !*** ./src/components/MainMulticamera.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MainMulticamera)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Renderer */ \"./src/components/Renderer.js\");\n/* harmony import */ var _Camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Camera */ \"./src/components/Camera.js\");\n/* harmony import */ var _Ico__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ico */ \"./src/components/Ico.js\");\n/* harmony import */ var _Fireplace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Fireplace */ \"./src/components/Fireplace.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass MainMulticamera {\r\n    constructor(container) {\r\n        //scene\r\n        this.scene = new three__WEBPACK_IMPORTED_MODULE_4__.Scene();\r\n        //render\r\n        this.renderer = new _Renderer__WEBPACK_IMPORTED_MODULE_0__.default(container);\r\n        const gridhelper = new three__WEBPACK_IMPORTED_MODULE_4__.GridHelper(1000, 10)\r\n        this.scene.add(gridhelper)\r\n            // ta funkcja umożliwia dodawania kolejnych kamer\r\n        this.renderer.autoClear = false\r\n\r\n        // camera 1\r\n        this.camera1 = new _Camera__WEBPACK_IMPORTED_MODULE_1__.default(30, window.innerWidth / 2, window.innerHeight / 2);\r\n        this.camera1.position.set(10, 10, 10)\r\n        this.camera1.lookAt(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(0, 0, 0));\r\n\r\n        // camera 2\r\n        this.camera2 = new _Camera__WEBPACK_IMPORTED_MODULE_1__.default(30, window.innerWidth / 2, window.innerHeight / 2);\r\n        this.camera2.position.set(0, 0, 0)\r\n        this.camera2.lookAt(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(0, 0, 0));\r\n        // camera 3\r\n        this.camera3 = new _Camera__WEBPACK_IMPORTED_MODULE_1__.default(30, window.innerWidth / 2, window.innerHeight / 2);\r\n        this.camera3.position.set(0, 30, 0)\r\n        this.camera3.lookAt(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(0, 0, 0));\r\n        // camera 4    \r\n        this.camera4 = new _Camera__WEBPACK_IMPORTED_MODULE_1__.default(30, window.innerWidth / 2, window.innerHeight / 2);\r\n        this.camera4.position.set(10, 20, 10)\r\n        this.camera4.lookAt(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(0, 0, 0));\r\n\r\n\r\n        //ico\r\n        this.ico = new _Ico__WEBPACK_IMPORTED_MODULE_2__.default()\r\n        this.scene.add(this.ico)\r\n\r\n\r\n        this.render();\r\n    }\r\n\r\n    render() {\r\n        // kolejne viewporty dla kolejnych kamer\r\n        this.renderer.setViewport(0, 0, innerWidth / 2, innerHeight / 2);\r\n        this.renderer.render(this.scene, this.camera1);\r\n        this.renderer.setViewport(innerWidth / 2, 0, innerWidth / 2, innerHeight / 2);\r\n        this.renderer.render(this.scene, this.camera2);\r\n        this.renderer.setViewport(0, innerHeight / 2, innerWidth / 2, innerHeight / 2);\r\n        this.renderer.render(this.scene, this.camera3);\r\n        this.renderer.setViewport(innerWidth / 2, innerHeight / 2, innerWidth / 2, innerHeight / 2);\r\n        this.renderer.render(this.scene, this.camera4);\r\n\r\n        this.ico.update()\r\n        requestAnimationFrame(this.render.bind(this));\r\n    }\r\n}\n\n//# sourceURL=webpack://threejsik/./src/components/MainMulticamera.js?");

/***/ }),

/***/ "./src/components/Particle.js":
/*!************************************!*\
  !*** ./src/components/Particle.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Particle)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nclass Particle extends three__WEBPACK_IMPORTED_MODULE_0__.Sprite {\r\n    constructor(material) {\r\n        super()\r\n\r\n        this.material = material.clone()\r\n            // skala naszego sprite\r\n        this.scale.set(\r\n            Math.random() * 1,\r\n            Math.random() * 2,\r\n            Math.random() * 3\r\n        );\r\n\r\n    }\r\n\r\n    update() {\r\n        // wewnątrz tej funkcji przemieszczamy cząsteczkę do góry - y\r\n        // a kiedy osiągnie określony punkt\r\n        // cząsteczka wraca na y = 0\r\n        // trzeba też zmieniać przezroczystość cząsteczki\r\n        // tak aby u góry stała się całkiem przezroczysta\r\n        // można tez losować jej x i z aby wywołać wrażenie drgania\r\n        // całość wymaga trochę eksperymentów\r\n        // aby wrażenie było poprawne\r\n        // a moje pytajniki należy zastąpić własnymi pomysłami\r\n\r\n        if (this.position.y > 5) {\r\n            this.position.x = Math.random() * 3\r\n            this.position.z = Math.random() * 2\r\n            this.position.y = 0;\r\n            this.material.opacity = 1;\r\n        }\r\n\r\n\r\n        this.material.opacity -= 0.1;\r\n        this.position.y += Math.random()\r\n\r\n    }\r\n}\n\n//# sourceURL=webpack://threejsik/./src/components/Particle.js?");

/***/ }),

/***/ "./src/components/Renderer.js":
/*!************************************!*\
  !*** ./src/components/Renderer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Renderer)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nclass Renderer extends three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer {\r\n    constructor(container) {\r\n        super({ antialias: true })\r\n\r\n        this.container = container\r\n\r\n        this.container.appendChild(this.domElement);\r\n\r\n        this.updateSize();\r\n        document.addEventListener('DOMContentLoaded', () => this.updateSize(), false);\r\n        window.addEventListener('resize', () => this.updateSize(), false);\r\n    }\r\n\r\n    updateSize() {\r\n        this.setSize(window.innerWidth, window.innerHeight);\r\n    }\r\n\r\n\r\n}\n\n//# sourceURL=webpack://threejsik/./src/components/Renderer.js?");

/***/ }),

/***/ "./src/multicamera.js":
/*!****************************!*\
  !*** ./src/multicamera.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_MainMulticamera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/MainMulticamera */ \"./src/components/MainMulticamera.js\");\n\r\n\r\nfunction init() {\r\n    //div\r\n    const container = document.getElementById('root');\r\n    //main class\r\n    new _components_MainMulticamera__WEBPACK_IMPORTED_MODULE_0__.default(container);\r\n}\r\n\r\ninit();\n\n//# sourceURL=webpack://threejsik/./src/multicamera.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/multicamera.js");
/******/ 	
/******/ })()
;