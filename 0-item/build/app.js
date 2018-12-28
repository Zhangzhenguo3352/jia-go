(function(){
  
  var createAppHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ux?uxType=app");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/hap-toolkit/packager/lib/webpack/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/webpack/loader/module-loader.js!./node_modules/hap-toolkit/packager/lib/webpack/loader/manifest-loader.js?path=/Users/taoche/Desktop/items/练习/0-item/src/app.ux!./node_modules/babel-loader/lib/index.js?comments=false!./node_modules/hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/webpack/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/webpack/loader/module-loader.js!./node_modules/hap-toolkit/packager/lib/webpack/loader/manifest-loader.js?path=/Users/taoche/Desktop/items/练习/0-item/src/app.ux!./node_modules/babel-loader/lib?comments=false!./node_modules/hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = _interopRequireDefault(__webpack_require__(/*! ./util */ "./src/util.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  showMenu: _util.default.showMenu,
  createShortcut: _util.default.createShortcut
};
exports.default = _default;
(exports.default || module.exports).manifest = {"package":"com.application.demo","name":"0-item","versionName":"1.0.0","versionCode":"1","minPlatformVersion":"101","icon":"/Common/logo.png","features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"}],"permissions":[{"origin":"*"}],"config":{"logLevel":"off"},"router":{"entry":"Demo","pages":{"Demo":{"component":"index"},"DemoDetail":{"component":"index"},"About":{"component":"index"}},"widgets":{"CardDemo":{"name":"CardDemo","decription":"快应用卡片展示","component":"index","path":"/CardDemo","features":[]}}},"display":{"titleBarBackgroundColor":"#f2f2f2","titleBarTextColor":"#414141","menu":true,"pages":{"Demo":{"titleBarText":"示例页","menu":false},"DemoDetail":{"titleBarText":"详情页"},"About":{"menu":false}}}};
}

/***/ }),

/***/ "./src/app.ux?uxType=app":
/*!*******************************!*\
  !*** ./src/app.ux?uxType=app ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_script$ = __webpack_require__(/*! !../node_modules/hap-toolkit/packager/lib/webpack/loader/script-loader.js!../node_modules/hap-toolkit/packager/lib/webpack/loader/module-loader.js!../node_modules/hap-toolkit/packager/lib/webpack/loader/manifest-loader.js?path=/Users/taoche/Desktop/items/练习/0-item/src/app.ux!../node_modules/babel-loader?comments=false!../node_modules/hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=script!./app.ux?uxType=app */ "./node_modules/hap-toolkit/packager/lib/webpack/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/webpack/loader/module-loader.js!./node_modules/hap-toolkit/packager/lib/webpack/loader/manifest-loader.js?path=/Users/taoche/Desktop/items/练习/0-item/src/app.ux!./node_modules/babel-loader/lib/index.js?comments=false!./node_modules/hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app")

$app_define$('@app-application/app', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
})

$app_bootstrap$('@app-application/app',{ packagerVersion: '0.0.5'})


/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * 显示菜单
 */
function showMenu() {
  var prompt = $app_require$('@app-module/system.prompt');

  var router = $app_require$('@app-module/system.router');

  var appInfo = $app_require$('@app-module/system.app').getInfo();

  prompt.showContextMenu({
    itemList: ['保存桌面', '关于', '取消'],
    success: function success(ret) {
      switch (ret.index) {
        case 0:
          // 保存桌面
          createShortcut();
          break;

        case 1:
          // 关于
          router.push({
            uri: '/About',
            params: {
              name: appInfo.name,
              icon: appInfo.icon
            }
          });
          break;

        case 2:
          // 取消
          break;

        default:
          prompt.showToast({
            message: 'error'
          });
      }
    }
  });
}
/**
 * 创建桌面图标
 * 注意：使用加载器测试`创建桌面快捷方式`功能时，请先在`系统设置`中打开`应用加载器`的`桌面快捷方式`权限
 */


function createShortcut() {
  var prompt = $app_require$('@app-module/system.prompt');

  var shortcut = $app_require$('@app-module/system.shortcut');

  shortcut.hasInstalled({
    success: function success(ret) {
      if (ret) {
        prompt.showToast({
          message: '已创建桌面图标'
        });
      } else {
        shortcut.install({
          success: function success() {
            prompt.showToast({
              message: '成功创建桌面图标'
            });
          },
          fail: function fail(errmsg, errcode) {
            prompt.showToast({
              message: "".concat(errcode, ": ").concat(errmsg)
            });
          }
        });
      }
    }
  });
}

var _default = {
  showMenu: showMenu,
  createShortcut: createShortcut
};
exports.default = _default;

/***/ })

/******/ });
  };
  if (typeof window === "undefined") {
    return createAppHandler();
  }
  else {
    window.createAppHandler = createAppHandler
    // H5注入manifest以获取features
    global.manifest = {"package":"com.application.demo","name":"0-item","versionName":"1.0.0","versionCode":"1","minPlatformVersion":"101","icon":"/Common/logo.png","features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"}],"permissions":[{"origin":"*"}],"config":{"logLevel":"off"},"router":{"entry":"Demo","pages":{"Demo":{"component":"index"},"DemoDetail":{"component":"index"},"About":{"component":"index"}},"widgets":{"CardDemo":{"name":"CardDemo","decription":"快应用卡片展示","component":"index","path":"/CardDemo","features":[]}}},"display":{"titleBarBackgroundColor":"#f2f2f2","titleBarTextColor":"#414141","menu":true,"pages":{"Demo":{"titleBarText":"示例页","menu":false},"DemoDetail":{"titleBarText":"详情页"},"About":{"menu":false}}}};
  }
})();
//# sourceMappingURL=app.js.map