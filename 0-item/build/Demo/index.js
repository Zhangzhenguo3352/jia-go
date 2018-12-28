(function(){
  
  var createPageHandler = function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Demo/index.ux?uxType=page");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/hap-toolkit/packager/lib/webpack/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/webpack/loader/style-loader.js?index=0&type=style!./node_modules/hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=style!./src/Demo/index.ux?uxType=page":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/webpack/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/webpack/loader/style-loader.js?index=0&type=style!./node_modules/hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=style!./src/Demo/index.ux?uxType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".content": {
    "flexDirection": "column",
    "alignItems": "center",
    "width": "100%"
  },
  ".new-canvas": {
    "height": "580px",
    "width": "480px"
  },
  "body": {
    "marginTop": "0px",
    "marginRight": "0px",
    "marginBottom": "0px",
    "marginLeft": "0px",
    "paddingTop": "0px",
    "paddingRight": "0px",
    "paddingBottom": "0px",
    "paddingLeft": "0px",
    "textAlign": "center"
  },
  "canvas": {
    "outline": "0",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#000000",
    "borderRightColor": "#000000",
    "borderBottomColor": "#000000",
    "borderLeftColor": "#000000"
  }
}

/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/webpack/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/webpack/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=template!./src/Demo/index.ux?uxType=page&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/webpack/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/webpack/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=template!./src/Demo/index.ux?uxType=page& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "doc-page"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "content"
      ],
      "children": [
        {
          "type": "canvas",
          "attr": {
            "id": "new-canvas"
          },
          "classList": [
            "new-canvas"
          ],
          "id": "new-canvas"
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/webpack/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/webpack/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?plugins[]=/Users/taoche/Desktop/items/练习/0-item/node_modules/hap-toolkit/packager/lib/webpack/loader/jsx-loader.js&comments=false!./node_modules/hap-toolkit/packager/lib/webpack/loader/access-loader.js!./node_modules/hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=script!./src/Demo/index.ux?uxType=page":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/webpack/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/webpack/loader/module-loader.js!./node_modules/babel-loader/lib?plugins[]=/Users/taoche/Desktop/items/练习/0-item/node_modules/hap-toolkit/packager/lib/webpack/loader/jsx-loader.js&comments=false!./node_modules/hap-toolkit/packager/lib/webpack/loader/access-loader.js!./node_modules/hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=script!./src/Demo/index.ux?uxType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _default = {
  private: {
    drawComplete: false
  },
  onInit: function onInit() {
    this.$page.setTitleBar({
      text: 'canvas简单绘制'
    });
  },
  onShow: function onShow() {
    if (!this.drawComplete) {
      this.drawCanvas();
    }
  },
  drawCanvas: function drawCanvas() {
    var points = 55;
    var height = 110;
    var state = 100;
    var gLoop = 70;
    var canvas = this.$element('new-canvas');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(200,0,0)';
    ctx.fillRect(20, 20, 200, 200);
    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(80, 80, 200, 200);
    this.drawComplete = true;

    var clear = function clear() {
      ctx.fillStyle = '#d0e7f9';
      ctx.clearRect(0, 0, 330, 110);
      ctx.beginPath();
      ctx.rect(0, 0, 330, 110);
      ctx.closePath();
      ctx.fill();
    };

    var howManyCircles = 10,
        circles = [];

    for (var i = 0; i < howManyCircles; i++) {
      circles.push([Math.random() * 330, Math.random() * 110, Math.random() * 100, Math.random() / 2]);
    }

    var DrawCircles = function DrawCircles() {
      for (var i = 0; i < howManyCircles; i++) {
        ctx.fillStyle = 'rgba(255, 255, 255, ' + circles[i][3] + ')';
        ctx.beginPath();
        ctx.arc(circles[i][0], circles[i][1], circles[i][2], 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
      }
    };

    var MoveCircles = function MoveCircles(e) {
      for (var i = 0; i < howManyCircles; i++) {
        if (circles[i][1] - circles[i][2] > 110) {
          circles[i][0] = Math.random() * 330;
          circles[i][2] = Math.random() * 100;
          circles[i][1] = 0 - circles[i][2];
          circles[i][3] = Math.random() / 2;
        } else {
          circles[i][1] += e;
        }
      }
    };

    var player = new function () {
      var that = this;
      that.image = new Image();
      that.image.src = "angel.png";
      that.width = 65;
      that.height = 95;
      that.frames = 1;
      that.actualFrame = 0;
      that.X = 0;
      that.Y = 0;
      that.isJumping = false;
      that.isFalling = false;
      that.jumpSpeed = 0;
      that.fallSpeed = 0;

      that.jump = function () {
        if (!that.isJumping && !that.isFalling) {
          that.fallSpeed = 0;
          that.isJumping = true;
          that.jumpSpeed = 17;
        }
      };

      that.checkJump = function () {
        if (that.Y > 110 * 0.4) {
          that.setPosition(that.X, that.Y - that.jumpSpeed);
        } else {
          if (that.jumpSpeed > 10) points++;
          MoveCircles(that.jumpSpeed * 0.5);
          platforms.forEach(function (platform, ind) {
            platform.y += that.jumpSpeed;

            if (platform.y > 110) {
              var type = ~~(Math.random() * 5);
              if (type == 0) type = 1;else type = 0;
              platforms[ind] = new Platform(Math.random() * (330 - platformWidth), platform.y - 110, type);
            }
          });
        }

        that.jumpSpeed--;

        if (that.jumpSpeed == 0) {
          that.isJumping = false;
          that.isFalling = true;
          that.fallSpeed = 1;
        }
      };

      that.fallStop = function () {
        that.isFalling = false;
        that.fallSpeed = 0;
        that.jump();
      };

      that.checkFall = function () {
        if (that.Y < 110 - 114) {
          that.setPosition(that.X, that.Y + that.fallSpeed);
          that.fallSpeed++;
        } else {
          if (points == 0) that.fallStop();else GameOver();
        }
      };

      that.moveLeft = function () {
        if (that.X > 0) {
          that.setPosition(that.X - 5, that.Y);
        }
      };

      that.moveRight = function () {
        if (that.X + 330 < 334) {
          that.setPosition(that.X + 5, that.Y);
        }
      };

      that.setPosition = function (x, y) {
        that.X = x;
        that.Y = y;
      };

      that.interval = 0;

      that.draw = function () {
        try {
          ctx.drawImage(that.image, 0, 110 * that.actualFrame, 330, 110, that.X, that.Y, 330, 110);
        } catch (e) {}

        ;

        if (that.interval == 4) {
          if (that.actualFrame == that.frames) {
            that.actualFrame = 0;
          } else {
            that.actualFrame++;
          }

          that.interval = 0;
        }

        that.interval++;
      };
    }();
    player.setPosition(~~((330 - player.width) / 2), 110 - 114);
    player.jump();

    document.onmousemove = function (e) {
      if (player.X + c.offsetLeft > e.pageX) {
        player.moveLeft();
      } else if (player.X + c.offsetLeft < e.pageX) {
        player.moveRight();
      }
    };

    var nrOfPlatforms = 7,
        platforms = [],
        platformWidth = 70,
        platformHeight = 20;

    var Platform = function Platform(x, y, type) {
      var that = this;
      that.firstColor = '#FF8C00';
      that.secondColor = '#EEEE00';

      that.onCollide = function () {
        player.fallStop();
      };

      if (type === 1) {
        that.firstColor = '#AADD00';
        that.secondColor = '#698B22';

        that.onCollide = function () {
          player.fallStop();
          player.jumpSpeed = 50;
        };
      }

      that.x = ~~x;
      that.y = y;
      that.type = type;
      that.isMoving = ~~(Math.random() * 2);
      that.direction = ~~(Math.random() * 2) ? -1 : 1;

      that.draw = function () {
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        var gradient = ctx.createRadialGradient(that.x + platformWidth / 2, that.y + platformHeight / 2, 5, that.x + platformWidth / 2, that.y + platformHeight / 2, 45);
        gradient.addColorStop(0, that.firstColor);
        gradient.addColorStop(1, that.secondColor);
        ctx.fillStyle = gradient;
        ctx.fillRect(that.x, that.y, platformWidth, platformHeight);
      };

      return that;
    };

    var generatePlatforms = function () {
      var position = 0,
          type;

      for (var i = 0; i < nrOfPlatforms; i++) {
        type = ~~(Math.random() * 5);
        if (type == 0) type = 1;else type = 0;
        platforms[i] = new Platform(Math.random() * (330 - platformWidth), position, type);
        if (position < 110 - platformHeight) position += ~~(110 / nrOfPlatforms);
      }
    }();

    var checkCollision = function checkCollision() {
      platforms.forEach(function (e, ind) {
        if (player.isFalling && player.X < e.x + platformWidth && player.X + player.width > e.x && player.Y + 110 > e.y && player.Y + 110 < e.y + platformHeight) {
          e.onCollide();
        }
      });
    };

    var GameLoop = function GameLoop() {
      clear();
      DrawCircles();
      if (player.isJumping) player.checkJump();
      if (player.isFalling) player.checkFall();
      player.draw();
      platforms.forEach(function (platform, index) {
        if (platform.isMoving) {
          if (platform.x < 0) {
            platform.direction = 1;
          } else if (platform.x > 330 - platformWidth) {
            platform.direction = -1;
          }

          platform.x += platform.direction * (index / 2) * ~~(points / 100);
        }

        platform.draw();
      });
      checkCollision();
      ctx.fillStyle = "Black";
      ctx.fillText("POINTS:" + points, 10, height - 10);
      if (state) gLoop = setTimeout(GameLoop, 1000 / 50);
    };

    var GameOver = function GameOver() {
      state = false;
      clearTimeout(gLoop);
      setTimeout(function () {
        clear();
        ctx.fillStyle = "Black";
        ctx.font = "10pt Arial";
        ctx.fillText("GAME OVER", 330 / 2 - 60, 110 / 2 - 50);
        ctx.fillText("YOUR RESULT:" + points, 330 / 2 - 60, 110 / 2 - 30);
      }, 100);
    };

    GameLoop();
  }
};
exports.default = _default;
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    var accType = _typeof(moduleOwn[acc]);

    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);

      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {
          access: acc
        };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ }),

/***/ "./src/Demo/index.ux?uxType=page":
/*!***************************************!*\
  !*** ./src/Demo/index.ux?uxType=page ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../node_modules/hap-toolkit/packager/lib/webpack/loader/json-loader.js!../../node_modules/hap-toolkit/packager/lib/webpack/loader/template-loader.js!../../node_modules/hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=page& */ "./node_modules/hap-toolkit/packager/lib/webpack/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/webpack/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=template!./src/Demo/index.ux?uxType=page&")
var $app_style$ = __webpack_require__(/*! !../../node_modules/hap-toolkit/packager/lib/webpack/loader/json-loader.js!../../node_modules/hap-toolkit/packager/lib/webpack/loader/style-loader.js?index=0&type=style!../../node_modules/hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "./node_modules/hap-toolkit/packager/lib/webpack/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/webpack/loader/style-loader.js?index=0&type=style!./node_modules/hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=style!./src/Demo/index.ux?uxType=page")
var $app_script$ = __webpack_require__(/*! !../../node_modules/hap-toolkit/packager/lib/webpack/loader/script-loader.js!../../node_modules/hap-toolkit/packager/lib/webpack/loader/module-loader.js!../../node_modules/babel-loader?plugins[]=/Users/taoche/Desktop/items/练习/0-item/node_modules/hap-toolkit/packager/lib/webpack/loader/jsx-loader.js&comments=false!../../node_modules/hap-toolkit/packager/lib/webpack/loader/access-loader.js!../../node_modules/hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "./node_modules/hap-toolkit/packager/lib/webpack/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/webpack/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?plugins[]=/Users/taoche/Desktop/items/练习/0-item/node_modules/hap-toolkit/packager/lib/webpack/loader/jsx-loader.js&comments=false!./node_modules/hap-toolkit/packager/lib/webpack/loader/access-loader.js!./node_modules/hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=script!./src/Demo/index.ux?uxType=page")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ })

/******/ });
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map