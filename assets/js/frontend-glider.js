/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/frontend-glider.js":
/*!******************************************!*\
  !*** ./src/assets/js/frontend-glider.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  /*============ Coupon Card =============*/
  var sdcc_card = {
    els: {
      show_excerpt: jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdcc-card__excerpt-show")
    },
    data: {}
  };
  sdcc_card.els.show_excerpt.on("click", function (e) {
    e.preventDefault();
    var type = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("data-type");
    var excerpt_el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent(".sdcc-card__excerpt");
    var title_el = excerpt_el.prev(".sdcc-card__title");

    if (type == "more") {
      var excerpt_height = excerpt_el.height();
      var title_height = title_el.height();
      var height = excerpt_height + title_height + 70;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest(".sdcc-card").css({
        height: "".concat(height, "px")
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("data-type", "less");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("title", sdcc_script.show_less_text);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).html(sdcc_script.show_less_text);
    }

    if (type == "less") {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest(".sdcc-card").removeAttr("style");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("data-type", "more");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("title", sdcc_script.show_more_text);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).html(sdcc_script.show_more_text);
    }
  });
  /*============ Coupon Page ============== */

  var sdcc_coupon_page = {
    els: {
      copy_btn: jquery__WEBPACK_IMPORTED_MODULE_0___default()("#sdcc-copy-code"),
      coupon_link: jquery__WEBPACK_IMPORTED_MODULE_0___default()("#sdcc-coupon-link")
    },
    data: {}
  }; // Copy code

  var sdcc_copy = new ClipboardJS("#sdcc-copy-code");
  sdcc_copy.on("success", function (e) {
    sdcc_coupon_page.els.copy_btn.html(sdcc_script.copied_text);
    e.clearSelection();
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
      type: "POST",
      url: sdcc_script.ajaxurl,
      data: {
        action: "sdcc_copy_click",
        nonce_ajax: sdcc_script.nonce,
        coupon_id: sdcc_coupon_page.els.copy_btn.data("id")
      },
      success: function success(res) {},
      error: function error(err) {
        console.log(err);
      }
    });
  });
  sdcc_copy.on("error", function (e) {
    alert(sdcc_script.something_wrong_text);
  }); // Click coupon link

  sdcc_coupon_page.els.coupon_link.on("click", function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
      type: "POST",
      url: sdcc_script.ajaxurl,
      data: {
        action: "sdcc_coupon_link_click",
        nonce_ajax: sdcc_script.nonce,
        coupon_id: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data("id")
      },
      success: function success(res) {
        var data = res.data;
        window.open(data.data, "_blank");
      },
      error: function error(err) {
        console.log(err);
        alert(sdcc_script.something_wrong_text);
      }
    });
  });
});

/***/ }),

/***/ 1:
/*!************************************************!*\
  !*** multi ./src/assets/js/frontend-glider.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wamp64\www\nirax\wp-content\plugins\glider\src\assets\js\frontend-glider.js */"./src/assets/js/frontend-glider.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9mcm9udGVuZC1nbGlkZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJzZGNjX2NhcmQiLCJlbHMiLCJzaG93X2V4Y2VycHQiLCJkYXRhIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJ0eXBlIiwiYXR0ciIsImV4Y2VycHRfZWwiLCJwYXJlbnQiLCJ0aXRsZV9lbCIsInByZXYiLCJleGNlcnB0X2hlaWdodCIsImhlaWdodCIsInRpdGxlX2hlaWdodCIsImNsb3Nlc3QiLCJjc3MiLCJzZGNjX3NjcmlwdCIsInNob3dfbGVzc190ZXh0IiwiaHRtbCIsInJlbW92ZUF0dHIiLCJzaG93X21vcmVfdGV4dCIsInNkY2NfY291cG9uX3BhZ2UiLCJjb3B5X2J0biIsImNvdXBvbl9saW5rIiwic2RjY19jb3B5IiwiQ2xpcGJvYXJkSlMiLCJjb3BpZWRfdGV4dCIsImNsZWFyU2VsZWN0aW9uIiwiYWpheCIsInVybCIsImFqYXh1cmwiLCJhY3Rpb24iLCJub25jZV9hamF4Iiwibm9uY2UiLCJjb3Vwb25faWQiLCJzdWNjZXNzIiwicmVzIiwiZXJyb3IiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJzb21ldGhpbmdfd3JvbmdfdGV4dCIsIndpbmRvdyIsIm9wZW4iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtC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RkMsaUJBQVMsRUFBRXZDLDZDQUFDLENBQUMsSUFBRCxDQUFELENBQVFNLElBQVIsQ0FBYSxJQUFiO0FBSFQsT0FISDtBQVFIa0MsYUFBTyxFQUFFLGlCQUFVQyxHQUFWLEVBQWU7QUFDcEIsWUFBSW5DLElBQUksR0FBR21DLEdBQUcsQ0FBQ25DLElBQWY7QUFDQTBDLGNBQU0sQ0FBQ0MsSUFBUCxDQUFZM0MsSUFBSSxDQUFDQSxJQUFqQixFQUF1QixRQUF2QjtBQUNILE9BWEU7QUFZSG9DLFdBQUssRUFBRSxlQUFVQyxHQUFWLEVBQWU7QUFDbEJDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0FHLGFBQUssQ0FBQ3pCLFdBQVcsQ0FBQzBCLG9CQUFiLENBQUw7QUFDSDtBQWZFLEtBQVA7QUFpQkgsR0FsQkQ7QUFtQkgsQ0ExRkQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQSx3QiIsImZpbGUiOiJmcm9udGVuZC1nbGlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAvKj09PT09PT09PT09PSBDb3Vwb24gQ2FyZCA9PT09PT09PT09PT09Ki9cclxuICAgIGxldCBzZGNjX2NhcmQgPSB7XHJcbiAgICAgICAgZWxzOiB7XHJcbiAgICAgICAgICAgIHNob3dfZXhjZXJwdDogJChcIi5zZGNjLWNhcmRfX2V4Y2VycHQtc2hvd1wiKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGE6IHt9LFxyXG4gICAgfTtcclxuXHJcbiAgICBzZGNjX2NhcmQuZWxzLnNob3dfZXhjZXJwdC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBsZXQgdHlwZSA9ICQodGhpcykuYXR0cihcImRhdGEtdHlwZVwiKTtcclxuICAgICAgICBsZXQgZXhjZXJwdF9lbCA9ICQodGhpcykucGFyZW50KFwiLnNkY2MtY2FyZF9fZXhjZXJwdFwiKTtcclxuICAgICAgICBsZXQgdGl0bGVfZWwgPSBleGNlcnB0X2VsLnByZXYoXCIuc2RjYy1jYXJkX190aXRsZVwiKTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGUgPT0gXCJtb3JlXCIpIHtcclxuICAgICAgICAgICAgbGV0IGV4Y2VycHRfaGVpZ2h0ID0gZXhjZXJwdF9lbC5oZWlnaHQoKTtcclxuICAgICAgICAgICAgbGV0IHRpdGxlX2hlaWdodCA9IHRpdGxlX2VsLmhlaWdodCgpO1xyXG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gZXhjZXJwdF9oZWlnaHQgKyB0aXRsZV9oZWlnaHQgKyA3MDtcclxuICAgICAgICAgICAgJCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgLmNsb3Nlc3QoXCIuc2RjYy1jYXJkXCIpXHJcbiAgICAgICAgICAgICAgICAuY3NzKHsgaGVpZ2h0OiBgJHtoZWlnaHR9cHhgIH0pO1xyXG5cclxuICAgICAgICAgICAgJCh0aGlzKS5hdHRyKFwiZGF0YS10eXBlXCIsIFwibGVzc1wiKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hdHRyKFwidGl0bGVcIiwgc2RjY19zY3JpcHQuc2hvd19sZXNzX3RleHQpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmh0bWwoc2RjY19zY3JpcHQuc2hvd19sZXNzX3RleHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGUgPT0gXCJsZXNzXCIpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KFwiLnNkY2MtY2FyZFwiKS5yZW1vdmVBdHRyKFwic3R5bGVcIik7XHJcbiAgICAgICAgICAgICQodGhpcykuYXR0cihcImRhdGEtdHlwZVwiLCBcIm1vcmVcIik7XHJcbiAgICAgICAgICAgICQodGhpcykuYXR0cihcInRpdGxlXCIsIHNkY2Nfc2NyaXB0LnNob3dfbW9yZV90ZXh0KTtcclxuICAgICAgICAgICAgJCh0aGlzKS5odG1sKHNkY2Nfc2NyaXB0LnNob3dfbW9yZV90ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKj09PT09PT09PT09PSBDb3Vwb24gUGFnZSA9PT09PT09PT09PT09PSAqL1xyXG4gICAgbGV0IHNkY2NfY291cG9uX3BhZ2UgPSB7XHJcbiAgICAgICAgZWxzOiB7XHJcbiAgICAgICAgICAgIGNvcHlfYnRuOiAkKFwiI3NkY2MtY29weS1jb2RlXCIpLFxyXG4gICAgICAgICAgICBjb3Vwb25fbGluazogJChcIiNzZGNjLWNvdXBvbi1saW5rXCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YToge30sXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIENvcHkgY29kZVxyXG4gICAgbGV0IHNkY2NfY29weSA9IG5ldyBDbGlwYm9hcmRKUyhcIiNzZGNjLWNvcHktY29kZVwiKTtcclxuICAgIHNkY2NfY29weS5vbihcInN1Y2Nlc3NcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBzZGNjX2NvdXBvbl9wYWdlLmVscy5jb3B5X2J0bi5odG1sKHNkY2Nfc2NyaXB0LmNvcGllZF90ZXh0KTtcclxuICAgICAgICBlLmNsZWFyU2VsZWN0aW9uKCk7XHJcblxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IHNkY2Nfc2NyaXB0LmFqYXh1cmwsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbjogXCJzZGNjX2NvcHlfY2xpY2tcIixcclxuICAgICAgICAgICAgICAgIG5vbmNlX2FqYXg6IHNkY2Nfc2NyaXB0Lm5vbmNlLFxyXG4gICAgICAgICAgICAgICAgY291cG9uX2lkOiBzZGNjX2NvdXBvbl9wYWdlLmVscy5jb3B5X2J0bi5kYXRhKFwiaWRcIiksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHt9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgc2RjY19jb3B5Lm9uKFwiZXJyb3JcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBhbGVydChzZGNjX3NjcmlwdC5zb21ldGhpbmdfd3JvbmdfdGV4dCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDbGljayBjb3Vwb24gbGlua1xyXG4gICAgc2RjY19jb3Vwb25fcGFnZS5lbHMuY291cG9uX2xpbmsub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogc2RjY19zY3JpcHQuYWpheHVybCxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiBcInNkY2NfY291cG9uX2xpbmtfY2xpY2tcIixcclxuICAgICAgICAgICAgICAgIG5vbmNlX2FqYXg6IHNkY2Nfc2NyaXB0Lm5vbmNlLFxyXG4gICAgICAgICAgICAgICAgY291cG9uX2lkOiAkKHRoaXMpLmRhdGEoXCJpZFwiKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKGRhdGEuZGF0YSwgXCJfYmxhbmtcIik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoc2RjY19zY3JpcHQuc29tZXRoaW5nX3dyb25nX3RleHQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwic291cmNlUm9vdCI6IiJ9