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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/admin-glider.js":
/*!***************************************!*\
  !*** ./src/assets/js/admin-glider.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  "use strict";
  /*=============== Meta box media uploader ================ */
  // Instantiates the variable that holds the media library frame.

  var metaImageFrame; // Runs when the media button is clicked.

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdgl-media__add-btn").on("click", function () {
    // Get the field target
    var field_target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data("target-input");
    var preview_target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data("target-preview"); // Sets up the media library frame

    metaImageFrame = wp.media.frames.metaImageFrame = wp.media({
      title: sdgl_script.title,
      button: {
        text: sdgl_script.button
      }
    }); // Runs when an image is selected.

    metaImageFrame.on("select", function () {
      // Grabs the attachment selection and creates a JSON representation of the model.
      var media_attachment = metaImageFrame.state().get("selection").first().toJSON(); // Sends the attachment URL to our custom image input field.

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(field_target).val(media_attachment.url);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(preview_target).attr("src", media_attachment.url);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(preview_target).parent().removeClass("sd-hide");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdgl-media__remove-wrapper").removeClass("sd-hide");
    }); // Opens the media library frame.

    metaImageFrame.open();
  }); // On click remove media button

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdgl-media__remove").on("click", function (e) {
    e.preventDefault(); // Get the field target

    var field_target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data("target-input");
    var preview_target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data("target-preview");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(field_target).val("");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(preview_target).attr("src", "");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(preview_target).parent().addClass("sd-hide");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdgl-media__remove-wrapper").addClass("sd-hide");
  });
  /*=============== Slider Images Meta box ================ */

  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#sdgl-new-slider-image").on("click", function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
      type: "POST",
      url: sdgl_script.ajaxurl,
      data: {
        action: "sdgl_add_slider_image",
        nonce_ajax: sdgl_script.nonce
      },
      success: function success(res) {
        var data = res.data;
        var new_slider = data.new_slider;
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#sdgl-sliders").append(new_slider);
      },
      error: function error(err) {
        console.log(err);
      }
    });
  }); // Runs when the media button is clicked.

  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#sdgl-sliders").on("click", ".sdgl-media__add-btn", function () {
    // Get the field target
    var field_target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data("target-input");
    var preview_target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data("target-preview"); // Sets up the media library frame

    metaImageFrame = wp.media.frames.metaImageFrame = wp.media({
      title: sdgl_script.title,
      button: {
        text: sdgl_script.button
      }
    }); // Runs when an image is selected.

    metaImageFrame.on("select", function () {
      // Grabs the attachment selection and creates a JSON representation of the model.
      var media_attachment = metaImageFrame.state().get("selection").first().toJSON(); // Sends the attachment URL to our custom image input field.

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(field_target).val(media_attachment.url);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(preview_target).attr("src", media_attachment.url);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(preview_target).parent().removeClass("sd-hide");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdgl-media__remove-wrapper").removeClass("sd-hide");
    }); // Opens the media library frame.

    metaImageFrame.open();
  }); // Remove slide

  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#sdgl-sliders").on("click", ".sdgl-remove-slide", function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent("td").parent("tr").remove();
  }); // Initialize jQuery UI sortable for slider images table

  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#sdgl-sliders tbody").sortable();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#sdgl-sliders tbody").disableSelection();
});

/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi ./src/assets/js/admin-glider.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wamp64\www\nirax\wp-content\plugins\glider\src\assets\js\admin-glider.js */"./src/assets/js/admin-glider.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9hZG1pbi1nbGlkZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJtZXRhSW1hZ2VGcmFtZSIsIm9uIiwiZmllbGRfdGFyZ2V0IiwiZGF0YSIsInByZXZpZXdfdGFyZ2V0Iiwid3AiLCJtZWRpYSIsImZyYW1lcyIsInRpdGxlIiwic2RnbF9zY3JpcHQiLCJidXR0b24iLCJ0ZXh0IiwibWVkaWFfYXR0YWNobWVudCIsInN0YXRlIiwiZ2V0IiwiZmlyc3QiLCJ0b0pTT04iLCJ2YWwiLCJ1cmwiLCJhdHRyIiwicGFyZW50IiwicmVtb3ZlQ2xhc3MiLCJvcGVuIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWRkQ2xhc3MiLCJhamF4IiwidHlwZSIsImFqYXh1cmwiLCJhY3Rpb24iLCJub25jZV9hamF4Iiwibm9uY2UiLCJzdWNjZXNzIiwicmVzIiwibmV3X3NsaWRlciIsImFwcGVuZCIsImVycm9yIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInJlbW92ZSIsInNvcnRhYmxlIiwiZGlzYWJsZVNlbGVjdGlvbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNB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aGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIC8qPT09PT09PT09PT09PT09IE1ldGEgYm94IG1lZGlhIHVwbG9hZGVyID09PT09PT09PT09PT09PT0gKi9cclxuICAgIC8vIEluc3RhbnRpYXRlcyB0aGUgdmFyaWFibGUgdGhhdCBob2xkcyB0aGUgbWVkaWEgbGlicmFyeSBmcmFtZS5cclxuICAgIHZhciBtZXRhSW1hZ2VGcmFtZTtcclxuXHJcbiAgICAvLyBSdW5zIHdoZW4gdGhlIG1lZGlhIGJ1dHRvbiBpcyBjbGlja2VkLlxyXG4gICAgJChcIi5zZGdsLW1lZGlhX19hZGQtYnRuXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIEdldCB0aGUgZmllbGQgdGFyZ2V0XHJcbiAgICAgICAgdmFyIGZpZWxkX3RhcmdldCA9ICQodGhpcykuZGF0YShcInRhcmdldC1pbnB1dFwiKTtcclxuICAgICAgICB2YXIgcHJldmlld190YXJnZXQgPSAkKHRoaXMpLmRhdGEoXCJ0YXJnZXQtcHJldmlld1wiKTtcclxuXHJcbiAgICAgICAgLy8gU2V0cyB1cCB0aGUgbWVkaWEgbGlicmFyeSBmcmFtZVxyXG4gICAgICAgIG1ldGFJbWFnZUZyYW1lID0gd3AubWVkaWEuZnJhbWVzLm1ldGFJbWFnZUZyYW1lID0gd3AubWVkaWEoe1xyXG4gICAgICAgICAgICB0aXRsZTogc2RnbF9zY3JpcHQudGl0bGUsXHJcbiAgICAgICAgICAgIGJ1dHRvbjogeyB0ZXh0OiBzZGdsX3NjcmlwdC5idXR0b24gfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gUnVucyB3aGVuIGFuIGltYWdlIGlzIHNlbGVjdGVkLlxyXG4gICAgICAgIG1ldGFJbWFnZUZyYW1lLm9uKFwic2VsZWN0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gR3JhYnMgdGhlIGF0dGFjaG1lbnQgc2VsZWN0aW9uIGFuZCBjcmVhdGVzIGEgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgbW9kZWwuXHJcbiAgICAgICAgICAgIHZhciBtZWRpYV9hdHRhY2htZW50ID0gbWV0YUltYWdlRnJhbWVcclxuICAgICAgICAgICAgICAgIC5zdGF0ZSgpXHJcbiAgICAgICAgICAgICAgICAuZ2V0KFwic2VsZWN0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICAuZmlyc3QoKVxyXG4gICAgICAgICAgICAgICAgLnRvSlNPTigpO1xyXG5cclxuICAgICAgICAgICAgLy8gU2VuZHMgdGhlIGF0dGFjaG1lbnQgVVJMIHRvIG91ciBjdXN0b20gaW1hZ2UgaW5wdXQgZmllbGQuXHJcbiAgICAgICAgICAgICQoZmllbGRfdGFyZ2V0KS52YWwobWVkaWFfYXR0YWNobWVudC51cmwpO1xyXG4gICAgICAgICAgICAkKHByZXZpZXdfdGFyZ2V0KS5hdHRyKFwic3JjXCIsIG1lZGlhX2F0dGFjaG1lbnQudXJsKTtcclxuICAgICAgICAgICAgJChwcmV2aWV3X3RhcmdldCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoXCJzZC1oaWRlXCIpO1xyXG4gICAgICAgICAgICAkKFwiLnNkZ2wtbWVkaWFfX3JlbW92ZS13cmFwcGVyXCIpLnJlbW92ZUNsYXNzKFwic2QtaGlkZVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gT3BlbnMgdGhlIG1lZGlhIGxpYnJhcnkgZnJhbWUuXHJcbiAgICAgICAgbWV0YUltYWdlRnJhbWUub3BlbigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gT24gY2xpY2sgcmVtb3ZlIG1lZGlhIGJ1dHRvblxyXG4gICAgJChcIi5zZGdsLW1lZGlhX19yZW1vdmVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgLy8gR2V0IHRoZSBmaWVsZCB0YXJnZXRcclxuICAgICAgICB2YXIgZmllbGRfdGFyZ2V0ID0gJCh0aGlzKS5kYXRhKFwidGFyZ2V0LWlucHV0XCIpO1xyXG4gICAgICAgIHZhciBwcmV2aWV3X3RhcmdldCA9ICQodGhpcykuZGF0YShcInRhcmdldC1wcmV2aWV3XCIpO1xyXG5cclxuICAgICAgICAkKGZpZWxkX3RhcmdldCkudmFsKFwiXCIpO1xyXG4gICAgICAgICQocHJldmlld190YXJnZXQpLmF0dHIoXCJzcmNcIiwgXCJcIik7XHJcbiAgICAgICAgJChwcmV2aWV3X3RhcmdldCkucGFyZW50KCkuYWRkQ2xhc3MoXCJzZC1oaWRlXCIpO1xyXG4gICAgICAgICQoXCIuc2RnbC1tZWRpYV9fcmVtb3ZlLXdyYXBwZXJcIikuYWRkQ2xhc3MoXCJzZC1oaWRlXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLyo9PT09PT09PT09PT09PT0gU2xpZGVyIEltYWdlcyBNZXRhIGJveCA9PT09PT09PT09PT09PT09ICovXHJcbiAgICAkKFwiI3NkZ2wtbmV3LXNsaWRlci1pbWFnZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiBzZGdsX3NjcmlwdC5hamF4dXJsLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb246IFwic2RnbF9hZGRfc2xpZGVyX2ltYWdlXCIsXHJcbiAgICAgICAgICAgICAgICBub25jZV9hamF4OiBzZGdsX3NjcmlwdC5ub25jZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdfc2xpZGVyID0gZGF0YS5uZXdfc2xpZGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICQoXCIjc2RnbC1zbGlkZXJzXCIpLmFwcGVuZChuZXdfc2xpZGVyKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBSdW5zIHdoZW4gdGhlIG1lZGlhIGJ1dHRvbiBpcyBjbGlja2VkLlxyXG4gICAgJChcIiNzZGdsLXNsaWRlcnNcIikub24oXCJjbGlja1wiLCBcIi5zZGdsLW1lZGlhX19hZGQtYnRuXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBHZXQgdGhlIGZpZWxkIHRhcmdldFxyXG4gICAgICAgIHZhciBmaWVsZF90YXJnZXQgPSAkKHRoaXMpLmRhdGEoXCJ0YXJnZXQtaW5wdXRcIik7XHJcbiAgICAgICAgdmFyIHByZXZpZXdfdGFyZ2V0ID0gJCh0aGlzKS5kYXRhKFwidGFyZ2V0LXByZXZpZXdcIik7XHJcblxyXG4gICAgICAgIC8vIFNldHMgdXAgdGhlIG1lZGlhIGxpYnJhcnkgZnJhbWVcclxuICAgICAgICBtZXRhSW1hZ2VGcmFtZSA9IHdwLm1lZGlhLmZyYW1lcy5tZXRhSW1hZ2VGcmFtZSA9IHdwLm1lZGlhKHtcclxuICAgICAgICAgICAgdGl0bGU6IHNkZ2xfc2NyaXB0LnRpdGxlLFxyXG4gICAgICAgICAgICBidXR0b246IHsgdGV4dDogc2RnbF9zY3JpcHQuYnV0dG9uIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFJ1bnMgd2hlbiBhbiBpbWFnZSBpcyBzZWxlY3RlZC5cclxuICAgICAgICBtZXRhSW1hZ2VGcmFtZS5vbihcInNlbGVjdFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIEdyYWJzIHRoZSBhdHRhY2htZW50IHNlbGVjdGlvbiBhbmQgY3JlYXRlcyBhIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIG1vZGVsLlxyXG4gICAgICAgICAgICB2YXIgbWVkaWFfYXR0YWNobWVudCA9IG1ldGFJbWFnZUZyYW1lXHJcbiAgICAgICAgICAgICAgICAuc3RhdGUoKVxyXG4gICAgICAgICAgICAgICAgLmdldChcInNlbGVjdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgLmZpcnN0KClcclxuICAgICAgICAgICAgICAgIC50b0pTT04oKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNlbmRzIHRoZSBhdHRhY2htZW50IFVSTCB0byBvdXIgY3VzdG9tIGltYWdlIGlucHV0IGZpZWxkLlxyXG4gICAgICAgICAgICAkKGZpZWxkX3RhcmdldCkudmFsKG1lZGlhX2F0dGFjaG1lbnQudXJsKTtcclxuICAgICAgICAgICAgJChwcmV2aWV3X3RhcmdldCkuYXR0cihcInNyY1wiLCBtZWRpYV9hdHRhY2htZW50LnVybCk7XHJcbiAgICAgICAgICAgICQocHJldmlld190YXJnZXQpLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwic2QtaGlkZVwiKTtcclxuICAgICAgICAgICAgJChcIi5zZGdsLW1lZGlhX19yZW1vdmUtd3JhcHBlclwiKS5yZW1vdmVDbGFzcyhcInNkLWhpZGVcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIE9wZW5zIHRoZSBtZWRpYSBsaWJyYXJ5IGZyYW1lLlxyXG4gICAgICAgIG1ldGFJbWFnZUZyYW1lLm9wZW4oKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFJlbW92ZSBzbGlkZVxyXG4gICAgJChcIiNzZGdsLXNsaWRlcnNcIikub24oXCJjbGlja1wiLCBcIi5zZGdsLXJlbW92ZS1zbGlkZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoXCJ0ZFwiKS5wYXJlbnQoXCJ0clwiKS5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEluaXRpYWxpemUgalF1ZXJ5IFVJIHNvcnRhYmxlIGZvciBzbGlkZXIgaW1hZ2VzIHRhYmxlXHJcbiAgICAkKFwiI3NkZ2wtc2xpZGVycyB0Ym9keVwiKS5zb3J0YWJsZSgpO1xyXG4gICAgJChcIiNzZGdsLXNsaWRlcnMgdGJvZHlcIikuZGlzYWJsZVNlbGVjdGlvbigpO1xyXG59KTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==